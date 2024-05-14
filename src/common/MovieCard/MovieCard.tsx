// MovieCard.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCard.scss";
import { useMoviesGenreQuery } from "./../../hooks/useMovieGenre";
import { Alert } from "react-bootstrap";
import { ClipLoader } from "react-spinners";

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
    // 뮤비카드 클릭 시 id값으로 URL 이동
    const navigate = useNavigate();
    const handleMovieCard = () => {
        const url = `/movies/${movie.id}`;
        navigate(url);
    };

    // 배경
    const getBackgroundImageUrl = (posterPath: string | null) => {
        return posterPath ? `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${posterPath}` : "";
    };

    // 장르
    const { data: genreData, isLoading, isError, error } = useMoviesGenreQuery();

    const getGenreName = (genreId: number): string => {
        const foundGenre = genreData.find((genre: Genre) => genre.id === genreId);
        return foundGenre ? foundGenre.name : "";
    };

    if (isLoading) {
        return (
            <div className="loading-container">
                <ClipLoader color="#f86c6b" size={200} loading={isLoading} />
            </div>
        );
    }

    if (isError) {
        return <Alert variant="danger">{error.message}</Alert>;
    }

    return (
        <div
            onClick={handleMovieCard}
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
                <div className="release-date">{movie.release_date}</div>
            </div>
        </div>
    );
};

export default MovieCard;
