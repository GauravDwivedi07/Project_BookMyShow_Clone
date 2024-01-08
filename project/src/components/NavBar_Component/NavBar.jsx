import React from 'react';
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";

function NavSm() {
  return (
    <>
      <div className='text-white flex items-center justify-between'>
        <div>
          <h3 className='text-xl text-red-600 font-bold'>Its all Starts here</h3>
          <span className='text-gray-400 text-xs flex items-center cursor-pointer hover:text-white' >Content<BiChevronDown /></span>
        </div>
        <div className='w-8 h-8'>
          <h3 className='text-gray-400'>Use App</h3>
        </div>
      </div>
    </>
  )
}
function NavMd() {
  return (
    <>
      <div className='w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md'>
        <BiSearch />
        <input type='search' id='search' className='w-full bg-transparent border-none focus:outline-none' />
      </div>
    </>
  )
}

function NavLg() {
  return (
    <>
      <div className='container flex mx-auto px-2 items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10'>
            <img src='https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png' alt='BookMyShow' className='w-full h-full' />
          </div>
          <div className='w-full flex items-center gap-3 px-3 py-1 rounded-md bg-white'>
            <BiSearch />
            <input type='search' className='w-full bg-transparent border-none focus:outline-none' placeholder='Searchs for movies , places , sports and activities' />
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <span className='text-gray-200 text-base flex items-center cursor-pointer hover:text-white'>Content<BiChevronDown /></span>
          <button className='bg-red-600 text-white px-2 py-1 text-sm rounded'>Sign in</button>
          <div className='w-8 h-6 text-white '>
            <BiMenu className='w-full h-full ' />
          </div>
        </div>
      </div>
    </>
  )
}

const NavBar = () => {
  return (
    <nav className='bg-black px-4 my-3'>
      {/*Small NavBar for Mobile Phone*/}
      <div className='md:hidden'>
        <NavSm />
      </div>
      {/*Medium NavBar for tabs*/}
      <div className='hidden md:flex lg:hidden'>
        <NavMd />
      </div>
      {/*Large NavBar for Laptop*/}
      <div className='hidden md:hidden lg:flex'>
        <NavLg />
      </div>
    </nav>
  )
}

export default NavBar