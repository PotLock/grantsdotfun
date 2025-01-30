import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import { Toaster } from 'react-hot-toast';
import Home from './components/layout/Home'
import { WalletSelectorContextProvider } from './context/WalletSelectorContext'
import NotFound from './pages/not-found'
import AgentDetails from './pages/agents/agent-details';
import CreateAgent from './pages/agents/create-agent';
import ClaimPage from './pages/claim';

export default function App() {
  return (
    <WalletSelectorContextProvider>
        <Toaster position='top-center'/>
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/agents/:agentId" element={<AgentDetails />} />
                    <Route path="/agents/create" element={<CreateAgent />} />
                    <Route path="/claim" element={<ClaimPage />} />
                </Routes>
            </main>
        </div>
    </WalletSelectorContextProvider>
  )
} 