import type { Metadata } from "next";
import "./globals.css";
import Providers from "./_query/provider";

export const metadata: Metadata = {
    title: "BinZip | 유투브 국내 드라마 결말까지 몰아보자",
    description:
        "지나쳤던 드라마 몰아보자! 다양한 드라마 시작부터 결말까지 한번에!",
    icons: {
        icon: "/icon.ico",
    },
    openGraph: {
        title: "BinZip | 유투브 국내 드라마 결말까지 몰아보자",
        description:
            "지나쳤던 드라마 몰아보자! 다양한 드라마 시작부터 결말까지 한번에!",
        url: "http://localhost:3000",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}

//test
