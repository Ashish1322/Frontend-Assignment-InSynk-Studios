import React from 'react'
import logo from '../../assests/logo.png'
import "./header.css"
export default function Header({search}) {
  return (
    <div className='header_container'>
      <img src= {logo} />
      <form className='header_form'>
        <i style={{color: "#898E9A", paddingRight: "10px"}} class="fa-solid fa-magnifying-glass"></i>
        <input onChange={e => {search(e.currentTarget.value)} } placeholder='Search for a movie' type="text"/>
      </form>
    </div>
  )
}
