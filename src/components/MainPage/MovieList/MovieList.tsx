import React from "react";
import {moviesDataType} from "../MainPage";
import {Carousel} from "./Carousel/Carousel";
import {CarouselItem} from "./Carousel/CarouselItem";

export const MovieList: React.FC<{movies: moviesDataType}> = ({movies}) => {
    console.log(movies)
    // const items = movies && movies.map((_,index) => {
    //     return _.poster
    // });
    return <>
        <Carousel>
        {/*{items && items.map((img,index) => {*/}
            {movies && movies.map((movie,index) => {
            return (
                <CarouselItem key={index}>
                    <img key={index} src={`${movie.poster}`} alt='movie' style={{
                        width:'150px',
                        height:'220px',
                    }}/>
                </CarouselItem>
            );
        })}
        </Carousel>
    </>
}