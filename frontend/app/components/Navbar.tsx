"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Shield, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useWeb3 } from './WalletContextProvider';

export const Navbar = () => {
    const { t, language, setLanguage } = useLanguage();
    const { connected, address, connectWallet, disconnectWallet } = useWeb3();
    const [isLangOpen, setIsLangOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Fechar dropdown ao clicar fora
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsLangOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const languages = [
        { code: 'pt', label: 'PT', flag: '🇧🇷' },
        { code: 'en', label: 'EN', flag: '🇺🇸' }
    ];

    const currentLang = languages.find(l => l.code === language) || languages[0];

    return (
        <nav className="border-b border-white/5 bg-black/20 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center gap-2">
                        <Shield className="w-8 h-8 text-indigo-500" />
                        <Link href="/" className="text-xl font-bold tracking-tight text-white">
                            IntelliChain <span className="text-indigo-500">IP</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                        <Link href="/" className="hover:text-white transition-colors">{t.navbar.home}</Link>
                        <Link href="/admin" className="hover:text-white transition-colors">{t.navbar.admin}</Link>
                        <Link href="/docs" className="hover:text-white transition-colors">{t.navbar.docs}</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Dropdown de Idioma */}
                        <div className="relative" ref={dropdownRef}>
                            <button 
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="flex items-center gap-2 bg-[#0B0F19] hover:bg-white/10 transition-colors px-3 py-2 rounded-lg border border-white/10 text-white font-bold"
                            >
                                <span className="text-xl">{currentLang.flag}</span>
                                <span>{currentLang.label}</span>
                                <ChevronDown className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isLangOpen && (
                                <div className="absolute top-full mt-2 right-0 w-32 bg-[#0B0F19] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                setLanguage(lang.code as any);
                                                setIsLangOpen(false);
                                            }}
                                            className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-indigo-600/20 transition-colors ${language === lang.code ? 'bg-indigo-600/40' : ''}`}
                                        >
                                            <span className="text-xl">{lang.flag}</span>
                                            <span className="text-white font-bold">{lang.label}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {!connected ? (
                            <button 
                                onClick={connectWallet}
                                className="bg-indigo-600 hover:bg-indigo-700 transition-all rounded-lg px-4 py-2 text-sm font-bold text-white shadow-lg shadow-indigo-600/20"
                            >
                                {language === 'pt' ? 'Conectar Carteira' : 'Connect Wallet'}
                            </button>
                        ) : (
                            <button 
                                onClick={disconnectWallet}
                                className="bg-[#0B0F19] hover:bg-white/10 border border-white/10 transition-all rounded-lg px-4 py-2 text-sm font-mono text-indigo-400 font-bold"
                                title={language === 'pt' ? 'Clique para desconectar' : 'Click to disconnect'}
                            >
                                {address ? `${address.substring(0, 6)}...${address.substring(address.length - 4)}` : 'Conectado'}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};
