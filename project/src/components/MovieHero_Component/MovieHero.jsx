import React, { useContext } from 'react'
import { MovieContext } from '../../context/Movie_Context'
import MovieInfo from './MovieInfo';
import './MovieHero.css'

const MovieHero = () => {
    const { movie } = useContext(MovieContext);
    const gerne = movie.genres?.map(({ name }) => name).join(", ");
    const rent = movie.vote_average > 6 ? 199 : 149;
    const buy = movie.vote_average > 6 ? 599 : 399;
    return (
        <>

            <div>
                {/**Small Screen Size */}

                {/**Code for Image for*/}
                <div className='lg:hidden w-full'>
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt='Poster'
                        className='m-4 mx-auto rounded'
                        style={{ width: "calc(100%-2rem)" }}

                    />
                </div>
                {/**Rating ,Runtimes etc */}
                <div className='flex flex-col gap-3 lg:hidden'>
                    <div className='flex flex-col-reverse gap-3 px-4 my-3'>
                        <div className='text-black flex flex-col gap-2 md:px-4'>
                            <h4>IMDB Ratings: {movie.vote_average}/10</h4>
                            <h4>Hindi,English</h4>
                            <h4>{movie.runtime} min |{gerne}</h4>
                        </div>
                    </div>

                    {/**Button : Rent ,Buy */}
                    <div className='flex items-center gap-3 md:w-screen text-xl px-4'>
                        <button className='bg-red-500 w-full py-3 text-white font-semibold rounded-md on'>Rent ₹{rent}</button>
                        <button className='bg-red-500 w-full py-3 text-white font-semibold rounded-md'>Buy ₹{buy}</button>
                    </div>
                </div>

                {/**For Large Screen Size */}

                <div className='relative hidden lg:block' style={{ height: "30rem" }}>
                    <div className="absolute z-10 w-full h-full" style={{ background: "linear-gradient(90deg, rgb(34, 34, 34) 24.95%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)" }}></div>

                    <div className='absolute z-10 w-full h-full'
                    >
                        <div className='absolute z-30 left-24 top-10 flex items-center gap-10'>
                            <div className='w-64 h-96'>
                                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='Movie Poster'
                                    className=' w-full h-full rounded-lg' />
                            </div>

                            <div className=''>
                                <MovieInfo movie={movie} rent={rent} buy={buy} />
                            </div>

                        </div>

                        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt='bg image'
                            className=' w-full h-full object-cover object-center' />

                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieHero



