import React from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCard.scss";

interface Movie {
    poster_path: string | null;
    title: string;
    genre_ids: any[];
    vote_average: number;
    popularity: number;
    adult: boolean;
}

interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {

    const getBackgroundImageUrl = (posterPath: string | null) => {
        return posterPath ? `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${posterPath}` : "";
    };

    return (
        <div
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
    );
};

export default MovieCard;
