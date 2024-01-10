import React from 'react'
import Slider from 'react-slick';
import Poster from '../Poster_Component/Poster';

const PosterSlider = (props) => {
  const { title, subtitle, poster, isDark, config } = props;

  const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='flex flex-col items-start sm:ml-3 my-2'>
        <h1 className={`text-2xl font-bold ${isDark ? "text-white" : "text-black"}`}>{title}</h1>
        <p className={` text-sm ${isDark ? "text-white" : "text-black"}`}>{subtitle}</p>
      </div>
      <Slider {...settings}>
        {poster.map((each) => (
          <Poster {...each} isDark={isDark} />
        ))}
      </Slider>
    </>
  )
}

export default PosterSlider