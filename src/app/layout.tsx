import type { Metadata } from 'next'
import { Hammersmith_One } from 'next/font/google'
import './globals.css'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

const hammersmithOne = Hammersmith_One({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'NeoAutomate',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={hammersmithOne.className}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {children}
          <Analytics />
          <SpeedInsights />
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  )
}