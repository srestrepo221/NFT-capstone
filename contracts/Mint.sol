// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./ERC721Enumerable.sol";
import "./Ownable.sol";


contract Mint is ERC721Enumerable, Ownable {
	uint256 public cost;
	uint256 public decimals = 18;
	uint public mediacount = 0;
	mapping(uint => Media) public media;

	struct Media {
		uint mediaId;
		string fileHash;
		uint fileSize;
		string fileType;
		string fileName;
		string fileDescription;
		uint uploadTime;
		address payable uploader;
	}

	event MediaUploaded(
	    uint mediaId,
	    string fileHash,
	    uint fileSize,
	    string fileType,
	    string fileName, 
	    string fileDescription,
	    uint uploadTime,
	    address payable uploader
	);

	constructor(
		uint256 _cost

	) ERC721(""){
		cost = _cost; 
	}

	function uploadMedia(
		string memory _fileHash,
		uint _fileSize, 
		string memory _fileType, 
		string memory _fileName,
		string memory _fileDescription
	) public {
		// Make sure the file hash exists
		require(bytes(_fileHash).length > 0);

		// Make sure file type exists
    	require(bytes(_fileType).length > 0);

    	// Make sure file description exists
	    require(bytes(_fileDescription).length > 0);

	    // Make sure file fileName exists
	    require(bytes(_fileName).length > 0);

	    // Make sure uploader address exists
	    require(msg.sender!=address(0));

	    // Make sure file size is more than 0
	    require(_fileSize>0);

		// Increment media id
		mediaCount ++;

		// Add media to the contract
		media[mediaCount] = Media(mediaCount, _fileHash, _fileSize, _fileType, _fileName, _fileDescription, now, msg.sender);
		
		// Trigger an event
		emit MediaUploaded(mediaCount, _fileHash, _fileSize, _fileType, _fileName, _fileDescription, now, msg.sender);
	}

	function setPrice(uint256 _price) public onlyOwner {
        price = _price;
    }
}
