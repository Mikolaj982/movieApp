import React from "react";
import {useEffect, useState} from "react";
import {MovieList} from "./MovieList/MovieList";
import './MainPage.scss'
import {Carousel} from "@trendyol-js/react-carousel";

export interface moviesDataProps {
    id: number,
    name: string,
    type: string,
    description: string,
    poster: string,
}
export type moviesDataType = moviesDataProps[] | undefined;

export const MainPage: React.FC = () => {
    const [moviesData, setMoviesData] = useState<moviesDataType>()

    useEffect(() => {
                fetch('https://unelmamovie.com/api/v1/titles', {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        Accept: 'application/json',
                        Authorization: 'Bearer 423|QmfwGAIvrMNPYykGlypCm5BqnbQuMqqsacMXjrBG',
                    }
                })
                    .then(res => res.json())
                    .then(data => setMoviesData(data.pagination.data))
                    .catch(error => console.log(error))
        console.log(moviesData)
    }, []);
    console.log(moviesData)
    return <>
        <div style={{margin: '0 20px'}}>
        <div className='container' >
            <div className='parent'>
        <nav>
            <div className='navLinks'>
                <a>home</a>
                <a>movies</a>
                <a>series</a>
                <a>log out</a>
            </div>
            <div className='avatar'>

            </div>
        </nav>
            </div>
    {/*    */}

            <div className='mainTitleContainer'>
                <h1>Avatar</h1>
                <div className='buttonsContainer'>
                    <button>play now</button>
                    <button>watch list</button>
                </div>
            </div>

        </div>
    {/**/}
        <div className='moviesCategories'>
            <div><h2>Animation</h2></div>
            <div><h2>Action</h2></div>
            <div><h2>Sci-fi</h2></div>
            <div><h2>Fantasy</h2></div>
        </div>
        <div className='lists'>
            <h3>My list</h3>
            <h3>popular</h3>
                <MovieList movies={moviesData}/>
            <h3>coming soon</h3>
                <MovieList movies={moviesData}/>
        </div>
            <div className='footer'></div>
        </div>
    </>
}