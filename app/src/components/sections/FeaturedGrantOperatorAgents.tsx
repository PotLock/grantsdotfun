"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"
import { useState, useCallback } from "react"
import { Settings2, Twitter, MessageCircle } from "lucide-react"
import Link from "next/link"

// Mock data array
const mockData = Array(100).fill(0).map((_, index) => ({
    id: index + 1,
    name: index === 0 ? "AI Research DAO" : index === 1 ? "Black Dragon" : `AI Research DAO ${index + 1}`,
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

const ITEMS_PER_PAGE = 8

interface SearchFilters {
  searchTerm: string;
  sortBy?: 'marketcap' | 'price' | 'change24h' | 'capitalDeployed' | 'weeklyPool';
  sortDirection?: 'asc' | 'desc';
}

const searchData = (data: typeof mockData, filters: SearchFilters) => {
  let filteredData = [...data]

  // Apply text search
  if (filters.searchTerm) {
    const searchLower = filters.searchTerm.toLowerCase()
    filteredData = filteredData.filter(item => 
      item.name.toLowerCase().includes(searchLower) ||
      item.creator.toLowerCase().includes(searchLower)
    )
  }

  // Apply sorting if specified
  if (filters.sortBy) {
    filteredData.sort((a, b) => {
      const aValue = parseFloat(a[filters.sortBy!].replace(/[^0-9.-]+/g, ''))
      const bValue = parseFloat(b[filters.sortBy!].replace(/[^0-9.-]+/g, ''))
      
      if (isNaN(aValue) || isNaN(bValue)) return 0
      
      return filters.sortDirection === 'desc' ? bValue - aValue : aValue - bValue
    })
  }

  return filteredData
}

const FeaturedGrantOperatorAgents = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortConfig, setSortConfig] = useState<{
    sortBy?: SearchFilters['sortBy'];
    sortDirection?: SearchFilters['sortDirection'];
  }>({})

  // Memoize search function to prevent unnecessary re-renders
  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term)
    setCurrentPage(1) // Reset to first page when searching
  }, [])

  // Handle sorting
  const handleSort = useCallback((column: SearchFilters['sortBy']) => {
    setSortConfig(prev => ({
      sortBy: column,
      sortDirection: 
        prev.sortBy === column && prev.sortDirection === 'asc' 
          ? 'desc' 
          : 'asc'
    }))
  }, [])

  // Get filtered and sorted data
  const filteredData = searchData(mockData, {
    searchTerm,
    ...sortConfig
  })

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE)
  
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1)
    }
  }

  // Calculate current page data
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentData = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  return (
    <section className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-4 w-full">
            <div>
                <h2 className="text-xl font-bold">Featured Grant Operator Agents</h2>
                <p className="text-muted-foreground text-sm">Top ai agent token with AI grant operator agents.</p>
            </div>
            <div className="flex justify-between flex-row w-full items-center gap-4">
                <Input 
                    type="search" 
                    placeholder="Search Agents" 
                    className="w-full sm:max-w-xs"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleSort('marketcap')}
                >
                    <Settings2 className="mr-2 h-4 w-4" />
                    <span>Sort</span>
                </Button>
            </div>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden sm:block border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left">Agent</TableHead>
              <TableHead className="text-left">Creator</TableHead>
              <TableHead 
                className="text-center cursor-pointer hover:bg-gray-50"
                onClick={() => handleSort('marketcap')}
              >
                Marketcap {sortConfig.sortBy === 'marketcap' ? (sortConfig.sortDirection === 'asc' ? '↑' : '↓') : '↕'}
              </TableHead>
              <TableHead 
                className="text-center cursor-pointer hover:bg-gray-50"
                onClick={() => handleSort('price')}
              >
                Price {sortConfig.sortBy === 'price' ? (sortConfig.sortDirection === 'asc' ? '↑' : '↓') : '↕'}
              </TableHead>
              <TableHead 
                className="text-center cursor-pointer hover:bg-gray-50"
                onClick={() => handleSort('change24h')}
              >
                24h (%) {sortConfig.sortBy === 'change24h' ? (sortConfig.sortDirection === 'asc' ? '↑' : '↓') : '↕'}
              </TableHead>
              <TableHead 
                className="text-center cursor-pointer hover:bg-gray-50"
                onClick={() => handleSort('capitalDeployed')}
              >
                Capital Deployed {sortConfig.sortBy === 'capitalDeployed' ? (sortConfig.sortDirection === 'asc' ? '↑' : '↓') : '↕'}
              </TableHead>
              <TableHead 
                className="text-center cursor-pointer hover:bg-gray-50"
                onClick={() => handleSort('weeklyPool')}
              >
                Weekly Pool {sortConfig.sortBy === 'weeklyPool' ? (sortConfig.sortDirection === 'asc' ? '↑' : '↓') : '↕'}
              </TableHead>
              <TableHead className="text-center">Integrations</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full overflow-hidden">
                      <Image src="/assets/images/avatar/avatar-1.png" alt="Avatar" width={32} height={32} className="object-cover" />
                    </div>
                    <span className="font-semibold">{item.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-purple-600 flex items-center justify-center text-white text-sm">
                      {item.creator[0]}
                    </div>
                    <span>{item.creator}</span>
                  </div>
                </TableCell>
                <TableCell className="text-center">{item.marketcap}</TableCell>
                <TableCell className="text-center">{item.price}</TableCell>
                <TableCell className="text-center text-green-500">
                  {item.change24h}%
                </TableCell>
                <TableCell className="text-center">{item.capitalDeployed}</TableCell>
                <TableCell className="text-center">{item.weeklyPool}</TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center gap-2">
                    {item.hasTwitter && (
                      <Link href={item.twitterLink} target="_blank" className="p-1.5 border rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
                        <Twitter className="h-4 w-4 text-gray-600" />
                      </Link>
                    )}
                    {item.hasTelegram && (
                      <Link href={item.telegramLink} target="_blank" className="p-1.5 border rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
                        <MessageCircle className="h-4 w-4 text-gray-600" />
                      </Link>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Card View */}
      <div className="grid gap-4 sm:hidden">
        {currentData.map((item) => (
          <Card key={item.id} className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <Image src="/assets/images/avatar/avatar-1.png" alt="Avatar" width={40} height={40} className="object-cover" />
              </div>
              <div>
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs">
                    {item.creator[0]}
                  </div>
                  {item.creator}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Marketcap:</span>
                <span className="font-medium">{item.marketcap}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Price:</span>
                <span className="font-medium">{item.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">24h:</span>
                <span className="text-green-500">{item.change24h}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Capital:</span>
                <span className="font-medium">{item.capitalDeployed}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Weekly Pool:</span>
                <span className="font-medium">{item.weeklyPool}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Integrations:</span>
                <div className="flex gap-2">
                  {item.hasTwitter && (
                    <Link href={item.twitterLink} target="_blank" className="p-1.5 border rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
                      <Twitter className="h-4 w-4 text-gray-600" />
                    </Link>
                  )}
                  {item.hasTelegram && (
                    <Link href={item.telegramLink} target="_blank" className="p-1.5 border rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
                      <MessageCircle className="h-4 w-4 text-gray-600" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-between items-center py-2">
        <span className="text-sm text-muted-foreground">
          {startIndex + 1} of {filteredData.length} Agents.
        </span>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  )
} 

export default FeaturedGrantOperatorAgents;