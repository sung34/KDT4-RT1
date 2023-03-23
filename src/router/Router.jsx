import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MyWeather from "../pages/MyWeather"
import AllWeather from "../pages/AllWeather"
import FavoriteWeather from "../pages/FavoriteWeather"
function Router() {
  return (
    <Routes>
      <Route path='my-weather' element={ <MyWeather /> } />
      <Route path='all-weather' element={ <AllWeather /> } />
      <Route path='favorite-weather' element={ <FavoriteWeather /> } />
    </Routes>
  )
}

export default Router