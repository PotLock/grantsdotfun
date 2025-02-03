import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import { Toaster } from 'react-hot-toast';
import Home from './components/layout/Home'
import { WalletSelectorContextProvider } from './context/WalletSelectorContext'
import AgentDetails from './pages/agents/agent-details';
import CreateAgent from './pages/agents/create-agent';
import ClaimPage from './pages/claim';
import NavBar from './components/layout/NavBar';

export default function App() {
  return (
    <WalletSelectorContextProvider>
        <Toaster position='top-center'/>
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Home />} />
                    <Route path="/agents/:agentId" element={<AgentDetails />} />
                    <Route path="/agents/create" element={<CreateAgent />} />
                    <Route path="/claim" element={<ClaimPage />} />
                </Routes>
            </main>
            <NavBar/>
        </div>
    </WalletSelectorContextProvider>
  )
} 