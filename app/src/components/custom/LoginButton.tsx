import { useState, useEffect, useRef } from "react";
import { useWalletSelector } from "@/context/WalletSelectorContext"
import AvatarProfile from './AvatarProfile';
import toast from 'react-hot-toast';

const ButtonLogin = () => {
    const { modal, accountId, selector } = useWalletSelector();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSignOut = async () => {
        const wallet = await selector.wallet();
        wallet.signOut();
        window.location.reload();
    };

    const handleConnect = async () => {
        try {
            setIsLoading(true);
            if (!modal) {
                toast.error("Wallet selector initialization is still in progress. Please try again in a moment.");
                throw new Error("Wallet selector initialization is still in progress. Please try again in a moment.");
            }
            modal.show();
        } catch (err) {
            console.error("Failed to connect wallet. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    if (!accountId) {
        return (
            <button
                onClick={handleConnect}
                disabled={isLoading}
                className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 px-6 rounded-lg text-sm cursor-pointer flex items-center ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
                {isLoading ? 'Connecting...' : 'Connect Wallet'}
            </button>
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
        <div className="flex items-center relative" ref={dropdownRef}>
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="bg-blue-500 hover:bg-blue-600 flex items-center space-x-2 px-4 py-2 rounded-xl text-white relative"
            >
                <img 
                    src="/assets/icons/NEAR.svg" 
                    alt="NEAR" 
                    width={20}
                    height={20}
                    className="w-5 h-5" 
                />
                <span className="font-semibold text-sm">{formatAccountId(accountId)}</span>
                <AvatarProfile accountId={accountId} size={24} />
            </button>
            {isOpen && (
                <div className="absolute top-14 right-0 bg-white rounded-xl shadow-lg border border-gray-200 py-3 w-[250px] z-50">
                    <div className="px-4">
                        <div className="flex items-center space-x-3 pb-3 border-b border-gray-100 text-sm">
                            <AvatarProfile accountId={accountId} size={32} />
                            <span className="font-semibold text-gray-900">{formatAccountId(accountId)}</span>
                        </div>
                        <a 
                            href={`https://testnet.nearblocks.io/vi/address/${accountId}`}
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
        </div>
    );
};

export default ButtonLogin;