import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({Children}) {
  return (
    <>
    
    
    
    
    <Header />
    <div>{Children}</div>
    <Header />
    <Footer />
    </>
   
  )
}

export default Layout
