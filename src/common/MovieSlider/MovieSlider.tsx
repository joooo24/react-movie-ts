// MovieSlider.tsx
import React from "react";
import "./MovieSlider.scss";
import MovieCard from "../MovieCard/MovieCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "./../../common/constants/responsive";

interface Movie {
    id: number;
    title: string;
    poster_path: string | null;
    genre_ids: number[];
    vote_average: number;
    popularity: number;
    adult: boolean;
    release_date: string;
    [key: string]: any; // 나머지 필드에 대한 임의의 속성
}

interface MovieSliderProps {
    data: { results: Movie[] };
    title: string;
}

const MovieSlider: React.FC<MovieSliderProps> = ({ data, title }) => {
    return (
        <div className="movie-slider-container">
            <h3>{title}</h3>
            <Carousel
                infinite={true}
                centerMode={true}
                itemClass="movie-slider p-1"
                containerClass="carousel-container"
                responsive={responsive}
            >
                {data.results.map((movie: Movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </Carousel>
        </div>
    );
};

export default MovieSlider;
