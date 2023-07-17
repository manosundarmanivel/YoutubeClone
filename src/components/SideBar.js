import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/Store'



const SideBar = () => {
    const menuState = useSelector(store => store.app.isMenuOpen)

if(!menuState) return null; 
  return (
    <div className='p-10 shadow-lg'>
        <h1>Home</h1>
        <h1>Shots</h1>
        <h1>Subscriptions</h1>
        <h1>Library</h1>
        <h1>Trending</h1>
        <h1>Shopping</h1>
    </div>
  )
}

export default SideBar