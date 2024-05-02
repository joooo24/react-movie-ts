// MovieSlider.tsx
import React from "react";
import "./MovieSlider.scss";
import MovieCard from "../MovieCard/MovieCard";

interface Movie {
    id: number;
    poster_path: string | null;
    title: string;
    genre_ids: number[];
    vote_average: number;
    popularity: number;
    adult: boolean;
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
            {data.results.map((movie: Movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    );
};

export default MovieSlider;
