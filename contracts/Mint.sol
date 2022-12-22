// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./ERC721Enumerable.sol";
import "./Ownable.sol";


contract Mint is ERC721Enumerable, Ownable {
	uint256 public cost;
	uint256 public decimals = 18;
	uint public mediaCount = 0;

	mapping(uint => Media) public media;

	struct Media {
		uint mediaId;
		string mediaHash;
		uint mediaSize;
		string mediaType;
		string mediaName;
		string mediaDescription;
		uint uploadTime;
		address uploader;
	}

	event MediaUploaded(
	    uint mediaId,
	    string mediaHash,
	    uint mediaSize,
	    string mediaType,
	    string mediaName, 
	    string mediaDescription,
	    uint uploadTime,
	    address uploader
	);

	constructor(
	string memory _name,
    string memory _symbol,
    uint256 _cost
	) ERC721(_name, _symbol)
	{
		cost = _cost; 
	}

	function uploadMedia(
		string memory _mediaHash,
		uint _mediaSize, 
		string memory _mediaType, 
		string memory _mediaName,
		string memory _mediaDescription
	) public {
		// Make sure the file hash exists
		require(bytes(_mediaHash).length > 0);

		// Make sure file type exists
    	require(bytes(_mediaType).length > 0);

    	// Make sure file description exists
	    require(bytes(_mediaDescription).length > 0);

	    // Make sure file fileName exists
	    require(bytes(_mediaName).length > 0);

	    // Make sure uploader address exists
	    require(msg.sender!=address(0));

	    // Make sure file size is more than 0
	    require(_mediaSize>0);

		// Increment media id
		mediaCount ++;

		// Add media file to the contract
		media[mediaCount] = Media(mediaCount, _mediaHash, _mediaSize, _mediaType, _mediaName, _mediaDescription, block.timestamp, msg.sender);
		
		// Trigger an event
		emit MediaUploaded(mediaCount, _mediaHash, _mediaSize, _mediaType, _mediaName, _mediaDescription, block.timestamp, msg.sender);
	}

	function setCost(uint256 _cost) public onlyOwner {
        cost = _cost;
    }
}
