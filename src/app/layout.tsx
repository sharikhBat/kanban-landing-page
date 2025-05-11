import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "React Kanban Board with Drag & Drop | Simple & Lightweight",
  description: "A lightweight, drag-and-drop Kanban board built with React. Simple installation, customizable cards, and responsive design for just $30, forever.",
  keywords: "react kanban board, drag and drop, npm kanban package, react drag drop kanban, project management, agile development, scrum board, task management, react component, kanban react, trello alternative",
  authors: [{ name: "React Kanban Team" }],
  creator: "React Kanban",
  publisher: "React Kanban",
  applicationName: "React Kanban Board",
  metadataBase: new URL("https://your-domain.com"),
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "React Kanban Board with Drag & Drop | Simple & Lightweight",
    description: "A lightweight, drag-and-drop Kanban board built with React. Simple installation, customizable cards, and responsive design for just $30, forever.",
    siteName: "React Kanban Board",
    images: [
      {
        url: "https://your-domain.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "React Kanban Board Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "React Kanban Board with Drag & Drop | Simple & Lightweight",
    description: "A lightweight, drag-and-drop Kanban board built with React. Simple installation, customizable cards, and responsive design for just $30, forever.",
    creator: "@yourhandle",
    images: ["https://your-domain.com/images/twitter-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  category: "Development Tools",
  other: {
    'pinterest-rich-pin': 'true',
    'format-detection': 'telephone=no',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'theme-color': '#4361ee',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Schema.org structured data for Product */}
        <Script
          id="structured-data-product"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "React Kanban Board with Drag & Drop",
              "operatingSystem": "Any",
              "applicationCategory": "DeveloperApplication",
              "offers": {
                "@type": "Offer",
                "price": "30.00",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "124"
              }
            })
          }}
        />
        
        {/* Schema.org structured data for Organization */}
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "React Kanban",
              "url": "https://your-domain.com",
              "logo": "https://your-domain.com/logo.png",
              "sameAs": [
                "https://twitter.com/yourhandle",
                "https://github.com/your-handle",
                "https://linkedin.com/company/your-handle"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
