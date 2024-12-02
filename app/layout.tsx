'use client'
import { Inter } from "next/font/google";
import ClientLayout from './ClientLayout';
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Blockchain & Web3 Portfolio | DeFi & Tech Blog</title>
        <meta name="description" content="Expert blockchain developer portfolio featuring DeFi, NFT, and smart contract projects. Comprehensive tech blog covering cryptocurrency, Ethereum, Solana, Web3 development, and decentralized applications (dApps)." />
        <meta name="keywords" content="blockchain developer, web3 developer, smart contracts, DeFi development, NFT marketplace, cryptocurrency projects, Ethereum development, Solana development, dApp builder, decentralized applications, blockchain consulting, crypto portfolio, Web3 solutions, blockchain architecture, smart contract audit, DeFi protocols" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Blockchain & Web3 Development Portfolio | DeFi & Crypto Tech Blog" />
        <meta property="og:description" content="Discover innovative blockchain solutions and Web3 development insights. Expert portfolio showcasing DeFi, NFT, and smart contract projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blockchain & Web3 Development Portfolio | DeFi & Crypto Tech Blog" />
        <meta name="twitter:description" content="Expert blockchain developer showcasing DeFi, NFT, and smart contract projects. Latest insights on Web3 development." />
        <meta name="twitter:image" content="https://yourwebsite.com/twitter-card-image.jpg" />
        
        {/* Additional SEO Tags
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Your Name" />
        <link rel="canonical" href="https://yourwebsite.com" />
         */}
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "mainEntity": {
              "@type": "Person",
              "name": "Your Name",
              "description": "Blockchain and Web3 Developer",
              "sameAs": [
                "https://github.com/yourusername",
                "https://linkedin.com/in/yourusername",
                "https://twitter.com/yourusername"
              ],
              "knowsAbout": [
                "Blockchain Development",
                "Smart Contracts",
                "DeFi Protocols",
                "NFT Development",
                "Web3 Architecture",
                "Cryptocurrency",
                "Ethereum",
                "Solana"
              ]
            },
            "about": {
              "@type": "TechArticle",
              "name": "Blockchain & Web3 Development Blog",
              "description": "Technical articles and insights about blockchain development, Web3, DeFi, and cryptocurrency"
            }
          })}
        </script>

        {/* Favicon tags */}
        <link rel="icon" href="/assests/portfolio/footer.png" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assests/portfolio/footer.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assests/portfolio/footer.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assests/portfolio/footer.png" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
