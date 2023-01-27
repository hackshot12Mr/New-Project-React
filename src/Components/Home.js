import React from 'react'
import { Navbar } from 'react-bootstrap'
import GamesList from "./GamesList"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <GamesList/>
    </div>
  )
}

export default Home