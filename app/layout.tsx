import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { DLProviderWrapper } from '@/lib/datalayer/dlproviderwrapper';

const defaultUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

export const metadata: Metadata = {
    metadataBase: new URL(defaultUrl),
    title: 'Chase Coble Portfolio',
    description: "Chase Coble's Portfolio demonstrating academic, development, and cybersecurity acumen.",
};

const geistSans = Geist({
    variable: '--font-geist-sans',
    display: 'swap',
    subsets: ['latin'],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${geistSans.className} antialiased`}>
                <DLProviderWrapper> {children} </DLProviderWrapper>
            </body>
        </html>
    );
}
