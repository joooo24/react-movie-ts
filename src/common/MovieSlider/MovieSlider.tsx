import React from "react";
import "react-multi-carousel/lib/styles.css";
import "./MovieSlider.scss";
// import { responsive } from "../constants/responsive";

interface MovieSliderProps {
    data: { results: any[] };
    title: string;
}

const MovieSlider: React.FC<MovieSliderProps> = ({ data, title }) => {
    console.log("### MovieSlider usePopularMoviesQuery data", data);

    const getBackgroundImageUrl = (posterPath: string | null) => {
        return posterPath ? `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${posterPath}` : "";
    };

    return (
        <div className="movie-slider-container">
            <h3 className="">{title}</h3>
            {data?.results.map((movie: any, idx: number) => (
                <div
                    key={idx}
                    className="movie-card"
                    style={{
                        backgroundImage: `url(${getBackgroundImageUrl(movie.poster_path)})`,
                    }}
                >
                    <div className="overlay">
                        <h1>{movie.title}</h1>
                        <ul className="badge-wrap">
                            {movie.genre_ids.map((genre: any, idx: number) => (
                                <li key={idx}>{genre}</li>
                            ))}
                        </ul>
                        <div className="title">{movie.title}</div>
                        <ul className="tag-wrap">
                            <li className="">
                                <i></i>
                                {movie.vote_average}점
                            </li>
                            <li className="">
                                <i></i>
                                {movie?.popularity}
                            </li>
                            <li>{movie.adult ? <div className="adult">18</div> : <div className="all">ALL</div>}</li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MovieSlider;
