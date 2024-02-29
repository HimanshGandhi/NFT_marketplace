import React from 'react'
import './App.css'
import TopFold from './components/TopFold'
import Brands from './components/Brands'
import Trendingnfts from './components/Trendingnfts'
import Infosection from './components/Infosection'
import Footer from './components/Footer'
import Header from './components/Header'



const App = () => {
  return (
    <div className='max-width'>
      <Header />
      <TopFold />
      <Brands />
      <Trendingnfts />
      <Infosection />
      <Footer />

    </div>
  )
}

export default App