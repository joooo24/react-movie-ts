import React, { useState, useEffect, useCallback } from "react";
import { Alert } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import MovieCard from './../../common/MovieCard/MovieCard';
import Filter from './components/Filter/Filter';
import { usePopularMoviesQuery } from '../../hooks/usePopularMovies';
import { useSearchParams } from "react-router-dom";
import { useSearchKeywordQuery } from "../../hooks/useSearchKeyword";
import ReactPaginate from "react-paginate";
import "./MoviePage.scss";

const MoviePage: React.FC = () => {
    // 상태 설정
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedSort, setSelectedSort] = useState('desc');
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const [searchData, setSearchData] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    // 검색 결과 데이터 가져오기
    // eslint-disable-next-line
    const [query, setQuery] = useSearchParams();
    const keyword = query.get("q") || "";

    // 검색 결과 및 인기 영화 데이터 가져오기
    const { data: searchResultData, isLoading: searchLoading, isError: searchError, error: searchErrorMessage } = useSearchKeywordQuery({ keyword: keyword, page: page });
    const { data: popularData, isLoading: popularLoading, isError: popularError, error: popularErrorMessage } = usePopularMoviesQuery();

    // 장르 변경에 대한 filterData 업데이트
    const filterGenre = useCallback((data: any[]) => {
        const filterData = data.filter((movie: any) => {
            if (!selectedGenre) return true; // 선택된 장르가 없는 경우 모든 영화를 보여줍니다.
            return movie.genre_ids.includes(selectedGenre);
        });
        setFilteredData(filterData);
    }, [selectedGenre]);

    // 정렬 변경에 대한 filterData 업데이트
    const sortData = useCallback((data: any[]) => {
        const sortedData = [...data].sort((a: any, b: any) => {
            if (selectedSort === 'asc') {
                return a.title.localeCompare(b.title);
            } else {
                return b.title.localeCompare(a.title);
            }
        });
        setFilteredData(sortedData);
    }, [selectedSort]);

    // 검색 결과 및 인기 영화 데이터가 변경될 때마다 실행
    useEffect(() => {
        // 검색 결과가 있는 경우 해당 결과를 표시, 없는 경우 인기 영화 표시
        if (keyword && searchResultData) {
            setSearchData(searchResultData.results);
            setTotalPages(searchResultData.total_pages);
            sortData(searchResultData.results);
        } else if (popularData) {
            setSearchData(popularData.results ?? []);
            setTotalPages(popularData.total_pages);
            sortData(popularData.results ?? []);
        }
    }, [keyword, searchResultData, popularData, sortData]);

    // 장르 변경에 대한 useEffect
    useEffect(() => {
        filterGenre(searchData);
    }, [selectedGenre, searchData, filterGenre]);

    // 정렬 변경에 대한 useEffect
    useEffect(() => {
        sortData(filteredData);
    }, [selectedSort, filteredData, sortData]);

    // 페이지 로드 시 장르와 정렬 기준을 초기화하는 useEffect
    useEffect(() => {
        setSelectedGenre('');
        setSelectedSort('desc');
    }, [keyword]);

    // 페이지 변경 핸들러
    const handlePageChange = ({ selected }: { selected: number }) => {
        setPage(selected + 1);
    };

    // 정렬 방식 변경 핸들러
    const handleSortChange = (selectedSort: string) => {
        setSelectedSort(selectedSort);
    };

    // 장르 변경 핸들러
    const handleGenreChange = (selectedGenre: string) => {
        setSelectedGenre(selectedGenre);
    };

    // 로딩 중인 경우 로딩 스피너 표시
    if (popularLoading || searchLoading) {
        return (
            <div className="loading-container">
                <ClipLoader color="#f86c6b" size={200} loading={popularLoading || searchLoading} />
            </div>
        );
    }

    // 오류가 있는 경우 오류 알림 표시
    if (popularError || searchError) {
        return <Alert variant="danger">{popularErrorMessage || searchErrorMessage ? popularErrorMessage?.message : ""}</Alert>;
    }

    return (
        <section className="movie-page">
            <div className="filter-container">
                <div className="filter-total">
                    총: {filteredData?.length}개
                </div>
                <Filter
                    selectedSort={selectedSort}
                    selectedGenre={selectedGenre}
                    onSortChange={handleSortChange}
                    onGenreChange={handleGenreChange}
                />
            </div>
            <ul className="movie-list-container">
                {filteredData?.length > 0 ? (
                    filteredData?.map((movie: any, index: number) => (
                        <li key={index} className="movie-list-item">
                            <MovieCard movie={movie} />
                        </li>
                    ))
                ) : (
                    <React.Fragment>
                        <div className="no-content">검색하신 영화가 없습니다.</div>
                    </React.Fragment>
                )}
            </ul>
            <ReactPaginate
                nextLabel=">"
                onPageChange={handlePageChange}
                pageRangeDisplayed={5}
                marginPagesDisplayed={1}
                pageCount={Math.min(totalPages, 200)}
                previousLabel="<"
                pageClassName="r-page-item"
                pageLinkClassName="r-page-link"
                previousClassName="r-page-item"
                previousLinkClassName="r-page-link"
                nextClassName="r-page-item"
                nextLinkClassName="r-page-link"
                breakLabel="..."
                breakClassName="r-page-item"
                breakLinkClassName="r-page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
                forcePage={page - 1}
            />
        </section>
    );
};

export default MoviePage;
