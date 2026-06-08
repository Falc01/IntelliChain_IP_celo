// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract CopyrightRegistry {
    struct CopyrightData {
        address owner;
        string contentHash;
        string title;
        uint256 timestamp;
        uint8 status; // 0 = Pending, 1 = Approved
    }

    // Mapping from contentHash to CopyrightData
    mapping(string => CopyrightData) public copyrights;
    
    // List of all registered content hashes
    string[] public registeredHashes;

    event CopyrightRegistered(
        address indexed owner,
        string contentHash,
        string title,
        uint256 timestamp,
        uint8 status
    );

    /// @notice Registers a new copyright
    /// @param _contentHash The unique hash of the content
    /// @param _title The title of the work
    /// @param _isPending Whether the registry is pending review
    function registerCopyright(
        string calldata _contentHash,
        string calldata _title,
        bool _isPending
    ) external {
        // Ensure the hash is not already registered
        require(copyrights[_contentHash].owner == address(0), "Copyright already registered");
        bytes memory hashBytes = bytes(_contentHash);
        require(hashBytes.length > 0, "Content hash cannot be empty");

        uint8 status = _isPending ? 0 : 1;

        copyrights[_contentHash] = CopyrightData({
            owner: msg.sender,
            contentHash: _contentHash,
            title: _title,
            timestamp: block.timestamp,
            status: status
        });

        registeredHashes.push(_contentHash);

        emit CopyrightRegistered(
            msg.sender,
            _contentHash,
            _title,
            block.timestamp,
            status
        );
    }
    
    /// @notice Helper to check if a content hash is registered
    function isRegistered(string calldata _contentHash) external view returns (bool) {
        return copyrights[_contentHash].owner != address(0);
    }

    /// @notice Helper to get total count of registered hashes
    function getRegisteredCount() external view returns (uint256) {
        return registeredHashes.length;
    }
}
