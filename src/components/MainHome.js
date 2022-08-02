import React from 'react'
import Category from './Category'
import Events from './Events'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import Popular from './Popular'
import Tellus from './Tellus'

const MainHome = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Popular />
      <Category />
      <Events />
      <Tellus />
      <Events />
      <Footer />
    </div>
  )
}

export default MainHome
