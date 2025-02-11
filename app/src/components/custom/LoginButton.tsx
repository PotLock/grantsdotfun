import { useState, useEffect, useRef } from "react";
import { useWalletSelector } from "@near-wallet-selector/react-hook";
import AvatarProfile from './AvatarProfile';
import toast from 'react-hot-toast';
import { Wallet, Sun } from "lucide-react";

type Chain = 'NEAR' | 'ETH';

const ButtonLogin:React.FC = () => {
    const { signedAccountId, signIn, signOut } = useWalletSelector();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [selectedChain, setSelectedChain] = useState<Chain>('NEAR');
    const [isChainDropdownOpen, setIsChainDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const chainDropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
            if (chainDropdownRef.current && !chainDropdownRef.current.contains(event.target as Node)) {
                setIsChainDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSignOut = () => {
        signOut();
        window.location.reload();
    };

    const handleConnect = async () => {
        try {
            setIsLoading(true);
            signIn();
        } catch (err) {
            console.error("Failed to connect wallet:", err);
            toast.error("Failed to connect wallet. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleChainSelect = (chain: Chain) => {
        setSelectedChain(chain);
        setIsChainDropdownOpen(false);
    };

    if (!signedAccountId) {
        return (
            <div className="flex items-center space-x-3">
                <div className="relative" ref={chainDropdownRef}>
                    <button
                        onClick={() => setIsChainDropdownOpen(!isChainDropdownOpen)}
                        className="bg-white border border-gray-200  shadow-sm hover:bg-gray-50 text-gray-800 font-medium py-2.5 px-4 rounded-lg text-sm cursor-pointer flex items-center"
                    >
                        <img 
                            src={`/assets/icons/${selectedChain == "NEAR" ? "near-black" : "eth-black"}.png`}
                            alt={selectedChain}
                            className={`w-4 h-4 md:mr-2 ${selectedChain == "NEAR" ? "w-3 h-3" : "w-5 h-5"}`}
                        />
                        <span className="hidden md:block">
                            {selectedChain}
                        </span>
                    </button>
                    
                    {isChainDropdownOpen && (
                        <div className="absolute top-12 left-0 bg-white rounded-xl shadow-lg border border-gray-200 py-2 w-[120px] z-50">
                            {['NEAR', 'ETH'].map((chain) => (
                                <button
                                    key={chain}
                                    onClick={() => handleChainSelect(chain as Chain)}
                                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center"
                                >
                                    <img 
                                        src={`/assets/icons/${chain == "NEAR" ? "near-black" : "eth-black"}.png`}
                                        alt={chain}
                                        className={`w-4 h-4 mr-2 ${chain == "NEAR" ? "w-3 h-3" : "w-5 h-5"}`}
                                    />
                                    {chain}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                
                <button
                    onClick={handleConnect}
                    disabled={isLoading}
                    className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-lg text-sm cursor-pointer flex items-center ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                    <span className="hidden md:block">
                        {isLoading ? 'Connecting...' : 'Connect Wallet'}
                    </span>
                    <Wallet className="w-4 h-4 md:ml-2" />
                </button>
                <button className="bg-white border border-gray-200  shadow-sm hover:bg-gray-50 text-gray-800 p-2.5 rounded-lg text-sm cursor-pointer flex items-center">
                    <Sun className="w-4 h-4" />
                </button>
            </div>
        );
    }

    const formatAccountId = (accountId: string) => {
        if (accountId.length === 64) {
            return `${accountId.slice(0, 6)}...${accountId.slice(-4)}`;
        } else if (accountId.endsWith(process.env.NEXT_PUBLIC_NETWORK == "testnet" ? ".testnet" : ".near")) {
            return accountId.replace(process.env.NEXT_PUBLIC_NETWORK == "testnet" ? ".testnet" : ".near", '');
        }
        return accountId;
    };

    return (
    <div className="flex items-center md:space-x-3 space-x-1 relative" ref={dropdownRef}>
            <div className="relative" ref={chainDropdownRef}>
                <button
                    onClick={() => setIsChainDropdownOpen(!isChainDropdownOpen)}
                    className="bg-white border border-gray-200  shadow-sm hover:bg-gray-50 text-gray-800 font-medium py-2.5 px-4 rounded-lg text-sm cursor-pointer flex items-center"
                >
                    <img 
                        src={`/assets/icons/${selectedChain == "NEAR" ? "near-black" : "eth-black"}.png`}
                        alt={selectedChain}
                        className={`w-4 h-4 md:mr-2 ${selectedChain == "NEAR" ? "w-3 h-3" : "w-5 h-5"}`}
                    />
                    <span className="hidden md:block">
                        {selectedChain}
                    </span>
                </button>
                
                {isChainDropdownOpen && (
                    <div className="absolute top-12 left-0 bg-white rounded-xl shadow-lg border border-gray-200 py-2 w-[120px] z-50">
                        {['NEAR', 'ETH'].map((chain) => (
                            <button
                                key={chain}
                                onClick={() => handleChainSelect(chain as Chain)}
                                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center"
                            >
                                <img 
                                    src={`/assets/icons/${chain == "NEAR" ? "near-black" : "eth-black"}.png`}
                                    alt={chain}
                                    className={`w-4 h-4 mr-2 ${chain == "NEAR" ? "w-3 h-3" : "w-5 h-5"}`}
                                />
                                {chain}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="border border-gray-200 space-x-2 shadow-sm hover:bg-gray-50 text-gray-800 font-medium py-1.5 md:py-2 px-2 md:px-4 rounded-lg text-sm cursor-pointer flex items-center"
            >
                <AvatarProfile accountId={signedAccountId} size={24} />
                <span className="font-semibold text-sm md:block hidden">{signedAccountId}</span>
            </button>
            {isOpen && (
                <div className="absolute top-14 right-0 bg-white rounded-xl shadow-lg border border-gray-200 py-3 w-[250px] z-50">
                    <div className="px-4">
                        <div className="flex items-center space-x-3 pb-3 border-b border-gray-100 text-sm">
                            <AvatarProfile accountId={signedAccountId} size={32} />
                            <span className="font-semibold text-gray-900">{formatAccountId(signedAccountId)}</span>
                        </div>
                        <a 
                            href={`https://testnet.nearblocks.io/vi/address/${signedAccountId}`}
                            target="_blank"
                            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 py-2 mt-2 hover:bg-gray-50 px-2 rounded-lg transition-colors"
                        >
                            <span className="text-sm">Visit Near Profile</span>
                        </a>
                        <button 
                            onClick={handleSignOut}
                            className="w-full text-sm text-left text-red-500 hover:text-red-600 hover:bg-red-50 py-2 px-2 rounded-lg mt-1 transition-colors font-medium"
                        >
                            Disconnect
                        </button>
                    </div>
                </div>
            )}
            <button className="bg-white border border-gray-200  shadow-sm hover:bg-gray-50 text-gray-800 p-2.5 rounded-lg text-sm cursor-pointer flex items-center">
                <Sun className="w-4 h-4" />
            </button>
        </div>
    );
};

export default ButtonLogin;
