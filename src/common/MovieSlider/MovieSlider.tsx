import React from "react";
import "react-multi-carousel/lib/styles.css";
import "./MovieSlider.scss";
import MovieCard from "../MovieCard/MovieCard";
// import { responsive } from "../constants/responsive";

interface MovieSliderProps {
    data: { results: any[] };
    title: string;
}

const MovieSlider: React.FC<MovieSliderProps> = ({ data, title }) => {
    console.log("### MovieSlider usePopularMoviesQuery data", data);


    return (
        <div className="movie-slider-container">
            <h3 className="">{title}</h3>
            {data?.results.map((movie: any, idx: number) => (
                <MovieCard movie={movie}  key={idx}/>
            ))}
        </div>
    );
};

export default MovieSlider;
