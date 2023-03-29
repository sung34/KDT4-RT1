import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav style={ { width: '50vw', display: 'block', fontSize: '0.5em' } }>
      <ul>
        <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'black', width: '75px', display: 'inline-block', textAlign: 'center'})} to="/">
          <img style={{ width: '35px' }} src='../static/svg/marker.svg' />
          <span style={{ display: 'block' }} >내 지역 보기</span>
        </NavLink>
        <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'black', width: '75px', display: 'inline-block', textAlign: 'center' })} to="/all-area">
          <img style={ { width: '35px' } } src='../static/svg/marker-with-map.svg' />
          <span style={{ display: 'block' }}>전체 시/도 보기</span>
        </NavLink>
        <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'black', width: '75px', display: 'inline-block', textAlign: 'center' })} to="/favorite-area">
          <img style={ { width: '35px' } } src='../static/svg/favorite-on.svg' />
          <span style={{ display: 'block' }}>즐겨찾기</span>
        </NavLink>
      </ul>
    </nav>
  )
}

export default Nav