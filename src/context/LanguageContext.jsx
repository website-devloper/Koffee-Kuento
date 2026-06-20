"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '@/messages/en.json';
import fr from '@/messages/fr.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('fr');

    useEffect(() => {
        const stored = localStorage.getItem('kk_lang');
        if (stored) setLang(stored);
    }, []);

    const toggleLang = (newLang) => {
        setLang(newLang);
        localStorage.setItem('kk_lang', newLang);
        document.documentElement.lang = newLang;
    };

    const t = (key) => {
        const messages = lang === 'en' ? en : fr;
        return key.split('.').reduce((obj, k) => (obj || {})[k], messages) || key;
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

const fallbackT = (key) => {
    if (!key) return '';
    return key.split('.').reduce((obj, k) => (obj || {})[k], fr) || key;
};

export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) return { lang: 'fr', toggleLang: () => {}, t: fallbackT };
    return ctx;
};
