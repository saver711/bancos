import type { Metadata } from "next"
import { IBM_Plex_Serif, Inter } from "next/font/google"
import "./globals.css"
// 1st font
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

// 2nd font
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif" // we can use it as tw class like this: font-ibm-plex-serif
})

export const metadata: Metadata = {
  title: "Bancos",
  description: "Banks Management App",
  icons: "/icons/logo.svg"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        {children}
      </body>
    </html>
  )
}
