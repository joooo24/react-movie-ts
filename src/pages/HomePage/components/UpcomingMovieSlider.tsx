import React from 'react'
import { useUpcomingMovieQuery } from "../../../hooks/useUpcomingMovie";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";
import { Alert } from "react-bootstrap";
import { ClipLoader } from "react-spinners";

const UpcomingMovieSlider: React.FC = () => {
    const { data: upcomingData, isLoading, isError, error } = useUpcomingMovieQuery();

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
    
    return <MovieSlider data={upcomingData} title={"Upcoming Movie🌈"} />;
}

export default UpcomingMovieSlider