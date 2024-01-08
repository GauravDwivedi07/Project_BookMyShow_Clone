import React from 'react'
import MovieNavBar from '../components/NavBar_Component/MovieNavBar'

const MovieLayout = (Component) => ({...props}) => {
  return (
    <div>
    <MovieNavBar/>
    <Component {...props}/>
    </div>
  )
}

export default MovieLayout