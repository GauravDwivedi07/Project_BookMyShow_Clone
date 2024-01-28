import React, { useState } from 'react'
import PayMentModel from '../PayMentModel_component/PayMentModel';


const MovieInfo = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState();
    const { movie, rent, buy } = props;

    const gerne = movie.genres?.map(({ name }) => name).join(", ");

    const Rent = () => {
        setIsOpen(true);
        setPrice(rent);
    }

    const Buy = () => {
        setIsOpen(true);
        setPrice(buy);
    }
    return (
        <>
            <PayMentModel setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
            <div className='flex flex-col gap-3 px-4 my-3'>
                <h1 className='text-white font-bold text-5xl'>{movie.original_title}</h1>
                <div className='text-white flex flex-col gap-2 md:px-4'>
                    <h4 className='font-semibold'>IMDB Ratings: {movie.vote_average}/10</h4>
                    <h4 className='font-semibold'>Hindi,English</h4>
                    <h4 className='font-semibold'>{movie.runtime} min | {gerne}</h4>
                </div>

                <div className='flex items-center gap-3 '>
                    <button className='bg-red-500 w-full py-3 text-white font-semibold rounded-md' onClick={Rent}>Rent ₹{rent}</button>
                    <button className='bg-red-500 w-full py-3 text-white font-semibold rounded-md' onClick={Buy}>Buy ₹{buy}</button>
                </div>
            </div>
        </>
    )
}

export default MovieInfo