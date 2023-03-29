import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

function Layout() {

  return  ( 
    <>
      <Outlet/>
      <Nav />
    </>    
  )
}

export default Layout