import { Agent } from "@/types/agent";

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
      ticker: "AI",
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
          image: "/assets/images/image-example.png",
          name: "John Doe",
          username: "@john_doe",
          platform: "Twitter",
        },
        {
          image: "/assets/images/image-example.png",
          name: "John Doe",
          username: "@john_doe",
          platform: "Twitter",
        },
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
                timeAgo: "2 Mins Ago",
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
                timeAgo: "5 Mins Ago",
                hasThread: true
            },
            {
                id: 3,
                avatar: "/assets/images/avatar/avatar.png",
                name: "Ref Finance",
                username: "Ref_Finance",
                content: "Leading AMM protocol on NEAR, providing seamless DeFi experiences.",
                timeAgo: "10 Mins Ago",
                hasThread: false
            },
            {
                id: 4,
                avatar: "/assets/images/avatar/avatar.png",
                name: "Paras",
                username: "Paras_NFT",
                content: "Digital art cards marketplace on NEAR Protocol.",
                timeAgo: "15 Mins Ago",
                hasThread: true
            },
            {
                id: 5,
                avatar: "/assets/images/avatar/avatar.png",
                name: "Aurora",
                username: "AuroraNetwork",
                content: "EVM compatibility layer built on NEAR Protocol.",
                timeAgo: "20 Mins Ago",
                hasThread: true
            },
            {
                id: 6,
                avatar: "/assets/images/avatar/avatar.png",
                name: "Octopus Network",
                username: "Octopus_Network",
                content: "Multichain interoperable crypto-network for launching Web3 appchains.",
                timeAgo: "25 Mins Ago",
                hasThread: false
            },
            {
                id: 7,
                avatar: "/assets/images/avatar/avatar.png",
                name: "Mintbase",
                username: "Mintbase_",
                content: "NFT infrastructure provider on NEAR Protocol.",
                timeAgo: "30 Mins Ago",
                hasThread: true
            },
            {
                id: 8,
                avatar: "/assets/images/avatar/avatar.png",
                name: "Human Guild",
                username: "HumanGuild_",
                content: "Supporting game developers building on NEAR Protocol.",
                timeAgo: "35 Mins Ago",
                hasThread: true
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
        },
    ]
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
            timeAgo: "5 Mins Ago",
            hasThread: true
          }
        ]
      }
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
            timeAgo: "10 Mins Ago",
            hasThread: true
          }
        ]
      }
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
            timeAgo: "15 Mins Ago",
            hasThread: true
          }
        ]
      }
    }
];

const grantOperatorAgents = Array(100).fill(0).map((_, index) => ({
  id: index + 1,
  name: index === 0 ? "AI Research DAO" : index === 1 ? "Black Dragon" : `AI Research DAO ${index + 1}`,
  ticker: index === 0 ? "AI" : index === 1 ? "BD" : `AI${index + 1}`,
  creator: index === 0 ? "Amichael_design" : index === 1 ? "BAjwaze" : `Creator${index + 1}`,
  marketcap: "$2,567,001.00",
  price: "$12.45",
  change24h: "+0.91",
  capitalDeployed: "$250,000.00",
  weeklyPool: "$250.00",
  hasTwitter: index % 2 === 0,
  hasTelegram: index % 2 === 1,
  twitterLink: "https://twitter.com/ai_research_dao",
  telegramLink: "https://t.me/ai_research_dao",
}))

export { 
  agents, 
  grantOperatorAgents
};