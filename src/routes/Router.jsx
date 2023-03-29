import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from '@/Common/Layout'
import AllArea from '@/pages/AllArea'
import FavoriteArea from '@/pages/FavoriteArea'
import MyArea from '@/pages/MyArea'


function Router() {
  return (
    <Routes element={ <Layout /> }>
      <Route path='/' element={ <MyArea /> } index />  
      <Route path='/all-area' element={ <AllArea /> } />
      <Route path='/favorite-area' element={ <FavoriteArea /> } />
    </Routes>
  )
}

export default Router