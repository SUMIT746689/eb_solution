
import PrivateLayout from '@/layout/PrivateLayout'
import type { Metadata } from 'next'
import ValidateUser from './ValidateUser'
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
                <ValidateUser>
                    <PrivateLayout>
                        {children}
                    </PrivateLayout>
                </ValidateUser>
            </body>
            {/* <body className={inter.className}> */}
            {/* </body> */}
        </html>
    )
}
