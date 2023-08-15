import { Inter } from 'next/font/google'
import "@/public/styles/fontawesome/all.min.css"
import BodyLayout from './components/BodyLayout'
import Provider from '../api/context/sessionProvider'



export default function RootLayout({ children }) {
  return (
    
          <div className='w-full bg-gray-200 h-auto overflow-hidden'>
                <Provider>
                        <BodyLayout>

                         {children}
                        </BodyLayout>
                </Provider>
          </div>

  )
}
