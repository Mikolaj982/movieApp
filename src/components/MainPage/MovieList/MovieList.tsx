import React from "react";
import {moviesDataType} from "../MainPage";


export const MovieList: React.FC<{movies: moviesDataType}> = ({movies}) => {
    console.log(movies)
    return <>
            {movies && movies.map((movie) => {
                return (
                    <div key={movie.id}>
                        <img src={movie.poster} alt='movie' style={{
                            width:'50px',
                            height:'80px',

                        }}></img>
                    </div>
                );
            })}
        </>
}