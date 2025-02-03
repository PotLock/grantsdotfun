import { Card } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import GranteePostComponent from './GranteePost'
import { useState } from 'react'
import {
    Pagination,
    PaginationContent,
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
import { GranteesType, PaymentTranche, GranteePostType } from '@/types/agent'
interface StatsCardProps {
    title: string
    value: string | number
}

interface GranteesProps {
    grantees: GranteesType
}

const StatsCard = ({ title, value }: StatsCardProps) => {
    return (
        <Card className="p-4 shadow-none bg-primary-foreground">
            <p className="text-sm text-sidebar-foreground">{title}</p>
            <p className="text-xl font-semibold text-sidebar-foreground">{value}</p>
        </Card>
    )
}


const ITEMS_PER_PAGE = 8

const Grantees: React.FC<GranteesProps> = ({ grantees }) => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const totalPages = Math.ceil(grantees.grantees_posts.length / ITEMS_PER_PAGE)
    const [selectedGrantee, setSelectedGrantee] = useState<GranteePostType | null>(null)

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    const currentGrantees = grantees.grantees_posts.slice(startIndex, endIndex)

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    return (
        <div className="space-y-6">
            {/* Stats Section */}
            <div className="grid grid-cols-4 gap-4">
                <StatsCard title="Total Funded" value={`$${grantees.total_funded}`} />
                <StatsCard title="Total Grantees" value={grantees.total_grants} />
                <StatsCard title="Weekly Payouts" value={`$${grantees.weekly_payouts}`} />
                <StatsCard title="Completed Grants" value={grantees.completed_grants} />
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
                            <GranteePostComponent
                                id={grantee.id}
                                avatar={grantee.avatar}
                                name={grantee.name}
                                username={grantee.username}
                                content={grantee.content}
                                timeAgo={grantee.timeAgo}
                                hasThread={grantee.hasThread}
                                twitterProposal={grantee.twitterProposal}
                            />
                        </div>
                    ))}
                </div>

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
                                            <span className="font-semibold text-sidebar-foreground">{selectedGrantee.name}</span>
                                            <div className="space-y-2">
                                                <p className="text-sm text-sidebar-foreground font-normal">{selectedGrantee.content}</p>
                                                <p className="text-sm text-sidebar-foreground font-normal">Where anyone can put funding on the table.</p>
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
                                            {selectedGrantee.twitterProposal[0].description}
                                        </p>
                                        
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-500">
                                                {selectedGrantee.twitterProposal[0].time_created}
                                            </span>
                                            <a 
                                                href={selectedGrantee.twitterProposal[0].twitter_url} 
                                                target='_blank'
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
                                            {selectedGrantee.paymentTranches?.map((tranche: PaymentTranche, index: number) => (
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