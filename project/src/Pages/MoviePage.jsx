import React, { useContext, useEffect, useState } from 'react'
//Importing MovieLayout for navbar
import MovieLayout from '../layouts/MovieLayout'
//Importing axios for API through which accessing Movie database 
import axios from 'axios';
//Importing use Params to get the Movie id
import { useParams } from 'react-router-dom';
//Importing the MovieContext for the movie info like cast info , overview etc...
import { MovieContext } from '../context/Movie_Context';
//Importing Visa and ipad icons from react icons
import { FaCcVisa, FaCcApplePay } from 'react-icons/fa';
//Importing Poster Slider Component for Movies
import PosterSlider from '../components/PosterSlider_Component/PosterSlider.jsx'
//Importing MovieHero
import MovieHero from '../components/MovieHero_Component/MovieHero.jsx';
//Importing Slider
import Slider from 'react-slick';
//Cast Component
import Cast from '../components/Cast_Component/Cast.jsx';



const MoviePage = () => {
  const { id } = useParams();
  const { movie, setMovie } = useContext(MovieContext);
  const [casts, setCasts] = useState([]);
  const [similarMovie, setSimilarMovie] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);


  const settingsLG = {
    arrows: true,
    slidesToShow: 8,
    infinite: false,
    dots: true,
    speed: 500,
    slidesToScroll: 8,
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
  }

  const settings = {
    arrows: true,
    slidesToShow: 2,
    infinite: true,
    dots: true,
    speed: 500,
    slidesToScroll: 1,
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
  }

  //Data for Cast Info
  useEffect(() => {
    const requestCast = async () => {
      const getCastInfo = await axios.get(`/movie/${id}/credits`);
      setCasts(getCastInfo.data.cast);
    }
    requestCast();
  }, [id]);

  //Data for Movie Overview
  useEffect(() => {
    const requestMovie = async () => {
      const getMovie = await axios.get(`/movie/${id}`);
      setMovie(getMovie.data);
    }
    requestMovie();
  }, [id]);


  //Data for similar movie
  useEffect(() => {
    const requestSimilarMovie = async () => {
      const getSimilarMovie = await axios.get(`/movie/${id}/similar`);
      setSimilarMovie(getSimilarMovie.data.results);
    }
    requestSimilarMovie();
  }, [id]);

  //Data for recommended movie
  useEffect(() => {
    const requestrecommendedMovies = async () => {
      const getrecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
      setRecommendedMovies(getrecommendedMovies.data.results);
    }
    requestrecommendedMovies();
  }, [id]);

  return (
    <>
      <MovieHero />

      <div className='container my-12 px-4 ml:ml-20 lg:w-2/1'>

        <div className='flex flex-col items-start gap-3 '>
          <h1 className='text-gray-800 font-bold gap-3 text-4x1'>About Movie</h1>
          <p>{movie.overview}</p>
        </div>

        <div className='my-8'>
          <hr />
        </div>

        <div className='my-8'>
          <h2 className='text-gray-800 font-bold text-2xl mb-3'>
            Applicable Offers
          </h2>
          <div className='flex flex-col gap-3 lg:flex-row'>

            {/*For Visa*/}
            <div className='flex items-start gap-2 bg-yellow-100 p-3 border-red-400 border-dashed border-2 rounded-md'>
              <div className='w-8 h-8'>
                <FaCcVisa className='w-full h-full' />
              </div>
              <div className='flex flex-col items-start'>
                <h3 className='text-gray-700 text-xl font-bold'>Visa Stream Offer</h3>
                <p className='text-gray-600 '>Get 50% off up to INR 150 on all RuPay card* on BookMyShow Stream</p>
              </div>
            </div>

            {/*For Apple Pay*/}
            <div className='flex items-start gap-2 bg-yellow-100 p-3 border-red-400 border-dashed border-2 rounded-md'>
              <div className='w-8 h-8'>
                <FaCcApplePay className='w-full h-full' />
              </div>
              <div className='flex flex-col items-start'>
                <h3 className='text-gray-700 text-xl font-bold'>Film Pass</h3>
                <p className='text-gray-600 '>Get 50% off up to INR 150 on all RuPay card* on BookMyShow Stream</p>
              </div>
            </div>


          </div>
        </div>

        <div className='my-8'>
          <hr />
        </div>

        {/*Cast and Crew Info*/}
        <div className='my-8'>
          <h2 className='text-gray-800 font-bold mb-4 text-2xl'>Cast and Crew</h2>
          <Slider {...settingsLG}>{
            casts.map((castData) =>
            (
              <Cast image={castData.profile_path} castName={castData.original_name} role={castData.character} />
            ))
          }</Slider>
        </div>

        <div className='my-8'>
          <hr />
        </div>

        {/*Recommended Movies*/}
        <div className='my-8'>
          <PosterSlider
            title="Recommended Movies"
            poster={recommendedMovies}
            isDark={false}
            subtitle="">

          </PosterSlider>
        </div>


        <div className='my-8'>
          <hr />
        </div>

        {/**Exclusive Movies */}
        <div className='my-8'>
          <PosterSlider
            title="Exclusive Movies"
            poster={similarMovie}
            subtitle=""
            isDark={false}>
          </PosterSlider>
        </div>

      </div>
    </>
  )
}

export default MovieLayout(MoviePage);