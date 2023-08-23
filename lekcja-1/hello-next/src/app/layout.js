import styles from "./page.module.css";

function TopBar() {
    return <div className={styles.topBar}>TopBar</div>;
}

function Footer() {
    return <div className={styles.footer}>Footer</div>;
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <TopBar></TopBar>
                {children}
                <Footer></Footer>
            </body>
        </html>
    );
}
