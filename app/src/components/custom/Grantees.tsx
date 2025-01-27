'use client'

import { Card } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import GranteePost from './GranteePost'
import { useState } from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Twitter } from 'lucide-react'

interface StatsCardProps {
    title: string
    value: string | number
}

interface GranteeData {
    id: number
    avatar: string
    name: string
    username: string
    content: string
    timeAgo: string
    hasThread: boolean
    proposal?: string
    paymentTranches?: {
        amount: string
        date: string
    }[]
    twitterProposal?: {
        text: string
        date: string
    }
    info?: {
        description: string
        website?: string
        github?: string
        twitter?: string
    }
}


const MOCK_GRANTEES: GranteeData[] = [
    {
        id: 1,
        avatar: "/assets/images/avatar/avatar.png",
        name: "Potlock",
        username: "Potlock_",
        content: "Building decentralized funding infrastructure for public goods on NEAR Protocol.",
        timeAgo: "2 Mins Ago",
        hasThread: true,
        twitterProposal: {
            text: "Lorem ipsum dolor sit amet consectetur. Eget tincidunt aliquam dictum sed. Turpis tristique mi sit tempor lorem. Diam commodo eu vitae urna turpis. Elit nunc molestie lectus molestie nec aliquus. Id turpis pellentesque sed sit vestibulum lacus varius. Nunc proin id sed mattis dolor. Risus placerat faucibus sit placerat id proin pellentesque purus ultricies. Vestibulum mauris a malesuada non risus et magna risus duis. Porta ut vitae neque elit hendrerit amet et mi. In curabitur magna amet vitae sit hendrerit.",
            date: "2024-05-14"
        },
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

const StatsCard = ({ title, value }: StatsCardProps) => {
    return (
        <Card className="p-4">
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-semibold">{value}</p>
        </Card>
    )
}

const ITEMS_PER_PAGE = 5

const Grantees = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const totalPages = Math.ceil(MOCK_GRANTEES.length / ITEMS_PER_PAGE)
    const [selectedGrantee, setSelectedGrantee] = useState<GranteeData | null>(null)

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    const currentGrantees = MOCK_GRANTEES.slice(startIndex, endIndex)

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    return (
        <div className="space-y-6">
            {/* Stats Section */}
            <div className="grid grid-cols-4 gap-4">
                <StatsCard title="Total Funded" value="$23,081,920" />
                <StatsCard title="Total Grantees" value="200" />
                <StatsCard title="Weekly Payouts" value="$200,000.00" />
                <StatsCard title="Completed Grants" value="177" />
            </div>

            <Tabs defaultValue="latest" className="w-full">
                <TabsList className="py-5 px-1">
                    <TabsTrigger value="latest" className="p-2 px-3">Latest</TabsTrigger>
                    <TabsTrigger value="this-week" className="p-2 px-3">This Week</TabsTrigger>
                    <TabsTrigger value="this-month" className="p-2 px-3">This Month</TabsTrigger>
                    <TabsTrigger value="all-time" className="p-2 px-3">All Time</TabsTrigger>
                </TabsList>
            </Tabs>
            <div className="space-y-4 mt-4 flex flex-col">
                <div className="space-y-3">
                    {currentGrantees.map((grantee) => (
                        <div key={grantee.id} onClick={() => setSelectedGrantee(grantee)} className="cursor-pointer">
                            <GranteePost
                                avatar={grantee.avatar}
                                name={grantee.name}
                                username={grantee.username}
                                content={grantee.content}
                                timeAgo={grantee.timeAgo}
                                hasThread={grantee.hasThread}
                            />
                        </div>
                    ))}
                </div>

                {/* Modal */}
                <Dialog open={!!selectedGrantee} onOpenChange={() => setSelectedGrantee(null)}>
                    <DialogContent className="max-w-4xl">
                        <DialogHeader>
                            <DialogTitle className="flex items-start gap-2">
                                {selectedGrantee && (
                                    <>
                                        <img 
                                            src={selectedGrantee.avatar} 
                                            alt={selectedGrantee.name} 
                                            className="w-10 h-10 rounded-lg"
                                        />
                                        <div className='flex flex-col gap-2'>
                                            <span className="font-semibold">{selectedGrantee.name}</span>
                                            <div className="space-y-2">
                                                <p className="text-sm text-gray-600">{selectedGrantee.content}</p>
                                                <p className="text-sm text-muted-foreground">Where anyone can put funding on the table.</p>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </DialogTitle>
                        </DialogHeader>
                        
                        {selectedGrantee && (
                            <div className="space-y-6 py-4">
                                {selectedGrantee.twitterProposal && (
                                    <div className="border rounded-lg p-4 space-y-4">
                                        <div className="flex items-center gap-2">
                                            <Twitter className="w-5 h-5 text-gray-600" />
                                            <span className="font-medium">X(Twitter) Proposal</span>
                                        </div>
                                        
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {selectedGrantee.twitterProposal.text}
                                        </p>
                                        
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-500">
                                                {selectedGrantee.twitterProposal.date}
                                            </span>
                                            <a 
                                                href="#" 
                                                className="text-sm text-blue-500 hover:text-blue-600"
                                            >
                                                View on Twitter
                                            </a>
                                        </div>
                                    </div>
                                )}

                                <Tabs defaultValue="payment-tranches" className="w-full">
                                    <TabsList>
                                        <TabsTrigger 
                                            value="payment-tranches" 
                                        >
                                            Payment Tranches
                                        </TabsTrigger>
                                        <TabsTrigger 
                                            value="info" 
                                        >
                                            Info
                                        </TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="payment-tranches" className="border rounded-lg">
                                        <div className="p-4">
                                            <div className="flex justify-between text-sm text-gray-500 mb-2">
                                                <span>Amount</span>
                                                <span>Date</span>
                                            </div>
                                            {selectedGrantee.paymentTranches?.map((tranche, index) => (
                                                <div 
                                                    key={index} 
                                                    className="flex justify-between py-2 text-sm border-t first:border-t-0"
                                                >
                                                    <span className="font-medium">{tranche.amount}</span>
                                                    <span className="text-gray-600">{tranche.date}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="info" className="border rounded-lg p-4">
                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="text-sm font-medium mb-2">About</h3>
                                                <p className="text-sm text-gray-600">
                                                    {selectedGrantee.info?.description}
                                                </p>
                                            </div>

                                            <div className="space-y-2">
                                                <h3 className="text-sm font-medium">Links</h3>
                                                <div className="space-y-1">
                                                    {selectedGrantee.info?.website && (
                                                        <a 
                                                            href={selectedGrantee.info.website}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-sm text-blue-500 hover:text-blue-600 block"
                                                        >
                                                            Website
                                                        </a>
                                                    )}
                                                    {selectedGrantee.info?.github && (
                                                        <a 
                                                            href={selectedGrantee.info.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-sm text-blue-500 hover:text-blue-600 block"
                                                        >
                                                            GitHub
                                                        </a>
                                                    )}
                                                    {selectedGrantee.info?.twitter && (
                                                        <a 
                                                            href={selectedGrantee.info.twitter}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-sm text-blue-500 hover:text-blue-600 block"
                                                        >
                                                            Twitter
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        )}
                    </DialogContent>
                </Dialog>

                {/* Pagination */}
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious 
                                onClick={() => handlePageChange(currentPage - 1)}
                                className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                            />
                        </PaginationItem>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <PaginationItem key={page}>
                                <PaginationLink
                                    onClick={() => handlePageChange(page)}
                                    isActive={currentPage === page}
                                    className="cursor-pointer"
                                >
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext
                                onClick={() => handlePageChange(currentPage + 1)}
                                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}

export default Grantees