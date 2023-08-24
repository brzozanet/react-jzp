"use client";

import "./globals.css";
import { useState } from "react";
import { CurrencyContext } from "./contexts/CurrencyContext";
import { TopBar } from "./components/TopBar/TopBar";
import { MainMenu } from "./components/MainMenu/MainMenu";
import { Logo } from "./components/Logo/Logo";
import { IconMenu } from "./components/IconMenu/IconMenu";
import { CategoriesMenu } from "./components/CategoriesMenu/CategoriesMenu";
import { Footer } from "./components/Footer/Footer";
import { MainContent } from "./components/MainContent/MainContent";
import { CurrencySelector } from "./components/CurrencySelector/CurrencySelector";

export default function RootLayout({ children }) {
    const [selectedCurrency, setSelectedCurrency] = useState();

    return (
        <html lang="en">
            <body>
                <CurrencyContext.Provider
                    value={[selectedCurrency, setSelectedCurrency]}
                >
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
