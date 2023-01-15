import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Component/AdminComponent/Sidebar'

function Admin() {
  return (
    <div>
        <header>
            <Sidebar/>
        </header>
        <main>
            <Outlet/>
        </main>   
    </div>
  )
}

export default Admin
