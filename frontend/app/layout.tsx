import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WalletContextProvider } from "./components/WalletContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IntelliChain IP | Registro de Propriedade Intelectual",
  description: "Proteja sua criação na Celo com validação inteligente por IA.",
  other: {
    "talentapp:project_verification": "36911dcbc48d122c90b03172597763c28d6cb6be21d8e6e87615e40e0e2a4ff4a9e96a31af6c43380190dbbb35a794af45cfbfcee8035e3eaaf6eb223cdfed2e",
  },
};

import { LanguageProvider } from "./context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className={`${inter.className} bg-[#0a0a0b] text-gray-100 min-h-full flex flex-col antialiased`}>
        <LanguageProvider>
          <WalletContextProvider>
            {children}
          </WalletContextProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
