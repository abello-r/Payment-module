import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import './globals.css'

const mulish = Mulish({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Bitnovo',
	description: 'Crypto made easy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>{children}</body>
    </html>
  )
}
