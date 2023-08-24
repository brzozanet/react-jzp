"use client";
import "./globals.css";
import { TopBar } from "./components/TopBar/TopBar";
import { MainMenu } from "./components/MainMenu/MainMenu";
import { Logo } from "./components/Logo/Logo";
import { IconMenu } from "./components/IconMenu/IconMenu";
import { CategoriesMenu } from "./components/CategoriesMenu/CategoriesMenu";
import { Footer } from "./components/Footer/Footer";
import { MainContent } from "./components/MainContent/MainContent";
import { CurrencySelector } from "./components/CurrencySelector/CurrencySelector";
import { CurrencyContext } from "./contexts/CurrencyContext";
import { useState } from "react";

export default function RootLayout({ children }) {
    const [currency, setCurrency] = useState("PLN");

    return (
        <html lang="en">
            <body>
                <CurrencyContext.Provider value={[currency, setCurrency]}>
                    <MainContent>
                        <TopBar>
                            <MainMenu />
                            <Logo />
                            <CurrencySelector />
                            <IconMenu />
                        </TopBar>
                        <CategoriesMenu />
                        {children}
                    </MainContent>
                    <Footer />
                </CurrencyContext.Provider>
            </body>
        </html>
    );
}
