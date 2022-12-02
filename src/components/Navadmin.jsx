import React, {useState} from 'react'
import {Link, Outlet} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import '../styles/Navbar.css'

function Navbar() {
  const [menu, setMenu] = useState(false)
  return (
    <div>
          <div className='navbar'>
            <div className='container'>
              <h2>Menthy</h2>
              <ul className={menu ? 'mobile' : 'desktop'}>
                  <li>
                    <Link to='/userlist'>Users</Link>
                  </li>
                  <li>
                    <Link to='/articlelist'>Articles</Link>
                  </li>
              </ul>
              <div onClick={() => {
                setMenu(!menu)
                console.log(menu, '< menu')
              }} className='bar'>
                {menu ?
                <FaBars /> :
                <FaTimes />
                }
              </div>
            </div>
          </div>
      <Outlet/>
    </div>
  )
}

export default Navbar
