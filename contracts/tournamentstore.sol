// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;//^ specifie la version minimale requise pour le compilateur

// import "hardhat/console.sol";
import "./ownable.sol";
// import "@nomicfoundation/hardhat-console.sol";

contract TournamentStore is Ownable {

//Impossible de faire du packing de donnee (opimisation de gas) car utilisatio de liste de uint
    struct TournamentScore {
        uint []     players;
        uint []     winner;
        string      score;
    }
    mapping(uint => TournamentScore) tournamentStorage;

    event TournamentScoreStored(uint _tounrnamentId);

    function isAlreadyStored(uint _id) internal view returns (bool) {
        return (tournamentStorage[_id].winner.length > 0);
    }

    modifier onlyIfExists(uint _id) {
        require(isAlreadyStored(_id) == true, "Ce tournoi n'est pas stocke sur le contrat.");
        _;
    }

    modifier onlyIfDoesntExist(uint _id){
        require(isAlreadyStored(_id) == false, "Ce tournoi a deja ete stocke !");
        _;
    }

    function storeScore(uint _id, uint [] memory _players, uint [] memory _winner, string memory _score) public  onlyOwner() onlyIfDoesntExist(_id){
        emit TournamentScoreStored(_id);
        // console.log("Evenement TournamentScoreStored emis avec ID:", _id);//Ajoute
        tournamentStorage[_id] = TournamentScore(_players, _winner, _score);
        //Event
    }

    function getTournamentScore(uint _id) public view onlyIfExists(_id)  returns (uint [] memory, uint [] memory, string memory) {
        return  (tournamentStorage[_id].players, tournamentStorage[_id].winner, tournamentStorage[_id].score);
    }

}
