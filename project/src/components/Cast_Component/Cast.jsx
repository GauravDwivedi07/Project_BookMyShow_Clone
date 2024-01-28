import React from 'react'

const Cast = (props) => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <div className='w-32 h-32'>
          <img src={`https://image.tmdb.org/t/p/original${props.image}`} alt='Cast Image'
            className='w-full h-full rounded-full object-cover object-center'
          />

        </div>
        <h2 className='text-gray-500 text-lg align-baseline'>{props.castName}</h2>
        <h5 className='text-gray-500 text-sm align-baseline'>as {props.role}</h5>
      </div>
    </>
  )
}

export default Cast