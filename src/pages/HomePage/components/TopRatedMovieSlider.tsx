import React from 'react'
import { useTopRatedMovieQuery } from "../../../hooks/useTopRatedMovie";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";
import { Alert } from "react-bootstrap";
import { ClipLoader } from "react-spinners";

const TopRatedMovieSlider: React.FC = () => {
    const { data: topRatedData, isLoading, isError, error } = useTopRatedMovieQuery();

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

    return <MovieSlider data={topRatedData} title={"TopRated Movie✨"}></MovieSlider>;
}

export default TopRatedMovieSlider