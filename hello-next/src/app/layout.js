export const metadata = {
    title: "Hello next!",
    description: "Nasza pierwsza aplikacja w Next.js",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pl">
            <body>{children}</body>
        </html>
    );
}
