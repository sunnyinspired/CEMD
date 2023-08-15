"use client"
import Footer from './Footer'
import Header from './Header'

const BodyLayout = ({children}) => {
  return (
    <>

        <Header /> 
        {
          children
        }
        <Footer />
    </>
  )
}

export default BodyLayout