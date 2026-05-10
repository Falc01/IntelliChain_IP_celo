"use client";

import React from 'react';
import { Navbar } from '../components/Navbar';
import { ShieldCheck, Cpu, Database, Wallet, FileSearch, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function DocsPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-[#0a0a0b]">
            <Navbar />

            <header className="pt-24 pb-12 px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{t.docs.title}</h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    {t.docs.subtitle}
                </p>
            </header>

            <section className="max-w-5xl mx-auto px-4 py-12 space-y-16">
                
                {/* Visão Geral */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
                            <ShieldCheck className="w-6 h-6" />
                            {t.docs.whatIsTitle}
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            {t.docs.whatIsDesc}
                        </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                        <h3 className="font-bold text-white mb-4">{t.docs.benefitsTitle}</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> {t.docs.benefit1}</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> {t.docs.benefit2}</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> {t.docs.benefit3}</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> {t.docs.benefit4}</li>
                        </ul>
                    </div>
                </div>

                {/* Fluxo Técnico */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-white text-center">{t.docs.flowTitle}</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Cpu className="w-6 h-6 text-purple-400" />,
                                title: t.docs.flow1Title,
                                desc: t.docs.flow1Desc
                            },
                            {
                                icon: <Database className="w-6 h-6 text-blue-400" />,
                                title: t.docs.flow2Title,
                                desc: t.docs.flow2Desc
                            },
                            {
                                icon: <Wallet className="w-6 h-6 text-emerald-400" />,
                                title: t.docs.flow3Title,
                                desc: t.docs.flow3Desc
                            }
                        ].map((step, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                <div className="mb-4">{step.icon}</div>
                                <h4 className="font-bold text-white mb-2">{step.title}</h4>
                                <p className="text-sm text-gray-400">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Arquitetura */}
                <div className="bg-indigo-500/5 border border-indigo-500/10 p-8 rounded-3xl">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <FileSearch className="w-6 h-6 text-indigo-400" />
                        {t.docs.archTitle}
                    </h2>
                    <div className="space-y-4 text-sm text-gray-300">
                        <p><strong>Frontend:</strong> {t.docs.archFrontend}</p>
                        <p><strong>Blockchain:</strong> {t.docs.archBlockchain}</p>
                        <p><strong>IA Engine:</strong> {t.docs.archAI}</p>
                        <p><strong>Backend:</strong> {t.docs.archBackend}</p>
                    </div>
                </div>

            </section>

            <footer className="py-20 text-center text-gray-600 text-xs">
                {t.docs.footer}
            </footer>
        </main>
    );
}
