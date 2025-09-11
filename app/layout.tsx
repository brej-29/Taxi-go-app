
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Inter,Outfit } from 'next/font/google'
import NavBar from '@/components/NavBar'
import { ThemeProvider } from 'next-themes'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Taxi App',
  description: 'Stylish Taxi Booking App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className="">
       <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
            

            <NavBar />
            {children}
          </ThemeProvider>
        </body>
    </html>
    </ClerkProvider>
  )
}