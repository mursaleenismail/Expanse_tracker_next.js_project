import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers} from './provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"  />
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Roboto:ital,wght@0,100;0,300;0,500;1,300&display=swap" rel="stylesheet"/>

        </head>
      <body>
        <Providers>{children}</Providers>
      </body>

      {/* <body className={inter.className}>{children}</body> */}
    </html>
  )
}