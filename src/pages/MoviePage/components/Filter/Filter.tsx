// Filter 컴포넌트
import React from "react";
import "./Filter.scss";
import { useMoviesGenreQuery } from "../../../../hooks/useMovieGenre";
import { Alert } from "react-bootstrap";
import { ClipLoader } from "react-spinners";

interface FilterProps {
    selectedGenre: string;
    selectedSort: string;
    onSortChange: (selectedSort: string) => void;
    onGenreChange: (selectedGenre: string) => void;
}

const Filter: React.FC<FilterProps> = ({ selectedGenre, selectedSort, onSortChange, onGenreChange }) => {
    const { data: genreData, isLoading, isError, error } = useMoviesGenreQuery();

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSort = e.target.value;
        onSortChange(selectedSort);
    };

    const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedGenre = e.target.value;
        onGenreChange(selectedGenre);
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
        <div className="filter-wrap">
            <select className="filter-popular" value={selectedSort} onChange={handleSortChange}>
                <option value="desc">높은순</option>
                <option value="asc">낮은순</option>
            </select>
            <select className="filter-genre" value={selectedGenre} onChange={handleGenreChange}>
                {genreData?.map((genre: any, idx: number) => (
                    <option value={genre.name} key={genre.id}>
                        {genre.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Filter;
