import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function MainlayOut() {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default MainlayOut
