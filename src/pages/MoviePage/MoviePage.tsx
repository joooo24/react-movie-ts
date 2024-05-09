import React, { useState } from 'react'
import MovieCard from './../../common/MovieCard/MovieCard'
import Filter from './components/Filter/Filter'
import { Alert } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { usePopularMoviesQuery } from '../../hooks/usePopularMovies';
import "./MoviePage.scss";


const MoviePage: React.FC = () => {
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedSort, setSelectedSort] = useState('desc');

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

    return (
        <section className="movie-page">
            <div className="filter-container">
                <div className="filter-total">
                    총: {PopularData?.results.total_results}개
                </div>
                <Filter selectedSort={selectedSort} selectedGenre={selectedGenre} />
            </div>
            <ul className="movie-list-container">
                {PopularData?.results.length > 0 ? (
                    PopularData?.results.map((movie: any, index: number) => (
                        <li key={index}>
                            <MovieCard movie={movie} />
                        </li>
                    ))
                ) : (
                    <div className="no-content">해당하는 영화가 없습니다.</div>
                )}
            </ul>
        </section>
    )
}

export default MoviePage