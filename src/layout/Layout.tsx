import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

export default function Layout(props: React.PropsWithChildren) {
  return (
<>
<Header/>
    <main className="container mx-auto">
        {props.children}    
    </main>
    <Footer/>
    </>
  )
} 
 