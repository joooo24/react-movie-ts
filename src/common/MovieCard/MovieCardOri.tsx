import React from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";
import "./MovieCard.scss";
// import { useMoviesGenreQuery, Genre } from "../../hooks/useMovieGenre";
import { useMoviesGenreQuery } from "../../hooks/useMovieGenre";

interface Movie {
    id: number;
    title: string;
    poster_path: string | null;
    genre_ids: number[];
    vote_average: number;
    popularity: number;
    adult: boolean;
    release_date: string;
}

interface Props {
    movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
    // 네비게이트
    const navigate = useNavigate();

    // 뮤비카드 클릭했을 때 id값으로 URL 이동
    const handleMovieCard = () => {
        const url = `/movies/${movie.id}`;
        // URL로 이동
        navigate(url);
    };

    // 카드 이미지 URL 정의
    const backgroundImageUrl = movie?.poster_path
        ? `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`
        : "";

    // 장르 정의
    const { data: genreData } = useMoviesGenreQuery();
    // const showGenre = (genreIdList: number[]): string[] => {
    //     if (!genreData) return [];
    //     const genreNameList = genreIdList?.map((id) => {
    //         const genreObj = genreData.find((genre: Genre) => genre.id === id);
    //         return genreObj.name;
    //     });

    //     return genreNameList;
    // };

    return (
        <div
            onClick={handleMovieCard}
            className="movie-card"
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
            }}
        >
            <div className="overlay">
                <h1>{movie.title}</h1>
                {/* {showGenre(movie.genre_ids).map((genre, index) => (
                    <Badge bg="danger" key={index}>
                        {genre}
                    </Badge>
                ))} */}
                <div>{movie.vote_average}점</div>
                <div>인기: {movie.popularity}</div>
                <div>{movie.adult ? "over18" : ""}</div>
                <div>{movie.release_date}</div>
            </div>
        </div>
    );
};

export default MovieCard;
