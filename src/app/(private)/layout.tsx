import AuthLayout from '@/layout/AuthLayout'
import PrivateLayout from '@/layout/PrivateLayout'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Log in to E.b. Solutions'
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body style={{ margin: 0 }}>
                <PrivateLayout>
                    {children}
                </PrivateLayout>
            </body>
            {/* <body className={inter.className}> */}
            {/* </body> */}
        </html>
    )
}
