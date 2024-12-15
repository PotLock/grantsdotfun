---
slug: welcome
title: Welcome
authors: [plugrel]
tags: [contract, factory, refer]
---

# Referral System API Documentation

This document outlines the API for the Referral System, which consists of a Referral Factory and individual Referral Contracts.
 
## Referral Factory

The Referral Factory is responsible for creating and managing Referral Contracts.

### Functions

#### createReferralContract

Creates a new Referral Contract with specified parameters.

**Parameters:**
- `name`: Name of the referral program
- `description`: Description of the referral program
- `parentId`: ID of the parent referral program (if applicable)
- `referrersRequired`: Number of referrers required for program completion
- `lengthOfReferralProgram`: Duration of the referral program
- `referreeRequirements`: Address of the contract defining referee requirements
- `maxReferrersPerPerson`: Maximum number of referrers allowed per person

**Returns:** Address of the newly created Referral Contract

#### getDeployedReferralContracts

Retrieves a list of all deployed Referral Contracts.

**Returns:** Array of addresses of all deployed Referral Contracts

#### addReferral

Records a new referral relationship.

## Referral Contract

Each Referral Contract represents a specific referral program with its own rules and parameters.

### Structures

#### ReferralEdge

Represents a referral relationship between a referrer and a referee.

**Parameters:**
- `referrer`: Address of the referrer
- `referee`: Address of the referee

#### slashReferrer

Penalizes a referrer for violating rules.
