import React from "react";
import { usePopularMoviesQuery } from "../../../hooks/usePopularMovies";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";
import { Alert } from "react-bootstrap";

const PopularMovieSlider: React.FC = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();

    if (isLoading) {
        return <div>로딩 중...</div>;
    }

    if (isError) {
        return <Alert variant="danger">{error.message}</Alert>;
    }
    return <MovieSlider  data={data} title={"Popular Movie"}></MovieSlider>;
};

export default PopularMovieSlider;
