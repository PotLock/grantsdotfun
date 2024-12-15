---
sidebar_position: 1
---

# Contracts

The REFER Protocol consists of two primary contracts: the Referral Factory and the Referral Contract.

Currently deployed on Base (an Ethereum L2 based on the OP Stack), we are open to expanding referral graphs to other EVM chains and even making the protocol multichain with cross-chain signatures.

REPO: [https://github.com/potlock/refer-protocol/tree/main/contracts](https://github.com/potlock/refer-protocol/tree/main/contracts)

## Deployed Contracts
- Mainnet: TBD
- Staging: TBD
- Testnet: TBD

Source Code: [Link to be added when available]

If you're interested in having us deploy contracts on your chain, please contact the Potlock Foundation.

# How to Deploy Contracts on EVM

### Introduction to Solidity

Solidity is the primary programming language for writing smart contracts on Ethereum and EVM-compatible blockchains. Here's a brief introduction:

- Solidity is a statically-typed, contract-oriented language
- Its syntax is similar to JavaScript, but with some key differences
- Key features include contract definitions, functions, state variables, and events
- The Solidity compiler (solc) compiles code into EVM bytecode
- Smart contracts written in Solidity can handle transactions, store data, and execute complex logic

Learn more: [Solidity Documentation](https://docs.soliditylang.org/)

### Introduction to EVM

The Ethereum Virtual Machine (EVM) is the runtime environment for smart contracts on Ethereum and EVM-compatible chains:

- EVM is a stack-based, 256-bit virtual machine
- It executes bytecode compiled from high-level languages like Solidity
- EVM ensures deterministic execution across all nodes in the network
- Key concepts: gas (execution cost), storage, memory, and calldata
- EVM opcodes define the low-level instructions that can be executed

Learn more: [Ethereum Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf)

## How to Deploy Contracts on Base

Base is an Ethereum L2 scaling solution built on the OP Stack. To deploy contracts on Base:

1. Set up a development environment (e.g., Hardhat, Truffle)
2. Write and test your smart contracts locally
3. Configure your deployment script for the Base network
4. Obtain Base testnet or mainnet tokens for gas fees
5. Deploy using your chosen development framework

Base Network Details:
- Base Mainnet: [Base Mainnet RPC details](https://docs.base.org/network-information)
- Base Goerli Testnet: [Base Goerli Testnet RPC details](https://docs.base.org/network-information)

Learn more: 
- About Base: [https://base.org/](https://base.org/)
- Base Documentation: [https://docs.base.org/](https://docs.base.org/)

### Get Testnet Tokens on BASE

To get testnet tokens on Base Goerli:

1. Set up a wallet compatible with Base (e.g., MetaMask)
2. Add Base Goerli network to your wallet
3. Visit the Base Goerli Faucet: [https://docs.base.org/tools/network-faucets](https://docs.base.org/tools/network-faucets)
4. Connect your wallet and request testnet tokens
5. Use these tokens for deploying and interacting with contracts on the testnet

### Useful Tools
- Gas Fee Estimator: [https://gasfees.io](https://gasfees.io)
- L2 Fee Comparison: [https://l2fees.info/](https://l2fees.info/)
