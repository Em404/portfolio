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
                <li key={index} className='hover:scale-110 duration-300 font-semibold text-xl lg:text-purple-900 dark:text-neutral-100'>
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
            <div className='flex justify-start px-4 py-2'>
                  <a href="https://www.linkedin.com/in/emanuele-macchiarulo-web-dev/" className='me-4 hover:scale-110 duration-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} viewBox="0 0 448 512">
                    <path fill='#f5f5f5' d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/Em404" className='hover:scale-110 duration-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} viewBox="0 0 496 512">
                    <path fill='#f5f5f5' d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                    </svg>
                  </a>
              </div>
          </ul>
        </div>
        
      </Fragment>
    )
  }

  return (
    <Fragment>
      {/* Desktop Navbar */}
      <div className='hidden lg:block dark:bg-neutral-800 dark:text-neutral-100 bg-neutral-100 text-neutral-800'>
        {desktopNavbar()}
      </div>
   
      {/* Mobile Navbar */}
      <div className='block lg:hidden dark:bg-neutral-800 dark:text-neutral-100 bg-neutral-100 text-neutral-800'>
        {mobileNavbar()}
      </div>
    </Fragment>
  )
}
