// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "hardhat/console.sol";

contract Ownable {

    address private owner;

// indexed permet d'inscrire les donnees dans les logs et de pouvoir filtrer ces donnees pour le front end
    event OwnerShipTransferred(address indexed _lastOwner, address indexed _newOwner);

    constructor() {
        owner = msg.sender;
        emit OwnerShipTransferred(address(0), msg.sender);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Sender is not the owner !");
        _;
    }

    function transferOwnership(address _newOwner) onlyOwner public {
        owner = _newOwner;
        // console.log("Event OwnerShipTransferred emis avec newOwner = ", _newOwner);
        emit OwnerShipTransferred(msg.sender, owner);
    }

	function getOwner() public view returns (address){
		return owner;
	}
}
