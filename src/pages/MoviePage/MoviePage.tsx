import React, { useState, useEffect } from "react";
import "./MoviePage.scss";
import MovieCard from './../../common/MovieCard/MovieCard'
import Filter from './components/Filter/Filter'
import { Alert } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { usePopularMoviesQuery } from '../../hooks/usePopularMovies';
import { useSearchParams } from "react-router-dom";
import { useSearchKeywordQuery } from "../../hooks/useSearchKeyword";

const MoviePage: React.FC = () => {
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedSort, setSelectedSort] = useState('desc');
    const [filteredData, setFilteredData] = useState<any[]>([]);

    // 검색 결과 데이터 가져오기
    const [query, setQuery] = useSearchParams();
    const keyword = query.get("q") || "";

    const { data: searchResultData, isLoading: searchLoading, isError: searchError, error: searchErrorMessage } = useSearchKeywordQuery({
        keyword: keyword,
        page: 1,
    });
    console.log("searchResultData", searchResultData);


    // 인기 영화 데이터 가져오기
    const { data: popularData, isLoading: popularLoading, isError: popularError, error: popularErrorMessage } = usePopularMoviesQuery();

    // 첫 실행 시
    useEffect(() => {
        if (keyword) {
            setFilteredData(searchResultData?.results);
        }
        if (popularData) {
            setFilteredData(popularData ?? []);
        }
    }, [keyword, searchResultData, popularData]);

    // 검색 && 필터/소팅 시
    useEffect(() => {
        // 필터링된 결과를 저장할 변수
        let filteredResults = popularData?.results;

        // 선택된 장르에 해당하는 데이터만 필터링
        if (selectedGenre) {
            filteredResults = filteredResults.filter((movie: any) => {
                console.log("filteredResults selectedGenre 장르", selectedGenre)
                console.log("movie.genre_ids.includes(selectedGenre)", movie.genre_ids.includes(selectedGenre))
                return movie.genre_ids.includes(selectedGenre);
            });
            console.log("filteredResults", filteredResults)
        }

        // 선택된 정렬 방식에 따라 결과 배열을 정렬
        if (selectedSort === 'asc') {
            filteredResults.sort((a: any, b: any) => a.title.localeCompare(b.title));
        } else {
            filteredResults.sort((a: any, b: any) => b.title.localeCompare(a.title));
        }
        // 필터링된 데이터를 상태에 설정
        setFilteredData(filteredResults);

    }, [popularData, selectedGenre, selectedSort]);

    // useEffect(() => {
    //     // 쿼리 파라미터 변경 시 페이지를 1로 설정
    //     setQuery("page");
    // }, [setQuery]);

    useEffect(() => {
        // 페이지 로드 시 장르와 정렬 기준을 초기화
        setSelectedGenre('');
        setSelectedSort('desc');
    }, [keyword]);

    const handleSortChange = (selectedSort: string) => {
        setSelectedSort(selectedSort);
    };

    const handleGenreChange = (selectedGenre: string) => {
        setSelectedGenre(selectedGenre);
    };

    if (popularLoading || searchLoading) {
        return (
            <div className="loading-container">
                <ClipLoader color="#f86c6b" size={200} loading={popularLoading || searchLoading} />
            </div>
        );
    }

    if (popularError || searchError) {
        return <Alert variant="danger">{popularErrorMessage || searchErrorMessage ? "인기 영화가 없습니다" : "검색하신 영화가 없습니다"}</Alert>;
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
                    <React.Fragment>
                        <div className="no-content">해당하는 영화가 없습니다.</div>
                    </React.Fragment>
                )}
            </ul>
        </section>
    );
};

export default MoviePage;
