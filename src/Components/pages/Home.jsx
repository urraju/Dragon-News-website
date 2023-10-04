

import React from 'react'
import Navbar from '../Header/Navbar/Navbar'
import Header from '../Header/Header'
import BreakingNews from '../HomeContent/BreakingNews'
import Home3Card from '../HomeContent/Home3Card'

const Home = () => {
    return (
        <div>
          <Header />
          <BreakingNews />
          <Navbar />
          <Home3Card />
        </div>
    ) 
}

export default Home