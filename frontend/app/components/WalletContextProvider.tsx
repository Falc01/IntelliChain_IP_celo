"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, FC } from 'react';
import { createPublicClient, createWalletClient, custom, http } from 'viem';
import { celo } from 'viem/chains';

interface Web3ContextType {
    connected: boolean;
    address: string | null;
    publicKey: { toBase58: () => string; toString: () => string } | null;
    connectWallet: () => Promise<void>;
    disconnectWallet: () => void;
    publicClient: any;
    walletClient: any;
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined);

export const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [address, setAddress] = useState<string | null>(null);
    const [connected, setConnected] = useState<boolean>(false);
    const [walletClient, setWalletClient] = useState<any>(null);

    const publicClient = createPublicClient({
        chain: celo,
        transport: http()
    });

    const connectWallet = async () => {
        if (typeof window === 'undefined' || !window.ethereum) {
            alert('Por favor, instale uma carteira EVM (como MetaMask, Valora ou use o navegador MiniPay)!');
            return;
        }

        try {
            // Request account access
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            if (accounts.length === 0) return;

            const userAddress = accounts[0];

            // Switch chain to Celo Mainnet
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0xa4ec' }], // 42220 in hex (Celo Mainnet)
                });
            } catch (switchError: any) {
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    try {
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                                {
                                    chainId: '0xa4ec',
                                    chainName: 'Celo Mainnet',
                                    nativeCurrency: {
                                        name: 'CELO',
                                        symbol: 'CELO',
                                        decimals: 18,
                                    },
                                    rpcUrls: ['https://forno.celo.org'],
                                    blockExplorerUrls: ['https://celoscan.io'],
                                },
                            ],
                        });
                    } catch (addError) {
                        console.error('Erro ao adicionar rede Celo Mainnet:', addError);
                    }
                } else {
                    console.error('Erro ao alternar para rede Celo Mainnet:', switchError);
                }
            }

            const client = createWalletClient({
                chain: celo,
                transport: custom(window.ethereum)
            });

            setAddress(userAddress);
            setConnected(true);
            setWalletClient(client);
        } catch (error) {
            console.error('Erro ao conectar carteira:', error);
        }
    };

    const disconnectWallet = () => {
        setAddress(null);
        setConnected(false);
        setWalletClient(null);
    };

    // Listen to account changes
    useEffect(() => {
        if (typeof window !== 'undefined' && window.ethereum) {
            const handleAccountsChanged = (accounts: string[]) => {
                if (accounts.length > 0) {
                    setAddress(accounts[0]);
                    setConnected(true);
                    const client = createWalletClient({
                        chain: celo,
                        transport: custom(window.ethereum)
                    });
                    setWalletClient(client);
                } else {
                    disconnectWallet();
                }
            };

            const handleChainChanged = () => {
                window.location.reload();
            };

            window.ethereum.on('accountsChanged', handleAccountsChanged);
            window.ethereum.on('chainChanged', handleChainChanged);

            // Auto connect if already authorized
            window.ethereum.request({ method: 'eth_accounts' })
                .then((accounts: string[]) => {
                    if (accounts.length > 0) {
                        setAddress(accounts[0]);
                        setConnected(true);
                        const client = createWalletClient({
                            chain: celo,
                            transport: custom(window.ethereum)
                        });
                        setWalletClient(client);
                    }
                })
                .catch((err: any) => console.error(err));

            return () => {
                if (window.ethereum.removeListener) {
                    window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
                    window.ethereum.removeListener('chainChanged', handleChainChanged);
                }
            };
        }
    }, []);

    // Solana compatibility mapping:
    const publicKey = address
        ? {
              toBase58: () => address,
              toString: () => address,
          }
        : null;

    return (
        <Web3Context.Provider
            value={{
                connected,
                address,
                publicKey,
                connectWallet,
                disconnectWallet,
                publicClient,
                walletClient,
            }}
        >
            {children}
        </Web3Context.Provider>
    );
};

// Create a custom hook to use the context easily in components
export const useWeb3 = () => {
    const context = useContext(Web3Context);
    if (!context) {
        throw new Error('useWeb3 must be used within a WalletContextProvider');
    }
    return context;
};

// For backward compatibility:
export const useWallet = () => {
    const { connected, address, publicKey, connectWallet, disconnectWallet, walletClient } = useWeb3();
    return {
        connected,
        publicKey,
        address, // EVM Address
        connectWallet,
        disconnectWallet,
        wallet: walletClient, 
        signTransaction: true, 
    };
};

export const useConnection = () => {
    const { publicClient } = useWeb3();
    return {
        connection: publicClient,
    };
};
