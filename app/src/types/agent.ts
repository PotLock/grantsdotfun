export interface AgentTypes {
  name: string
  ticker: string
  description: string
  image: string
  governanceType: string
  fundingFrequency: string
  evaluationType: string
  isUseImageGenerated: boolean
  isUseEmoji: boolean
  agentPrompt: string
  personality: string
  style: string
  knowledge: string
  tokenAddress: string
  maxDeployPercentage: number
  minGrant: string
  maxGrant: string
  exampleTwitter: string
  isGrantWhitelisted: boolean
  autoApproveThreshold: number
  requireAdminApproval: boolean
  minimumFollowing: number
  miniumAccountAge: number
  verifiedAccount: boolean
  cryptoSettingEnabled: boolean
  reviewers: string[]
  ecosystemGoals: string
  evaluationCriteria: string
  rewardCriteria: string
  projectType: string
  metricsOptimizingFor: string[]
  disqualificationCriteria: string[]
  treasuryAddress: string
  payoutFrequency: string
  maximumPayoutFrequency: number
  maximumPayoutDay: number
  payoutBuffer: number
} 

export interface Reviewer {
  image: string
  name: string
  username: string
  platform: string
}

export interface AgentIntent {
  platform: string
  username: string
}

export interface Proposal {
  id: number;
  title: string;
  status: string;
  description: string;
  treasurySettings: {
      name: string;
      currentValue: string;
      proposedValue: string;
  }[];
  publisher: string;
  voters: {
      id: string;
      name: string;
      vote: 'Yes' | 'No';
      votePercentage: number;
      voteAmount: string;
  }[];
  votingPower: {
      amount: string;
      percentage: string;
  };
  time_created: string;
  time_started: string;
  time_ended: string;
  type: 'governance' | 'treasury';
}



export interface Governance {
  description: string
  number_of_proposals: string
  number_of_capital_deployed: string
  number_of_total_voting_power: string
  proposal: Proposal[]
}

export interface TwitterProposal {
  id: number
  description: string
  time_created: string
  twitter_url: string
}

export interface PaymentTranche {
  amount: string
  date: string
}

export interface GranteePostType {
  id: number
  avatar: string
  name: string
  username: string
  content: string
  timeAgo: string
  hasThread: boolean
  proposal?: string
  paymentTranches?: PaymentTranche[]
  twitterProposal?: TwitterProposal[]
  info?: {
      description: string
      website?: string
      github?: string
      twitter?: string
  }
}

export interface GranteesType {
  total_funded: string
  total_grants: string
  weekly_payouts: string
  completed_grants: string
  grantees_posts: GranteePostType[]
}

export interface AgentLog {
  id: string
  type: string
  platform?: string
  user?: {
      name: string
      avatar: string
  }
  message?: string
  timestamp: string
  actionLink?: string
  commit?: string
  contributor?: {
      name: string
      avatar: string
  }
}


export interface Agent {
  id: number
  name: string
  price: string
  growth: string
  description: string
  currentTreasury: string
  weeklyGrantPool: string
  image: string
  ticker: string
  creator: string
  marketcap: string
  change24h: string
  capitalDeployed: string
  weeklyPool: string
  address: string
  twitterLink: string
  telegramLink: string
  evaluation_criteria: string
  reviewers: Reviewer[]
  agent_intents: AgentIntent[]
  totalGrants: string
  governance: Governance
  grantees: GranteesType
  logs?: AgentLog[]
}

export interface GrantOperatorAgent {
  id: number
  name: string
  ticker: string
  creator: string
  marketcap: string
  price: string
  change24h: string
  capitalDeployed: string
  weeklyPool: string
  hasTwitter: boolean
  hasTelegram: boolean
  twitterLink: string
  telegramLink: string
}

