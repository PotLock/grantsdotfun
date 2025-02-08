import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState, useCallback, useEffect } from "react"
import { Settings2, Twitter, MessageCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { grantOperatorAgents } from "@/data/agents"
import { GrantOperatorAgent } from "@/types/agent"

interface SearchFilters {
  searchTerm: string;
  sortBy?: 'marketcap' | 'price' | 'change24h' | 'capitalDeployed' | 'weeklyPool';
  sortDirection?: 'asc' | 'desc';
}

const searchData = (data: GrantOperatorAgent[], filters: SearchFilters) => {
  let filteredData = [...data]

  if (filters.searchTerm) {
    const searchLower = filters.searchTerm.toLowerCase()
    filteredData = filteredData.filter(item => 
      item.name.toLowerCase().includes(searchLower) ||
      item.creator.toLowerCase().includes(searchLower)
    )
  }

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

const FeaturedGrantOperatorAgents: React.FC = () => {
  const router = useRouter();
  const [itemsPerPage, setItemsPerPage] = useState(8)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState<string|null>(null)
  const [sortConfig, setSortConfig] = useState<{
    sortBy?: SearchFilters['sortBy'];
    sortDirection?: SearchFilters['sortDirection'];
  }>({})

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term)
    setCurrentPage(1)
  }, [])

  const handleSort = useCallback((column: SearchFilters['sortBy']) => {
    setSortConfig(prev => ({
      sortBy: column,
      sortDirection: 
        prev.sortBy === column && prev.sortDirection === 'asc' 
          ? 'desc' 
          : 'asc'
    }))
  }, [])

  const filteredData = searchData(grantOperatorAgents, {
    searchTerm: searchTerm || "",
    ...sortConfig
  })

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(4)
      } else {
        setItemsPerPage(8)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage)

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

  return (
    <section className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-4 w-full">
            <div>
                <h2 className="text-lg md:text-xl font-bold text-sidebar-foreground">Featured Grant Operator Agents</h2>
                <p className="text-sm text-sidebar-foreground">Top ai agent token with AI grant operator agents.</p>
            </div>
            <div className="flex justify-between flex-row w-full items-center gap-4">
                <Input 
                    type="search" 
                    placeholder="Search Agents" 
                    className="w-full sm:max-w-xs"
                    value={searchTerm || ""}
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

      <div className="block border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left">Agent</TableHead>
              <TableHead className="text-left hidden sm:table-cell">Creator</TableHead>
              <TableHead 
                className="text-center cursor-pointer hover:bg-gray-50 hidden sm:table-cell"
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
                className="text-center cursor-pointer hover:bg-gray-50 hidden sm:table-cell"
                onClick={() => handleSort('change24h')}
              >
                24h (%) {sortConfig.sortBy === 'change24h' ? (sortConfig.sortDirection === 'asc' ? '↑' : '↓') : '↕'}
              </TableHead>
              <TableHead 
                className="text-center cursor-pointer hover:bg-gray-50 hidden sm:table-cell"
                onClick={() => handleSort('capitalDeployed')}
              >
                Capital Deployed {sortConfig.sortBy === 'capitalDeployed' ? (sortConfig.sortDirection === 'asc' ? '↑' : '↓') : '↕'}
              </TableHead>
              <TableHead 
                className="text-center cursor-pointer hover:bg-gray-50 hidden sm:table-cell"
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
                <TableCell className="font-medium cursor-pointer" onClick={() => router.push(`/agents/${item.id}`)}>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg overflow-hidden">
                      <img src="/assets/images/avatar/avatar-1.png" alt="Avatar" width={32} height={32} className="object-cover" />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <span className="font-semibold text-sidebar-foreground">{item.name}</span>
                      <span className="text-sidebar-foreground text-sm">${item.ticker}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-blue-500 text-sm flex items-center justify-center text-white">
                      {item.creator[0]}
                    </div>
                    <span className="text-sidebar-foreground">{item.creator}</span>
                  </div>
                </TableCell>
                <TableCell className="text-center text-muted-foreground hidden sm:table-cell">{item.marketcap}</TableCell>
                <TableCell className="text-center text-muted-foreground">{item.price}</TableCell>
                <TableCell className="text-center text-green-500 hidden sm:table-cell">
                  {item.change24h}%
                </TableCell>
                <TableCell className="text-center text-muted-foreground hidden sm:table-cell">{item.capitalDeployed}</TableCell>
                <TableCell className="text-center text-muted-foreground hidden sm:table-cell">{item.weeklyPool}</TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center gap-2">
                    {item.hasTwitter && (
                      <a href={item.twitterLink} target="_blank" className="p-1.5 border rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
                        <Twitter className="h-4 w-4 text-gray-600" />
                      </a>
                    )}
                    {item.hasTelegram && (
                      <a href={item.telegramLink} target="_blank" className="p-1.5 border rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
                        <MessageCircle className="h-4 w-4 text-gray-600" />
                      </a>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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