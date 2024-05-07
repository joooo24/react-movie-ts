import React from "react";
import "./RecommendMovie.scss";
import { useMovieRecommendQuery } from "../../../../hooks/useMovieRecommendQuery";
import MovieCard from "../../../../common/MovieCard/MovieCard";
const RecommendMovie = ({ id }) => {
    const { data, isLoading, isError } = useMovieRecommendQuery(id);
    console.log("RecommendMovie data", data);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching data...</div>;
    }

    return (
        <div className="movie-card-container">
            {data.map((movie, idx) => (
                <MovieCard key={idx} movie={movie}></MovieCard>
            ))}
        </div>
    );
};

export default RecommendMovie;
