import React from 'react'
import { Link } from 'react-router-dom';
const Poster = (props) => {
  //const {each,isDark} = props;
  return (
    <Link to={`/movie/${props.id}`}>
      <div className='flex flex-col items-start gap-2 px-1 md:px-3'>
        <div className='h-40 md:h-80'>
          <img src={`http://image.tmdb.org/t/p/original${props.poster_path}`} alt='' className='w-full h-full rounded-sm' />
        </div>
        <h3 className={`text-md  ${props.isDark ? "text-white" : "text-black"}`}>{props.original_title}</h3>
      </div>
    </Link>


  )
}

export default Poster