import React from 'react'

const PosterSlider = (props) => {
  const { title, subtitle, poster, isDark, config } = props;
  return (
    <>
      <div className={'flex flex-col items-start ${isDark ? "text-white":"text-black"}'}>
        <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 my-3'>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </>
  )
}

export default PosterSlider