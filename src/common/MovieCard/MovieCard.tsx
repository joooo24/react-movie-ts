// MovieCard.tsx
import React from "react";
import "./MovieCard.scss";

// interface Genre {
//     id: number;
//     name: string;
// }

interface Movie {
    poster_path: string | null;
    title: string;
    genre_ids: number[];
    vote_average: number;
    popularity: number;
    adult: boolean;
}

interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const getBackgroundImageUrl = (posterPath: string | null) => {
        return posterPath ? `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${posterPath}` : "";
    };

    // 장르 맵핑
    // const genres: Genre[] = [
    //     { id: 28, name: "액션" },
    //     { id: 12, name: "모험" },
    // ];

    // const getGenreName = (genreId: number): string => {
    //     const foundGenre = genres.find((genre) => genre.id === genreId);
    //     return foundGenre ? foundGenre.name : "";
    // };

    return (
        <div
            className="movie-card"
            style={{
                backgroundImage: `url(${getBackgroundImageUrl(movie.poster_path)})`,
            }}
        >
            <div className="overlay">
                <h1>{movie.title}</h1>
                <ul className="badge-wrap">
                    {movie.genre_ids.map((genreId: number, idx: number) => (
                        // <li key={idx}>{getGenreName(genreId)}</li>
                        <li key={idx}>{genreId}</li>
                    ))}
                </ul>
                <div className="title">{movie.title}</div>
                <ul className="tag-wrap">
                    <li>
                        <i></i>
                        {movie.vote_average}점
                    </li>
                    <li>
                        <i></i>
                        {movie.popularity}
                    </li>
                    <li>{movie.adult ? <div className="adult">18</div> : <div className="all">ALL</div>}</li>
                </ul>
            </div>
        </div>
    );
};

export default MovieCard;
