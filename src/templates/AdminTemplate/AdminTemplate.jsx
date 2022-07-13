
// SYSTEM
import React from 'react'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
// COMPONENT
import Header from './layouts/Header/Header'
import Navbar from './layouts/Navbar/Navbar'
export default function AdminTemplate() {
    useEffect (()=>{
        window.scrollTo(0,0)
    })
  return (
    <>
    <div className='container admin-tainer'>
            <Navbar/>
            <Header/>
            <div className='outlet'>
            <Outlet/>

            </div>

    </div>
    </>
  )
}
