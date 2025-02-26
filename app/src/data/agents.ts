import { Agent, GrantOperatorAgent } from "@/types/agent";
import { priceHistoryData } from "./priceHistory";

const agents: Agent[] = [
    {
      id: 1,
      name: "AI Research DAO",
      price: "$100",
      growth: "+28.91%",
      description: "Lorem ipsum dolor sit amet consectetur. Magnis tincidunt platea adipiscing diam in. Ut urna sed quis et eu nibh sapien neque quis.",
      currentTreasury: "$8,600,213.00",
      weeklyGrantPool: "$8,600,213.00",
      image: "/assets/images/image-example.png",
      ticker: "AIRD",
      creator: "Amichael_design",
      marketcap: "$2,567,001.00",
      change24h: "+0.91",
      capitalDeployed: "$250,000.00",
      weeklyPool: "$250.00",
      address: "blackdragon.near",
      twitterLink: "https://twitter.com/ai_research_dao",
      telegramLink: "https://t.me/ai_research_dao",
      evaluation_criteria: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Purus elementum erat quae nec aliquat sed feugiat dolor donec. Mi non maecenas non adipiscing. Fam enim et risus nulla amet mus in aliquam porta.",
      reviewers:[
        {
          image: "/assets/images/avatar/avatar-example.png",
          name: "John Doe",
          username: "@john_doe",
          platform: "Twitter",
        },
        {
          image: "/assets/images/avatar/avatar-example.png",
          name: "John Doe",
          username: "@john_doe",
          platform: "Twitter",
        },
        {
          image: "/assets/images/avatar/avatar-example.png",
          name: "John Doe",
          username: "@john_doe",
          platform: "Twitter",
        },
      ],
      agent_intents: [
        {
          platform: "Twitter",
          username: "@grantsfun",
        },
        {
          platform: "Telegram",
          username: "@grantsfun",
        },
        {
          platform: "Discord",
          username: "@grantsfun",
        }
      ],
      totalGrants: "156",
      governance:{
        description: "Lorem ipsum dolor sit amet consectetur. Magnis tincidunt platea adipiscing diam in. Ut urna sed quis et eu nibh sapien neque quis.",
        number_of_proposals: "100",
        number_of_capital_deployed: "100",
        number_of_total_voting_power: "100",
        proposal:[
            {
                id: 1,
                title: "Proposal 1",
                type: "treasury",
                description: "Lorem ipsum dolor sit amet consectetur. Magnis tincidunt platea adipiscing diam in. Ut urna sed quis et eu nibh sapien neque quis.",
                status: "in_progress",
                treasurySettings: [
                    {
                        name: "Weekly Grant Pool",
                        currentValue: "$8,600,213.00",
                        proposedValue: "$10,000,000.00"
                    },
                    {
                        name: "Maximum Grant Size",
                        currentValue: "$500,000.00",
                        proposedValue: "$750,000.00"
                    }
                ],
                publisher: "joun.near",
                voters: [
                    {
                        id: "voter1",
                        name: "Alice.near",
                        vote: "Yes",
                        votePercentage: 35,
                        voteAmount: "350,000"
                    },
                    {
                        id: "voter2",
                        name: "Bob.near",
                        vote: "No",
                        votePercentage: 25,
                        voteAmount: "250,000"
                    }
                ],
                votingPower: {
                    amount: "1,000,000",
                    percentage: "45%"
                },
                time_created: "2024-01-01",
                time_started: "2024-01-01",
                time_ended: "2024-02-01"
            },
            {
                id: 2,
                title: "Proposal 2",
                type: "governance",
                description: "Lorem ipsum dolor sit amet consectetur. Magnis tincidunt platea adipiscing diam in. Ut urna sed quis et eu nibh sapien neque quis.",
                status: "approved",
                treasurySettings: [
                    {
                        name: "Governance Token Distribution",
                        currentValue: "5% per month",
                        proposedValue: "7% per month"
                    }
                ],
                publisher: "jozz.near",
                voters: [
                    {
                        id: "voter3",
                        name: "Charlie.near",
                        vote: "Yes",
                        votePercentage: 40,
                        voteAmount: "400,000"
                    }
                ],
                votingPower: {
                    amount: "800,000",
                    percentage: "35%"
                },
                time_created: "2024-01-01",
                time_started: "2024-01-01",
                time_ended: "2024-02-01"
            }
        ]
      },
      grantees: {
        total_funded: "100",
        total_grants: "100",
        weekly_payouts: "100",
        completed_grants: "100",
        grantees_posts: [
            {
                id: 1,
                avatar: "/assets/images/avatar/avatar.png",
                name: "Potlock",
                username: "Potlock_",
                content: "Building decentralized funding infrastructure for public goods on NEAR Protocol.",
                time_created: "2025-02-10",
                hasThread: true,
                twitterProposal: [
                    {
                        id: 1,
                        description: "Lorem ipsum dolor sit amet consectetur. Eget tincidunt aliquam dictum sed. Turpis tristique mi sit tempor lorem. Diam commodo eu vitae urna turpis. Elit nunc molestie lectus molestie nec aliquus. Id turpis pellentesque sed sit vestibulum lacus varius. Nunc proin id sed mattis dolor. Risus placerat faucibus sit placerat id proin pellentesque purus ultricies. Vestibulum mauris a malesuada non risus et magna risus duis. Porta ut vitae neque elit hendrerit amet et mi. In curabitur magna amet vitae sit hendrerit.",
                        time_created: "2024-05-14",
                        twitter_url: "https://twitter.com/example/status/123"
                    },
                    {
                        id: 2,
                        description: "Lorem ipsum dolor sit amet consectetur. Eget tincidunt aliquam dictum sed. Turpis tristique mi sit tempor lorem. Diam commodo eu vitae urna turpis. Elit nunc molestie lectus molestie nec aliquus. Id turpis pellentesque sed sit vestibulum lacus varius. Nunc proin id sed mattis dolor. Risus placerat faucibus sit placerat id proin pellentesque purus ultricies. Vestibulum mauris a malesuada non risus et magna risus duis. Porta ut vitae neque elit hendrerit amet et mi. In curabitur magna amet vitae sit hendrerit.",
                        time_created: "2024-05-14",
                        twitter_url: "https://twitter.com/example/status/123"
                    }
                ],
                paymentTranches: [
                    { amount: "$50,000", date: "2025-01-09" },
                    { amount: "$50,000", date: "2025-01-09" },
                    { amount: "$50,000", date: "2025-01-09" },
                ],
                info: {
                    description: "Potlock is building decentralized funding infrastructure for public goods on NEAR Protocol. Our mission is to make funding accessible and transparent for everyone.",
                    website: "https://potlock.org",
                    github: "https://github.com/potlock",
                    twitter: "https://twitter.com/Potlock_"
                }
            },
            {
                id: 2,
                avatar: "/assets/images/avatar/avatar.png",
                name: "NearWeek",
                username: "NearWeek_",
                content: "Your trusted source for NEAR Protocol ecosystem news and updates.",
                hasThread: true,
                time_created: "2024-03-15"
            },
            {
                id: 3,
                avatar: "/assets/images/avatar/avatar.png",
                name: "Ref Finance",
                username: "Ref_Finance",
                content: "Leading AMM protocol on NEAR, providing seamless DeFi experiences.",
                hasThread: false,
                time_created: "2024-03-14"
            },
            {
                id: 4,
                avatar: "/assets/images/avatar/avatar.png",
                name: "Paras",
                username: "Paras_NFT",
                content: "Digital art cards marketplace on NEAR Protocol.",
                hasThread: true,
                time_created: "2024-03-13"
            },
            {
                id: 5,
                avatar: "/assets/images/avatar/avatar.png",
                name: "Aurora",
                username: "AuroraNetwork",
                content: "EVM compatibility layer built on NEAR Protocol.",
                hasThread: true,
                time_created: "2024-03-12"
            },
            {
                id: 6,
                avatar: "/assets/images/avatar/avatar.png",
                name: "Octopus Network",
                username: "Octopus_Network",
                content: "Multichain interoperable crypto-network for launching Web3 appchains.",
                hasThread: false,
                time_created: "2024-03-11"
            },
            {
                id: 7,
                avatar: "/assets/images/avatar/avatar.png",
                name: "Mintbase",
                username: "Mintbase_",
                content: "NFT infrastructure provider on NEAR Protocol.",
                hasThread: true,
                time_created: "2024-03-10"
            },
            {
                id: 8,
                avatar: "/assets/images/avatar/avatar.png",
                name: "Human Guild",
                username: "HumanGuild_",
                content: "Supporting game developers building on NEAR Protocol.",
                hasThread: true,
                time_created: "2024-03-09"
            }
        ]
      },
      logs: [
        {
            id: "1",
            type: "interaction",
            platform: "twitter",
            user: {
                name: "Web3plug",
                avatar: "/assets/images/avatar/avatar.png"
            },
            message: "Mentioned you in their #GRANT REVIEW post",
            timestamp: "2024-01-10T12:00:00Z",
            actionLink: "View on Twitter"
        },
        {
            id: "2",
            type: "interaction",
            platform: "telegram",
            user: {
                name: "Web3plug",
                avatar: "/assets/images/avatar/avatar.png"
            },
            message: "Mentioned you in their #GRANT REVIEW post",
            timestamp: "2024-01-10T12:00:00Z",
            actionLink: "View on Telegram"
        },
        {
            id: "3",
            type: "developer",
            timestamp: "2024-01-10T12:05:00Z",
            commit: "bf580e76c9e23593b30ecadbefb29c3892a135ec",
            contributor: {
                name: "PlugnLinear",
                avatar: "/assets/images/avatar/avatar-1.png"
            }
        },
        {
            id: "4",
            type: "developer",
            timestamp: "2024-01-10T12:00:00Z",
            commit: "bf580e76c9e23593b30ecadbefb29c3892a135ec",
            contributor: {
                name: "PlugnLinear",
                avatar: "/assets/images/avatar/avatar-1.png"
            }
        }
      ],
      transactions: [
        {
          id: "tx1",
          type: "buy",
          price: "102.45",
          amount: "1500",
          token: {
            symbol: "AIRD",
            address: "0x1234567890abcdef1234567890abcdef12345678",
            decimals: 18
          },
          tradingInfo: {
            high24h: "105.20",
            low24h: "98.75",
            volume24h: "2500000",
            priceChange24h: "+2.45",
            priceChangePercentage24h: "+2.45"
          },
          timestamp: "2024-03-20T09:30:00Z",
          hash: "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
          from: "0x9876543210fedcba9876543210fedcba98765432",
          to: "0x1234567890abcdef1234567890abcdef12345678"
        },
        {
          id: "tx2",
          type: "sell",
          price: "101.80",
          amount: "2000",
          token: {
            symbol: "AIRD",
            address: "0x1234567890abcdef1234567890abcdef12345678",
            decimals: 18
          },
          tradingInfo: {
            high24h: "105.20",
            low24h: "98.75",
            volume24h: "2500000",
            priceChange24h: "-0.65",
            priceChangePercentage24h: "-0.63"
          },
          timestamp: "2024-03-20T09:45:00Z",
          hash: "0xfedcba0987654321fedcba0987654321fedcba0987654321fedcba0987654321",
          from: "0x5432109876fedcba5432109876fedcba54321098",
          to: "0x1234567890abcdef1234567890abcdef12345678"
        },
        {
          id: "tx3",
          type: "buy",
          price: "103.25",
          amount: "3500",
          token: {
            symbol: "AIRD",
            address: "0x1234567890abcdef1234567890abcdef12345678",
            decimals: 18
          },
          tradingInfo: {
            high24h: "105.20",
            low24h: "98.75",
            volume24h: "2500000",
            priceChange24h: "+1.45",
            priceChangePercentage24h: "+1.42"
          },
          timestamp: "2024-03-20T10:00:00Z",
          hash: "0x123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0",
          from: "0x3456789012defabc3456789012defabc34567890",
          to: "0x1234567890abcdef1234567890abcdef12345678"
        },
        {
          id: "tx4",
          type: "buy",
          price: "104.10",
          amount: "1800",
          token: {
            symbol: "AIRD",
            address: "0x1234567890abcdef1234567890abcdef12345678",
            decimals: 18
          },
          tradingInfo: {
            high24h: "105.20",
            low24h: "98.75",
            volume24h: "2500000",
            priceChange24h: "+0.85",
            priceChangePercentage24h: "+0.82"
          },
          timestamp: "2024-03-20T10:15:00Z",
          hash: "0x89abcdef0123456789abcdef0123456789abcdef0123456789abcdef01234567",
          from: "0x7890123456defabc7890123456defabc78901234",
          to: "0x1234567890abcdef1234567890abcdef12345678"
        },
        {
          id: "tx5",
          type: "sell",
          price: "103.90",
          amount: "2200",
          token: {
            symbol: "AIRD",
            address: "0x1234567890abcdef1234567890abcdef12345678",
            decimals: 18
          },
          tradingInfo: {
            high24h: "105.20",
            low24h: "98.75",
            volume24h: "2500000",
            priceChange24h: "-0.20",
            priceChangePercentage24h: "-0.19"
          },
          timestamp: "2024-03-20T10:30:00Z",
          hash: "0xcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789ab",
          from: "0xbcdef01234567890bcdef01234567890bcdef012",
          to: "0x1234567890abcdef1234567890abcdef12345678"
        }
      ],
      priceHistory: priceHistoryData.AIRD
    },
    {
      id: 2,
      name: "Web3 Innovation Fund",
      price: "$100",
      growth: "+15.45%",
      description: "Focused on advancing decentralized technologies and supporting innovative blockchain projects across various sectors.",
      currentTreasury: "$5,200,000.00",
      weeklyGrantPool: "$450,000.00",
      image: "/assets/images/image-example.png",
      ticker: "WIF",
      creator: "web3_innovator",
      marketcap: "$1,200,000.00",
      change24h: "+15.45",
      capitalDeployed: "$180,000.00",
      weeklyPool: "$150.00",
      address: "web3fund.near",
      twitterLink: "https://twitter.com/web3fund",
      telegramLink: "https://t.me/web3fund",
      evaluation_criteria: "Standard evaluation criteria...",
      reviewers: [
        {
          image: "/assets/images/image-example.png",
          name: "John Doe",
          username: "@john_doe",
          platform: "Twitter",
        },
      ],
      agent_intents: [
        {
          platform: "Twitter",
          username: "@grantsfun",
        },
        
      ],
      totalGrants: "42",
      governance: {
        description: "Web3 Innovation Fund governance structure for decentralized decision making.",
        number_of_proposals: "45",
        number_of_capital_deployed: "180",
        number_of_total_voting_power: "1200",
        proposal: [
          {
            id: 3,
            title: "Expand DeFi Infrastructure Grants",
            type: "treasury",
            description: "Proposal to increase funding allocation for DeFi infrastructure projects.",
            status: "in_progress",
            treasurySettings: [
                {
                    name: "Infrastructure Fund",
                    currentValue: "$1,000,000",
                    proposedValue: "$2,000,000"
                }
            ],
            publisher: "web3_innovator.near",
            voters: [
                {
                    id: "voter4",
                    name: "Dave.near",
                    vote: "Yes",
                    votePercentage: 45,
                    voteAmount: "450,000"
                }
            ],
            votingPower: {
                amount: "450,000",
                percentage: "37.5%"
            },
            time_created: "2024-02-15",
            time_started: "2024-02-16",
            time_ended: "2024-03-16"
          },
          {
            id: 4,
            title: "Cross-chain Integration Initiative",
            type: "treasury",
            description: "Support projects working on cross-chain interoperability solutions.",
            status: "executed",
            treasurySettings: [
                {
                    name: "Cross-chain Development Fund",
                    currentValue: "$500,000",
                    proposedValue: "$1,000,000"
                }
            ],
            publisher: "chain_builder.near",
            voters: [
                {
                    id: "voter5",
                    name: "Eve.near",
                    vote: "Yes",
                    votePercentage: 38,
                    voteAmount: "380,000"
                }
            ],
            votingPower: {
                amount: "380,000",
                percentage: "31.7%"
            },
            time_created: "2024-01-10",
            time_started: "2024-01-11",
            time_ended: "2024-02-11"
          }
        ]
      },
      grantees: {
        total_funded: "45",
        total_grants: "42",
        weekly_payouts: "8",
        completed_grants: "35",
        grantees_posts: [
          {
            id: 1,
            avatar: "/assets/images/avatar/avatar.png",
            name: "DeFi Protocol",
            username: "DeFi_Protocol",
            content: "Building innovative DeFi solutions on Web3",
            hasThread: true,
            time_created: "2024-03-15"
          }
        ]
      },
      priceHistory: priceHistoryData.WIF
    },
    {
      id: 3,
      name: "Climate Tech DAO",
      price: "$100",
      growth: "+22.31%",
      description: "Supporting projects that leverage technology to address climate change and environmental sustainability.",
      currentTreasury: "$12,300,000.00",
      weeklyGrantPool: "$900,000.00",
      image: "/assets/images/image-example.png",
      ticker: "CTD",
      creator: "climate_innovator",
      marketcap: "$3,500,000.00",
      change24h: "+22.31",
      capitalDeployed: "$500,000.00",
      weeklyPool: "$900.00",
      address: "climatetech.near",
      twitterLink: "https://twitter.com/climatetech_dao",
      telegramLink: "https://t.me/climatetech_dao",
      evaluation_criteria: "Standard evaluation criteria for climate tech projects...",
      reviewers: [],
      agent_intents: [],
      totalGrants: "78",
      governance: {
        description: "Climate Tech DAO's governance framework for environmental impact projects.",
        number_of_proposals: "65",
        number_of_capital_deployed: "500",
        number_of_total_voting_power: "2500",
        proposal: [
          {
            id: 5,
            title: "Carbon Offset Technology Grant",
            type: "treasury",
            description: "Supporting innovative carbon capture and offset solutions.",
            status: "in_progress",
            treasurySettings: [
                {
                    name: "Carbon Offset Fund",
                    currentValue: "$2,000,000",
                    proposedValue: "$3,500,000"
                },
                {
                    name: "Research Grant Size",
                    currentValue: "$100,000",
                    proposedValue: "$150,000"
                }
            ],
            publisher: "climate_innovator.near",
            voters: [
                {
                    id: "voter6",
                    name: "Frank.near",
                    vote: "Yes",
                    votePercentage: 45,
                    voteAmount: "450,000"
                },
                {
                    id: "voter7",
                    name: "Grace.near",
                    vote: "Yes",
                    votePercentage: 40,
                    voteAmount: "400,000"
                }
            ],
            votingPower: {
                amount: "850,000",
                percentage: "42.5%"
            },
            time_created: "2024-02-20",
            time_started: "2024-02-21",
            time_ended: "2024-03-21"
          },
          {
            id: 6,
            title: "Renewable Energy Tracking System",
            type: "treasury",
            description: "Blockchain-based renewable energy certificate tracking platform.",
            status: "in_progress",
            treasurySettings: [
                {
                    name: "Technology Development Fund",
                    currentValue: "$1,500,000",
                    proposedValue: "$2,000,000"
                }
            ],
            publisher: "green_tech.near",
            voters: [
                {
                    id: "voter8",
                    name: "Henry.near",
                    vote: "Yes",
                    votePercentage: 72,
                    voteAmount: "720,000"
                }
            ],
            votingPower: {
                amount: "720,000",
                percentage: "36%"
            },
            time_created: "2024-02-01",
            time_started: "2024-02-02",
            time_ended: "2024-03-02"
          }
        ]
      },
      grantees: {
        total_funded: "82",
        total_grants: "78",
        weekly_payouts: "12",
        completed_grants: "65",
        grantees_posts: [
          {
            id: 1,
            avatar: "/assets/images/avatar/avatar.png", 
            name: "Green Energy Project",
            username: "GreenEnergy",
            content: "Developing blockchain solutions for renewable energy tracking",
            hasThread: true,
            time_created: "2024-03-14"
          }
        ]
      },
      priceHistory: priceHistoryData.CTD
    },
    {
      id: 4,
      name: "DeFi Grants Initiative",
      price: "$100",
      growth: "+19.75%",
      description: "Accelerating the development of decentralized finance protocols and infrastructure.",
      currentTreasury: "$7,800,000.00",
      weeklyGrantPool: "$600,000.00",
      image: "/assets/images/image-example.png",
      ticker: "DGI",
      creator: "defi_grants.near",
      marketcap: "$2,100,000.00",
      change24h: "+19.75",
      capitalDeployed: "$300,000.00",
      weeklyPool: "$600.00",
      address: "defigrants.near",
      twitterLink: "https://twitter.com/defi_grants",
      telegramLink: "https://t.me/defi_grants",
      evaluation_criteria: "Standard evaluation criteria for DeFi projects...",
      reviewers: [],
      agent_intents: [],
      totalGrants: "95",
      governance: {
        description: "DeFi Grants Initiative governance system for protocol development.",
        number_of_proposals: "85",
        number_of_capital_deployed: "300",
        number_of_total_voting_power: "1800",
        proposal: [
          {
            id: 7,
            title: "DeFi Security Audit Program",
            type: "treasury",
            description: "Establishing a comprehensive security audit program for DeFi protocols.",
            status: "in_progress",
            treasurySettings: [
                {
                    name: "Security Audit Fund",
                    currentValue: "$1,000,000",
                    proposedValue: "$1,500,000"
                },
                {
                    name: "Auditor Compensation",
                    currentValue: "$10,000",
                    proposedValue: "$15,000"
                }
            ],
            publisher: "defi_grants.near",
            voters: [
                {
                    id: "voter9",
                    name: "Ian.near",
                    vote: "Yes",
                    votePercentage: 65,
                    voteAmount: "650,000"
                }
            ],
            votingPower: {
                amount: "650,000",
                percentage: "32.5%"
            },
            time_created: "2024-02-10",
            time_started: "2024-02-11",
            time_ended: "2024-03-11"
          },
          {
            id: 8,
            title: "Liquidity Mining Innovation",
            type: "treasury",
            description: "Research and development of new liquidity mining mechanisms.",
            status: "in_progress",
            treasurySettings: [
                {
                    name: "Innovation Fund",
                    currentValue: "$800,000",
                    proposedValue: "$1,200,000"
                }
            ],
            publisher: "defi_researcher.near",
            voters: [
                {
                    id: "voter10",
                    name: "Julia.near",
                    vote: "Yes",
                    votePercentage: 58,
                    voteAmount: "580,000"
                }
            ],
            votingPower: {
                amount: "580,000",
                percentage: "29%"
            },
            time_created: "2024-02-25",
            time_started: "2024-02-26",
            time_ended: "2024-03-26"
          }
        ]
      },
      grantees: {
        total_funded: "100",
        total_grants: "95",
        weekly_payouts: "15",
        completed_grants: "80",
        grantees_posts: [
          {
            id: 1,
            avatar: "/assets/images/avatar/avatar.png",
            name: "DeFi Security",
            username: "DeFiSec",
            content: "Enhancing security measures for DeFi protocols",
            hasThread: true,
            time_created: "2024-03-15"
          }
        ]
      },
      priceHistory: priceHistoryData.DGI
    }
];

const grantOperatorAgents: GrantOperatorAgent[] = [
  {
    id: 1,
    name: "AI Research DAO",
    ticker: "AIRD",
    creator: "ResearchDAO Labs",
    marketcap: "$25,670,450.00",
    price: "$156.78",
    change24h: "+5.91",
    capitalDeployed: "$1,250,000.00",
    weeklyPool: "$25,000.00",
    hasTwitter: true,
    hasTelegram: true,
    twitterLink: "https://twitter.com/ai_research_dao",
    telegramLink: "https://t.me/ai_research_dao"
  },
  {
    id: 2,
    name: "Web3 Grants Collective",
    ticker: "WGC",
    creator: "Web3 Foundation",
    marketcap: "$15,890,230.00",
    price: "$89.45",
    change24h: "-2.34",
    capitalDeployed: "$890,000.00",
    weeklyPool: "$15,000.00",
    hasTwitter: true,
    hasTelegram: true,
    twitterLink: "https://twitter.com/web3_grants",
    telegramLink: "https://t.me/web3_grants"
  },
  {
    id: 3,
    name: "DeFi Builders Fund",
    ticker: "DBF",
    creator: "DeFi Alliance",
    marketcap: "$45,230,780.00",
    price: "$234.56",
    change24h: "+8.67",
    capitalDeployed: "$2,100,000.00",
    weeklyPool: "$35,000.00",
    hasTwitter: true,
    hasTelegram: false,
    twitterLink: "https://twitter.com/defi_builders",
    telegramLink: ""
  },
  {
    id: 4,
    name: "GameFi Accelerator",
    ticker: "GFAC",
    creator: "GameFi Ventures",
    marketcap: "$12,450,890.00",
    price: "$67.89",
    change24h: "+1.23",
    capitalDeployed: "$750,000.00",
    weeklyPool: "$20,000.00",
    hasTwitter: true,
    hasTelegram: true,
    twitterLink: "https://twitter.com/gamefi_acc",
    telegramLink: "https://t.me/gamefi_acc"
  },
  {
    id: 5,
    name: "NFT Creator Fund",
    ticker: "NCF",
    creator: "NFT Labs",
    marketcap: "$8,920,340.00",
    price: "$45.67",
    change24h: "-1.45",
    capitalDeployed: "$450,000.00",
    weeklyPool: "$12,000.00",
    hasTwitter: true,
    hasTelegram: true,
    twitterLink: "https://twitter.com/nft_creator_fund",
    telegramLink: "https://t.me/nft_creator_fund"
  },
  {
    id: 6,
    name: "Privacy Tech DAO",
    ticker: "PTD",
    creator: "Privacy Alliance",
    marketcap: "$18,670,230.00",
    price: "$123.45",
    change24h: "+3.78",
    capitalDeployed: "$980,000.00",
    weeklyPool: "$18,000.00",
    hasTwitter: true,
    hasTelegram: false,
    twitterLink: "https://twitter.com/privacy_tech_dao",
    telegramLink: ""
  },
  {
    id: 7,
    name: "Layer2 Innovation Fund",
    ticker: "L2IF",
    creator: "L2 Labs",
    marketcap: "$32,450,670.00",
    price: "$178.90",
    change24h: "+6.54",
    capitalDeployed: "$1,560,000.00",
    weeklyPool: "$28,000.00",
    hasTwitter: true,
    hasTelegram: true,
    twitterLink: "https://twitter.com/l2_innovation",
    telegramLink: "https://t.me/l2_innovation"
  },
  {
    id: 8,
    name: "ZK Research Grants",
    ticker: "ZKR",
    creator: "ZK Foundation",
    marketcap: "$21,340,560.00",
    price: "$145.67",
    change24h: "-0.89",
    capitalDeployed: "$1,100,000.00",
    weeklyPool: "$22,000.00",
    hasTwitter: true,
    hasTelegram: true,
    twitterLink: "https://twitter.com/zk_research",
    telegramLink: "https://t.me/zk_research"
  },
  {
    id: 9,
    name: "Metaverse Builders Fund",
    ticker: "MVB",
    creator: "Meta Alliance",
    marketcap: "$67,890,450.00",
    price: "$312.45",
    change24h: "+12.34",
    capitalDeployed: "$3,450,000.00",
    weeklyPool: "$45,000.00",
    hasTwitter: true,
    hasTelegram: true,
    twitterLink: "https://twitter.com/metaverse_builders",
    telegramLink: "https://t.me/metaverse_builders"
  },
  {
    id: 10,
    name: "DAO Infrastructure Grants",
    ticker: "DIG",
    creator: "DAO Labs",
    marketcap: "$28,450,670.00",
    price: "$167.89",
    change24h: "-3.45",
    capitalDeployed: "$1,780,000.00",
    weeklyPool: "$30,000.00",
    hasTwitter: true,
    hasTelegram: true,
    twitterLink: "https://twitter.com/dao_infra",
    telegramLink: "https://t.me/dao_infra"
  },
  {
    id: 11,
    name: "Social Protocol Fund",
    ticker: "SPF",
    creator: "Social Web3",
    marketcap: "$52,340,890.00",
    price: "$245.67",
    change24h: "+7.82",
    capitalDeployed: "$2,890,000.00",
    weeklyPool: "$40,000.00",
    hasTwitter: true,
    hasTelegram: false,
    twitterLink: "https://twitter.com/social_protocol",
    telegramLink: ""
  },
  {
    id: 12,
    name: "ReFi Grants DAO",
    ticker: "RGD",
    creator: "ReFi Alliance",
    marketcap: "$19,780,230.00",
    price: "$98.45",
    change24h: "+4.56",
    capitalDeployed: "$980,000.00",
    weeklyPool: "$25,000.00",
    hasTwitter: true,
    hasTelegram: true,
    twitterLink: "https://twitter.com/refi_grants",
    telegramLink: "https://t.me/refi_grants"
  },
  {
    id: 13,
    name: "Identity Protocol Fund",
    ticker: "IPF",
    creator: "Identity Labs",
    marketcap: "$15,670,890.00",
    price: "$78.34",
    change24h: "-2.67",
    capitalDeployed: "$780,000.00",
    weeklyPool: "$15,000.00",
    hasTwitter: true,
    hasTelegram: true,
    twitterLink: "https://twitter.com/identity_fund",
    telegramLink: "https://t.me/identity_fund"
  },
  {
    id: 14,
    name: "Cross-Chain Innovation",
    ticker: "CCI",
    creator: "Bridge Alliance",
    marketcap: "$89,450,230.00",
    price: "$445.67",
    change24h: "+15.78",
    capitalDeployed: "$4,500,000.00",
    weeklyPool: "$60,000.00",
    hasTwitter: true,
    hasTelegram: true,
    twitterLink: "https://twitter.com/crosschain_inn",
    telegramLink: "https://t.me/crosschain_inn"
  },
  {
    id: 15,
    name: "Data Protocol Grants",
    ticker: "DPG",
    creator: "Data DAO",
    marketcap: "$34,560,780.00",
    price: "$178.90",
    change24h: "-1.23",
    capitalDeployed: "$1,890,000.00",
    weeklyPool: "$32,000.00",
    hasTwitter: true,
    hasTelegram: false,
    twitterLink: "https://twitter.com/data_protocol",
    telegramLink: ""
  },
  {
    id: 16,
    name: "MEV Research Fund",
    ticker: "MRF",
    creator: "MEV Labs",
    marketcap: "$42,890,340.00",
    price: "$234.56",
    change24h: "+9.45",
    capitalDeployed: "$2,340,000.00",
    weeklyPool: "$38,000.00",
    hasTwitter: true,
    hasTelegram: true,
    twitterLink: "https://twitter.com/mev_research",
    telegramLink: "https://t.me/mev_research"
  }
];

export { 
  agents, 
  grantOperatorAgents
};