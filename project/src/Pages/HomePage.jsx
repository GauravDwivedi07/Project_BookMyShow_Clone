import React, { useEffect, useState } from 'react';

import axios from 'axios';

//HOC
import DefaultLayout from '../layouts/DefaultLayout';

//Components
import EntertainmentCardSlider from '../components/Entertainment_Component/EntertainmentCardSlider';
import HeroCarousel from '../components/HeroCarousel_Components/HeroCarousel';
import PosterSlider from '../components/PosterSlider_Component/PosterSlider';


const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvent, setOnlineStreamEvent] = useState([]);

  //For Recommended Movies
  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      setRecommendedMovies(getTopRatedMovies.data.results);
    }
    requestTopRatedMovies();
  })

  //For Premier Movies
  useEffect(() => {
    const requestTopPopularMovies = async () => {
      const getTopPopularMovies = await axios.get("/movie/popular");
      setPremierMovies(getTopPopularMovies.data.results);
    }
    requestTopPopularMovies();
  })

  //For online stream  Movies
  useEffect(() => {
    const requestTopOnlineStreamMovies = async () => {
      const getTopOnlineStreamMovies = await axios.get("/movie/upcoming");
      setOnlineStreamEvent(getTopOnlineStreamMovies.data.results);
    }
    requestTopOnlineStreamMovies();
  })
  return (
    <>
      <HeroCarousel />

      <div className='container mx-auto px-4 md:px-12 my-8'>
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 my-3">
          The Best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of Recommended Movies"
          poster={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className='bg-premier-800 py-12'>
        <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
          <div className='hidden md:flex'>
            <img src='https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png'
              alt='rupay'
              className='w-full h-full'
            />
            
          </div>
          <PosterSlider
            title="Premier Movies"
            subtitle="Brand new release every Friday"
            poster={premierMovies}
            isDark={true}
          />
        </div>
      </div>

      <div className='container mx-auto py-4 md:px-12 my-8 flex flex-col gap-3'>
        <PosterSlider
          title="Online Streaming Events"
          subtitle="Online Streaming Events"
          poster={onlineStreamEvent}
          isDark={false}
        />
      </div>
    </>
  )
}

export default DefaultLayout(HomePage);