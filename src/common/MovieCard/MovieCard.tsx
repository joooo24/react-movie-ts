import React from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";
import "./MovieCard.scss";
import { useMoviesGenreQuery, Genre } from "../../hooks/useMovieGenre";

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
    return (
        <div>
            <div className="overlay">
                <h1>뮤비타이틀</h1>
                    <Badge bg="danger">
                        장르
                    </Badge>
                <div>평점</div>
                <div>인기</div>
                <div>연령</div>
                <div>개봉일</div>
            </div>
        </div>
    );
};

export default MovieCard;
