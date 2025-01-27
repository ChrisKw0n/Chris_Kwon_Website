// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Faucet {
    address public owner;
    uint256 public withdrawalLimit = 0.1 ether; // Max amount to withdraw per request
    uint256 public cooldownTime = 1 days; // Cooldown period between withdrawals

    mapping(address => uint256) public lastWithdrawalTime;

    event DonationReceived(address indexed donor, uint256 amount);
    event EtherWithdrawn(address indexed recipient, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    // Function to receive donations
    receive() external payable {
        require(msg.value > 0, "Donation must be greater than 0");
        emit DonationReceived(msg.sender, msg.value);
    }

    // Function for developers to withdraw testnet ETH
    function withdraw() external {
        require(
            address(this).balance >= withdrawalLimit,
            "Insufficient funds in the faucet"
        );
        require(
            block.timestamp >= lastWithdrawalTime[msg.sender] + cooldownTime,
            "You must wait before withdrawing again"
        );

        lastWithdrawalTime[msg.sender] = block.timestamp;
        payable(msg.sender).transfer(withdrawalLimit);
        emit EtherWithdrawn(msg.sender, withdrawalLimit);
    }

    // Owner function to withdraw unused funds
    function withdrawFunds(uint256 amount) external onlyOwner {
        require(amount <= address(this).balance, "Insufficient balance");
        payable(owner).transfer(amount);
    }

    // Owner function to update the withdrawal limit
    function setWithdrawalLimit(uint256 newLimit) external onlyOwner {
        withdrawalLimit = newLimit;
    }

    // Owner function to update the cooldown time
    function setCooldownTime(uint256 newCooldown) external onlyOwner {
        cooldownTime = newCooldown;
    }

    // Fallback function to accept ETH
    fallback() external payable {
        emit DonationReceived(msg.sender, msg.value);
    }
}
