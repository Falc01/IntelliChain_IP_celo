"use client";

import React, { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { ShieldAlert, Check, X, Database, UserCheck, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/Navbar';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

const ADMIN_WHITELIST = [
    "J3fSndN8Y7F8f2vFvG1Hh3J4k5L6m7N8P9q0R1s2T3u", // Substitua pela sua carteira real
    "6uP97n5Wv35v868xX8668v6v8v6v8v6v8v6v8v6v8v6v"  // Outra carteira de admin
];

export default function AdminPage() {
    const { connected, publicKey } = useWallet();
    const [isAdmin, setIsAdmin] = useState(false);
    const [requests, setRequests] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchRequests = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_URL}/admin/pending`);
            const data = await response.json();
            setRequests(data);
        } catch (error) {
            console.error("Erro ao carregar pendências:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // MODO HACKATHON/TESTE: Todo mundo é admin, mesmo sem carteira conectada.
        setIsAdmin(true);
        fetchRequests();
    }, []);

    const resolveRequest = async (id: string, decision: 'APPROVED' | 'REJECTED') => {
        try {
            const response = await fetch(`${API_URL}/admin/resolve?request_id=${id}&decision=${decision}`, {
                method: 'POST'
            });
            const data = await response.json();
            if (data.success) {
                setRequests(prev => prev.filter(r => r._id !== id));
            }
        } catch (error) {
            console.error("Erro ao resolver solicitação:", error);
            alert("Erro ao processar decisão.");
        }
    };

    if (!isAdmin) {
        return (
            <main className="min-h-screen bg-[#0a0a0b] flex flex-col items-center justify-center p-4">
                <Navbar />
                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center max-w-md backdrop-blur-sm">
                    <ShieldAlert className="w-16 h-16 text-rose-500 mx-auto mb-4" />
                    <h1 className="text-2xl font-bold text-white mb-2">Acesso Restrito</h1>
                    <p className="text-gray-400">
                        Sua carteira não possui permissões administrativas para acessar este painel.
                    </p>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#0a0a0b]">
            <Navbar />

            <header className="pt-24 pb-12 px-4 text-center">
                <h1 className="text-4xl font-bold text-white mb-4">Painel de Curadoria</h1>
                <p className="text-gray-400 max-w-2xl mx-auto flex items-center justify-center gap-2">
                    <Database className="w-4 h-4" />
                    Auditoria de registros com alta similaridade detectada por IA.
                </p>
            </header>

            <section className="max-w-7xl mx-auto px-4 py-12">
                {loading ? (
                    <div className="text-center py-20">
                        <Loader2 className="w-10 h-10 text-indigo-500 animate-spin mx-auto mb-4" />
                        <p className="text-gray-400">Sincronizando com o banco de dados...</p>
                    </div>
                ) : requests.length === 0 ? (
                    <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
                        <ShieldAlert className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                        <p className="text-gray-400">Tudo limpo! Não há solicitações pendentes no momento.</p>
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {requests.map((request) => (
                            <motion.div
                                key={request._id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
                            >
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="flex-1 space-y-4">
                                        <div className="flex items-center gap-4 text-xs font-mono text-indigo-400">
                                            <span>ID: {request._id}</span>
                                            <span className="text-gray-600">•</span>
                                            <span>Autor: {request.owner || "Desconhecido"}</span>
                                        </div>
                                        <p className="text-gray-200 leading-relaxed italic">
                                            "{request.content?.substring(0, 300)}..."
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-amber-500"
                                                    style={{ width: `${(request.highest_similarity || 0) * 100}%` }}
                                                />
                                            </div>
                                            <span className="text-xs font-bold text-amber-500">
                                                {((request.highest_similarity || 0) * 100).toFixed(2)}% Similaridade
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex md:flex-col gap-3 justify-end">
                                        <button
                                            onClick={() => resolveRequest(request._id, 'APPROVED')}
                                            className="flex items-center gap-2 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-500 hover:text-white px-6 py-3 rounded-xl transition-all font-bold border border-emerald-500/20"
                                        >
                                            <Check className="w-5 h-5" />
                                            Aprovar
                                        </button>
                                        <button
                                            onClick={() => resolveRequest(request._id, 'REJECTED')}
                                            className="flex items-center gap-2 bg-rose-600/20 hover:bg-rose-600 text-rose-500 hover:text-white px-6 py-3 rounded-xl transition-all font-bold border border-rose-500/20"
                                        >
                                            <X className="w-5 h-5" />
                                            Rejeitar
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}
