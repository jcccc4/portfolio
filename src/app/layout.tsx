import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ 
  weight: ["100" , "300" , "400" , "500" , "700" , "900" ],
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'JCSacra',
  description: 'My Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
