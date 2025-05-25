import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'INFINITY AENGINES × FASHION FACTOR',
  description: 'The Ultimate Innovation Show - June 12-15, The Agenda, Dubai Media City',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 