import React from "react";
import {moviesData, moviesDataType} from "../MainPage";

// interface Movies {
//     name: string,
// }

export const MovieList: React.FC<{movies: moviesDataType}> = ({movies}) => {
    return <>
            {movies.map((movie: any, index: any) => {
                return (
                    <div>
                        <img src={movie.poster} alt='movie'></img>
                    </div>
                );
            })}
        </>
}