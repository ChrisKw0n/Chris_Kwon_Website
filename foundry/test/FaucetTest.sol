// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test} from "../lib/forge-std/src/Test.sol";
import "../src/Faucet.sol";

contract FaucetTest is Test {
    Faucet public faucet;
    address public owner;

    function setUp() public {
        owner = address(this);

        // Deploy the Faucet contract
        faucet = new Faucet();
    }

    function testOwnerIsDeployer() public view {
        assertEq(faucet.owner(), owner);
    }
}
