import React from "react";
import {useEffect, useState} from "react";
import {MovieList} from "./MovieList/MovieList";

export interface moviesData {
    // id?: number,
    name: string,
    // type?: string,
    // description?: string,
    // poster?: string,
}
export type moviesDataType = moviesData[]

export const MainPage: React.FC = () => {
    const [moviesData, setMoviesData] = useState<moviesDataType | undefined>()

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
                    .then(data => setMoviesData(data))
                    .catch(error => console.log(error))
    }, []);
    console.log(moviesData)
    return <>
        <nav>
            <a>home</a>
            <a>movies</a>
            <a>series</a>
            <a>log out</a>
        </nav>
    {/*    */}
        <div>
            <div>
                <h2>popular title</h2>
                <button>play now</button>
                <button>watch list</button>
            </div>
        </div>
    {/**/}
        <div>
            <h2>list</h2>
            <div>
                <ul>
                    <MovieList movies={moviesData}/>
                </ul>
            </div>
            <h2>popular</h2>
            <h2>coming soon</h2>
        </div>
    </>
}