import React, { useContext } from 'react';
//
import { BiSearchAlt, BiShareAlt, BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
//
import { MovieContext } from '../../context/Movie_Context';

//Navigation bar for small screen size(Mobile Screen size)
const NavSm = () => {
  const { movie } = useContext(MovieContext);
  return (
    <>
      <div className='text-gray-700 flex items-center justify-between bg-white my-2 px-3'>
        <div>
          <h3 className='text-gray-700 text-xl font-bold'>{movie.original_title}</h3>
        </div>

        <div className='w-8 h-8'>
          <BiShareAlt className='w-full h-full' />
        </div>
      </div>
    </>
  )
}

//Navigation bar for Large Screen Size (Laptop Screen)
const NavLg = () => {
  return (
    <>
      <div className='bg-slate-200 py-2'>
        <div className='container flex mx-auto px-1 items-center justify-between'>
          <div className='flex flex-row gap-3'>
            <div className='w-10 h-10'>
              <img src='https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png' alt='no' />
            </div>
            <div className='w-full flex items-center gap-3 px-3 py-1 rounded-md bg-white'>
              <BiSearch />
              <input type='search' placeholder='Search for a movie' className='border-none focus:outline-none w-80' />
            </div>
          </div>
          <div className='flex flex-row gap-3 items-center'>
            <span className='text-gray-300 text-base flex items-center cursor-pointer hover:text-black'>Bombay,DC<BiChevronDown /></span>
            <button className='bg-red-600 text-white px-2 py-1 text-sm rounded'>Sign in</button>
            <div className='w-8 h-6 text-white cursor-pointer'>
              <BiMenu className='w-full h-full ' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const MovieNavBar = () => {
  return (

    <nav>

      {/*Small NavBar for Mobile Phone*/}
      <div className='md:hidden'>
        <NavSm />
      </div>

      {/**Large Screen Size for Laptop Screen*/}
      <div className='hidden md:hidden lg:inline'>
        <NavLg />
      </div>
    </nav>


  )
}

export default MovieNavBar