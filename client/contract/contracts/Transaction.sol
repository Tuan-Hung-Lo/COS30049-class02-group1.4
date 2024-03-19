pragma solidity 0.5.16;
// pragma experimental ABIEncoderV2;

import "./ERC721Full.sol";

contract Transaction is ERC721Full {
    mapping(address => uint256[]) public UserTransactionID;

    mapping(address => uint) public addressmap;

    struct Trans {
        uint256 ID;
        uint PID;
        address from;
        address to;
        uint value;
        uint time;
    }

    Trans[] public Transactions;

    constructor() public ERC721Full("Transaction", "TRANSACTION") {}

    function mint(
        uint _productID,
        address _from,
        address _to,
        uint _value
    ) public {
        // bytes32 hashed = HashCourse(_course);
        // require(!OwnerCheck[_productID][_userID]);
        uint _id = Transactions.length;
        Transactions.push(
            Trans({
                ID: _id,
                PID: _productID,
                value: _value,
                from: _from,
                to: _to,
                time: block.timestamp
            })
        );

        _mint(msg.sender, _id);
        UserTransactionID[_to].push(_id);
    }

    function getTx(address uad) public view returns (uint256[] memory) {
        return UserTransactionID[uad];
    }

    function getTotalTx(address uad) public view returns (uint) {
        return UserTransactionID[uad].length;
    }

    function burn(uint _tokenId) public {
        require(_isApprovedOrOwner(msg.sender, _tokenId));
        _burn(ownerOf(_tokenId), _tokenId);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function sendEtherSafely(
        address payable _to,
        uint256 _tokenId,
        uint256 _amount
    ) public {
        require(
            _isApprovedOrOwner(msg.sender, _tokenId),
            "Not approved to transfer token"
        );
        require(
            address(this).balance >= _amount,
            "Insufficient contract balance"
        );

        safeTransferFrom(msg.sender, _to, _tokenId);

        _to.transfer(_amount);
    }
}
