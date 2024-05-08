import React from 'react';
import MovieCard from '../../../../common/MovieCard/MovieCard';
import { useMovieRecommendQuery } from '../../../../hooks/useMovieRecommend';
import { Alert } from "react-bootstrap";
import { ClipLoader } from "react-spinners";

interface RecommendMovieProps {
    id: string;
}

const RecommendMovie: React.FC<RecommendMovieProps> = ({ id }) => {

    const { data: recommendData, isLoading, isError, error } = useMovieRecommendQuery({ id });
    console.log("### recommendData", recommendData);

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
        <div className="movie-card-container">
            {recommendData.map((movie: any, idx: string) => (
                <MovieCard key={idx} movie={movie}></MovieCard>
            ))}
        </div>
    );
}

export default RecommendMovie;
