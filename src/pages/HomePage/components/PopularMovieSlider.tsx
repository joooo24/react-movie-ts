import React from "react";
import { usePopularMoviesQuery } from "../../../hooks/usePopularMovies";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";
import { Alert } from "react-bootstrap";
import { ClipLoader } from "react-spinners";

const PopularMovieSlider: React.FC = () => {
    const { data: PopularData, isLoading, isError, error } = usePopularMoviesQuery();

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
    
    return <MovieSlider data={PopularData} title={"Popular Movie⭐"}></MovieSlider>;
};

export default PopularMovieSlider;
