import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { sideBarData } from './SideBarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function NavBar() {
  const [sidebar, setSideBar] = useState(false)

  const showSideBar = () => setSideBar(!sidebar)

  return (
    <>
      <IconContext.Provider value={{ color:'white' }}>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSideBar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"} >
        <ul className="nav-menu-items" onClick={showSideBar}>
          <li className='nav-bar-toggle'>
            <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {sideBarData.map((item, index) => (
            <li key={index} className={item.className}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        </nav>
        </IconContext.Provider>
    </>
  )
}

export default NavBar
