// MovieSlider.tsx
import React from "react";
import "./MovieSlider.scss";
import MovieCard from "../MovieCard/MovieCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

// ResponsiveType 정의
interface ResponsiveType {
    [key: string]: {
        breakpoint: { max: number; min: number };
        items: number;
    };
}

const MovieSlider: React.FC<MovieSliderProps> = ({ data, title }) => {

    const responsive: ResponsiveType = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

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
