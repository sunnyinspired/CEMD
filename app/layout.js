import Provider from './api/context/sessionProvider'
//import { UserContextProvider } from './api/context/userContext'
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Election Monitoring Platform',
  description: 'Caritas Election Monitoring Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>

          {children}
        </Provider>
      </body>
    </html>
  )
}
