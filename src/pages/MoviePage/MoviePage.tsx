// MoviePage 컴포넌트
import React, { useState } from "react";
import "./MoviePage.scss";
import MovieCard from './../../common/MovieCard/MovieCard'
import Filter from './components/Filter/Filter'
import { Alert } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { usePopularMoviesQuery } from '../../hooks/usePopularMovies';

const MoviePage: React.FC = () => {
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedSort, setSelectedSort] = useState('desc');

    const { data: PopularData, isLoading, isError, error, refetch } = usePopularMoviesQuery();

    const handleSortChange = (selectedSort: string) => {
        setSelectedSort(selectedSort);
        refetch(); // 정렬이 변경되면 새로운 데이터 가져오기
    };

    const handleGenreChange = (selectedGenre: string) => {
        setSelectedGenre(selectedGenre);
        refetch(); // 장르가 변경되면 새로운 데이터 가져오기
    };

    // 1. 정렬된 데이터를 렌더링하기 위해 PopularData.results를 복사하여 정렬
    const sortedResults = [...PopularData?.results];
    // 2. 선택된 정렬 방식에 따라 결과 배열을 정렬
    if (selectedSort === 'asc') {
        sortedResults.sort((a, b) => a.title.localeCompare(b.title));
    } else {
        sortedResults.sort((a, b) => b.title.localeCompare(a.title));
    }

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
                <Filter
                    selectedSort={selectedSort}
                    selectedGenre={selectedGenre}
                    onSortChange={handleSortChange}
                    onGenreChange={handleGenreChange}
                />
            </div>
            <ul className="movie-list-container">
                {sortedResults.length > 0 ? (
                    sortedResults.map((movie: any, index: number) => (
                        <li key={index}>
                            <MovieCard movie={movie} />
                        </li>
                    ))
                ) : (
                    <div className="no-content">해당하는 영화가 없습니다.</div>
                )}
            </ul>
        </section>
    );
};

export default MoviePage;
