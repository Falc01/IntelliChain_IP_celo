"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { dictionary, Language, Dictionary } from '../locales/dictionary';

type LanguageContextType = {
  language: Language;
  t: Dictionary;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  // Recupera a preferência do usuário (se houver) ao carregar a página
  useEffect(() => {
    const saved = localStorage.getItem('app_language') as Language;
    if (saved && (saved === 'pt' || saved === 'en')) {
      setLanguage(saved);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('app_language', lang);
  };

  const toggleLanguage = () => {
    const newLang = language === 'pt' ? 'en' : 'pt';
    changeLanguage(newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, t: dictionary[language], setLanguage: changeLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
