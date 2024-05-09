import React, { useState, useEffect } from "react";
import "./MoviePage.scss";
import MovieCard from './../../common/MovieCard/MovieCard'
import Filter from './components/Filter/Filter'
import { Alert } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { usePopularMoviesQuery } from '../../hooks/usePopularMovies';

const MoviePage: React.FC = () => {
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedSort, setSelectedSort] = useState('desc');
    const [filteredData, setFilteredData] = useState<any[]>([]);

    const { data: PopularData, isLoading, isError, error } = usePopularMoviesQuery();

    useEffect(() => {
        if (PopularData) {
            // 선택된 장르에 해당하는 데이터만 필터링
            let filteredResults = PopularData.results.filter((movie: any) => {
                // 선택된 장르가 없으면 모든 데이터를 반환
                if (!selectedGenre) return true;
                // 선택된 장르에 해당하는 데이터만 반환
                return movie.genre === selectedGenre;
            });

            // 선택된 정렬 방식에 따라 결과 배열을 정렬
            if (selectedSort === 'asc') {
                filteredResults.sort((a: any, b: any) => a.title.localeCompare(b.title));
            } else {
                filteredResults.sort((a: any, b: any) => b.title.localeCompare(a.title));
            }

            // 필터링된 데이터를 상태에 설정
            setFilteredData(filteredResults);
        }
    }, [PopularData, selectedGenre, selectedSort]);

    const handleSortChange = (selectedSort: string) => {
        setSelectedSort(selectedSort);
    };

    const handleGenreChange = (selectedGenre: string) => {
        setSelectedGenre(selectedGenre);
    };

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
                    총: {filteredData.length}개
                </div>
                <Filter
                    selectedSort={selectedSort}
                    selectedGenre={selectedGenre}
                    onSortChange={handleSortChange}
                    onGenreChange={handleGenreChange}
                />
            </div>
            <ul className="movie-list-container">
                {filteredData.length > 0 ? (
                    filteredData.map((movie: any, index: number) => (
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
