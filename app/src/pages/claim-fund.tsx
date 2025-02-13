"use client"

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Filter, Search, ShieldCheck, ChevronUp, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardTitle, CardHeader } from '@/components/ui/card';
import { useState, useMemo } from 'react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"

type SortConfig = {
  key: string;
  direction: 'asc' | 'desc';
}

const Claim: React.FC = () => {
    const [sortConfig, setSortConfig] = useState<SortConfig>({ key: '', direction: 'asc' });
    const [searchTerm, setSearchTerm] = useState('');
    const [platformFilter, setPlatformFilter] = useState('');

    const recentClaims = [
      {
        id: 1,
        accountId: "amichael.near",
        handle: "@Amichaeldesign",
        amount: 5000,
        claimDate: "2025-07-01",
        platform: "Twitter"
      },
      {
        id: 2,
        accountId: "wPlugrel.near",
        handle: "@Web_Plugrel",
        amount: 5000,
        claimDate: "2025-07-01",
        platform: "Twitter"
      },
      {
        id: 3,
        accountId: "Drackoin.near",
        handle: "@Drackon",
        amount: 5000,
        claimDate: "2025-07-01",
        platform: "Twitter"
      }
    ];

    const handleSort = (key: string) => {
      setSortConfig((prevConfig) => ({
        key,
        direction:
          prevConfig.key === key && prevConfig.direction === 'asc' ? 'desc' : 'asc',
      }));
    };

    const sortedAndFilteredClaims = useMemo(() => {
      let filteredClaims = [...recentClaims];

      // Apply search filter
      if (searchTerm) {
        filteredClaims = filteredClaims.filter((claim) =>
          Object.values(claim).some((value) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      }

      // Apply platform filter
      if (platformFilter) {
        filteredClaims = filteredClaims.filter(
          (claim) => claim.platform === platformFilter
        );
      }

      // Apply sorting
      if (sortConfig.key) {
        filteredClaims.sort((a, b) => {
          const aValue = a[sortConfig.key as keyof typeof a];
          const bValue = b[sortConfig.key as keyof typeof b];
          
          if (aValue < bValue) {
            return sortConfig.direction === 'asc' ? -1 : 1;
          }
          if (aValue > bValue) {
            return sortConfig.direction === 'asc' ? 1 : -1;
          }
          return 0;
        });
      }

      return filteredClaims;
    }, [recentClaims, sortConfig, searchTerm, platformFilter]);

    const SortIcon = ({ columnKey }: { columnKey: string }) => {
      if (sortConfig.key !== columnKey) return null;
      return sortConfig.direction === 'asc' ? <ChevronUp className="w-4 h-4 inline-block ml-1" /> : <ChevronDown className="w-4 h-4 inline-block ml-1" />;
    };

    return (
      <div className="container mx-auto py-20 md:py-10 pt-10 md:pt-16 px-4">
          <h1 className="text-3xl font-bold text-center mb-2 text-sidebar-foreground">Claim Your Funds</h1>
          <p className="text-center text-[#64748B] mb-8">
            Enter your account ID to check for claimable funds from the autonomous grants agents.
          </p>
  
          <Card className="mb-8 shadow-none">
            <CardHeader>
              <CardTitle className='text-xl md:text-2xl text-sidebar-foreground'>Check Claimable Funds</CardTitle>
              <p className="text-sm text-[#64748B]">
                Enter your account ID to check for claimable funds and view your grant details.
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-6">
                <Input placeholder="Enter your account ID" className="flex-1" />
                <Button className='bg-blue-500 text-white hover:bg-blue-600'>Verify</Button>
              </div>
              <Card className="shadow-none">
                <CardContent className='flex text-start md:items-center gap-2 text-sm p-3'>
                  <ShieldCheck className="w-10 h-10 md:w-6 md:h-6" />
                  <div className="flex flex-col">
                      <span className="font-semibold text-sidebar-foreground">Secure Verification</span>
                      <p className="text-sm text-[#64748B]">We use Reclaim Protocol to verify your eligibility without exposing your sensitive data.</p>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
  
          <Card className='shadow-none'>
            <CardHeader className='space-y-4'>
              <CardTitle className='text-xl md:text-2xl text-sidebar-foreground'>Recently Claimed Funds</CardTitle>
              <div className='bg-gray-50/80 dark:bg-muted p-2 gap-3 rounded-lg flex items-center justify-between'>
                  <div className="relative w-full md:w-[600px]">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#64748B] h-4 w-4" />
                      <Input 
                        placeholder="Search by" 
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                  </div>
                  <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="w-20">
                              <Filter className="h-4 w-4" />
                              <span>Filter</span>
                          </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => setPlatformFilter('Twitter')}>
                              Twitter
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setPlatformFilter('Telegram')}>
                              Telegram
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setPlatformFilter('Discord')}>
                              Discord
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setPlatformFilter('')}>
                              Clear Filter
                          </DropdownMenuItem>
                      </DropdownMenuContent>
                  </DropdownMenu>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 mt-4">
                <Card className='shadow-none rounded-md'>
                  <CardContent className="p-4 text-[#64748B]">
                    <div className="text-sm font-bold">350 CLAIMS</div>
                    <div className="text-sm text-[#64748B]">Total Payouts</div>
                  </CardContent>
                </Card>
                <Card className='shadow-none rounded-md'>
                  <CardContent className="p-4 text-[#64748B]">
                    <div className="text-sm font-bold">350 CLAIMS</div>
                    <div className="text-sm text-[#64748B]">Total Payouts</div>
                  </CardContent>
                </Card>
                <Card className='shadow-none rounded-md'>
                  <CardContent className="p-4 text-[#64748B]">
                    <div className="text-sm font-bold">350 CLAIMS</div>
                    <div className="text-sm text-[#64748B]">Total Payouts</div>
                  </CardContent>
                </Card>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead 
                        className="whitespace-nowrap cursor-pointer"
                        onClick={() => handleSort('accountId')}
                      >
                        Account ID <SortIcon columnKey="accountId" />
                      </TableHead>
                      <TableHead 
                        className="whitespace-nowrap hidden md:table-cell cursor-pointer"
                        onClick={() => handleSort('platform')}
                      >
                        Platform <SortIcon columnKey="platform" />
                      </TableHead>
                      <TableHead 
                        className="whitespace-nowrap hidden md:table-cell cursor-pointer"
                        onClick={() => handleSort('handle')}
                      >
                        Handle <SortIcon columnKey="handle" />
                      </TableHead>
                      <TableHead 
                        className="whitespace-nowrap cursor-pointer"
                        onClick={() => handleSort('amount')}
                      >
                        Amount <SortIcon columnKey="amount" />
                      </TableHead>
                      <TableHead 
                        className="whitespace-nowrap w-[100px] cursor-pointer"
                        onClick={() => handleSort('claimDate')}
                      >
                        Claim Date <SortIcon columnKey="claimDate" />
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='text-xs sm:text-sm'>
                    {sortedAndFilteredClaims.map((claim) => (
                      <TableRow key={claim.id}>
                        <TableCell className="whitespace-nowrap">{claim.accountId}</TableCell>
                        <TableCell className="whitespace-nowrap hidden md:table-cell">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                              />
                            </svg>
                            <span>{claim.platform}</span>
                          </div>
                        </TableCell>
                        <TableCell className="whitespace-nowrap hidden md:table-cell">{claim.handle}</TableCell>
                        <TableCell className="whitespace-nowrap">${claim.amount.toLocaleString()}</TableCell>
                        <TableCell className="whitespace-nowrap w-[100px]">{claim.claimDate}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
      </div>
    );
  };
  
  export default Claim;