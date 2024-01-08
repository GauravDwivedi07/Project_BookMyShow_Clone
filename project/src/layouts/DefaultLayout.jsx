import React from 'react'
import NavBar from '../components/NavBar_Component/NavBar';
const DefaultLayout = (Component) => 
({...props}) => {
  return (
    <div>
    <NavBar/>
    <Component {...props}/>
    </div>
  )
}

export default DefaultLayout