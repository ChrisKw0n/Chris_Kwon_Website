// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "../lib/forge-std/src/Script.sol";
import {Faucet} from "../src/Faucet.sol";

contract DeployFaucet is Script {
    function run() external {
        vm.startBroadcast(); // Start broadcasting transactions

        // Deploy the Faucet contract
        Faucet faucet = new Faucet();

        // Log the deployed contract address
        console.log("Faucet deployed to:", address(faucet));

        vm.stopBroadcast(); // Stop broadcasting transactions
    }
}
