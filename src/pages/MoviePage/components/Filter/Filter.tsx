import React, { useState } from "react";
import "./Filter.scss";
import { useMoviesGenreQuery } from "../../../../hooks/useMovieGenre";
import { Alert } from "react-bootstrap";
import { ClipLoader } from "react-spinners";

interface FilterProps {
    selectedGenre: string;
    selectedSort: string;
}

const Filter: React.FC<FilterProps> = ({ selectedGenre, selectedSort }) => {
    const { data: genreData, isLoading, isError, error } = useMoviesGenreQuery();

    const [sort, setSort] = useState(selectedSort)
    const [genre, setGenre] = useState(selectedGenre)

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

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSort = e.target.value;
        setSort(selectedSort);
    };

    const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedGenre = e.target.value;
        setGenre(selectedGenre);
    };


    return (
        <div className="filter-wrap">

            <select className="filter-popular" value={sort} onChange={handleSortChange}>
                <option value="desc">높은순</option>
                <option value="asc">낮은순</option>
            </select>
            <select className="filter-genre" value={genre} onChange={handleGenreChange}>
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
