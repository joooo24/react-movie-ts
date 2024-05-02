// MovieCard.tsx
import React from "react";
import "./MovieCard.scss";
import { useMoviesGenreQuery } from "./../../hooks/useMovieGenre";
import { Alert } from "react-bootstrap";

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

interface MovieCardProps {
    movie: Movie;
}

interface Genre {
    id: number;
    name: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    // 배경
    const getBackgroundImageUrl = (posterPath: string | null) => {
        return posterPath ? `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${posterPath}` : "";
    };

    
    // 장르
    const { data: genreData, isLoading, isError, error } = useMoviesGenreQuery();

    console.log("### movie-card useMoviesGenreQuery data", genreData);
    
    const getGenreName = (genreId: number): string => {
        const foundGenre = genreData.find((genre: Genre) => genre.id === genreId);
        return foundGenre ? foundGenre.name : "";
    };

    if (isLoading) {
        return <div>로딩 중...</div>;
    }

    if (isError) {
        return <Alert variant="danger">{error.message}</Alert>;
    }

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
                    {movie.genre_ids.map((genreId: number, idx: number) => (
                        <li key={idx}>{getGenreName(genreId)}</li>
                    ))}
                </ul>
                <ul className="tag-wrap">
                    <li>
                        <i></i>
                        {movie.vote_average}점
                    </li>
                    <li>
                        <i></i>
                        {movie.popularity}
                    </li>
                    <li>{movie.adult ? <div className="adult">18</div> : <div className="all">ALL</div>}</li>
                </ul>
                <div>{movie.release_date}</div>
            </div>
        </div>
    );
};

export default MovieCard;
