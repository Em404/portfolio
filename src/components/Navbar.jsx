import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Navbar = ({ darkMode, handleDarkMode }) => {

  const [navbar, setNavbar] = useState(false)

  const handleNavbar = () => {
    setNavbar(!navbar)
  }

  const navItems = [
    {
      id: 0,
      name: "Home",
      path: "home",
    },
    {
      id: 1,
      name: "About",
      path: "about",
    },
    {
      id: 2,
      name: "Skills",
      path: "skills",
    },
    {
      id: 3,
      name: "Projects",
      path: "projects",
    },
    {
      id: 4,
      name: "Contatti",
      path: "contatti",
    }
  ];

  const iconMoon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    </svg>
  )

  const iconSun = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
  )

  const openMenu = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  )

  const closeMenu = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  )
  
  const desktopNavbar = () => {
    return(
      <div className='container mx-auto px-48 py-8 flex justify-between items-center'>
        <div>
          <Link to='/home'>Logo</Link>
        </div>
        <div className='flex gap-4 items-center'>
          <div>
            <ul className='flex gap-4 items-center'>
            {
              navItems.map((link, index) => {
                return (
                <li key={index} className='hover:scale-110 duration-300'>
                  <Link to={link.path}>{link.name}</Link>
                </li>
                )
              } )
            } |
            </ul>
          </div>
          <div className='flex items-center'>
            <button className='bg-purple-900 rounded-lg text-neutral-100' onClick={handleDarkMode}>
              {
                darkMode ? iconMoon : iconSun
              }
            </button>
          </div>
        </div>
      </div>
    )
  }

  const mobileNavbar = () => {
    return (
      <Fragment>
        <div className='container mx-auto px-8 md:px-32 py-4 flex justify-between items-center'>
          <div>
            <Link to='/home'>Logo</Link>
          </div>
          <div>
            <button onClick={handleNavbar}>
              {
                navbar ? closeMenu : openMenu
              }
            </button>
          </div>
        </div>
        <div className={navbar ? "fixed lg:hidden left-0 top-0 w-[80%] h-full ease-in-out duration-500 bg-purple-900 text-neutral-100" : "ease-in-out w-[80%] duration-500 fixed top-0 bottom-0 left-[-100%]"}>
          {/* Mobile Navigation Items */}
          <ul className="text-neutral-100 h-full mt-8">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="px-4 py-2 duration-300 text-neutral-100"
                onClick={() => setNavbar(false)}
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
            <li className='px-4 py-2'>
              
              <button className='text-neutral-100 flex items-center gap-2 duration-300' onClick={handleDarkMode}>Cambia tema
                {
                  darkMode ? iconMoon : iconSun
                }
              </button>
            </li>
          </ul>
        </div>
        
      </Fragment>
    )
  }

  return (
    <Fragment>
      {/* Desktop Navbar */}
      <div className='hidden lg:block dark:bg-neutral-800 dark:text-neutral-100 bg-neutral-100 text-neutral-800 border-b-2 border-neutral-800 dark:border-neutral-100'>
        {desktopNavbar()}
      </div>
   
      {/* Mobile Navbar */}
      <div className='block lg:hidden dark:bg-neutral-800 dark:text-neutral-100 bg-neutral-100 text-neutral-800'>
        {mobileNavbar()}
      </div>
    </Fragment>
  )
}
