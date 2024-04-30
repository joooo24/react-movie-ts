import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./MovieSlider.scss";
// import { responsive } from "../constants/responsive";

interface MovieSliderProps {
    data: { results: any[] };
    title: string;
}

// ResponsiveType 정의
interface ResponsiveType {
    [key: string]: {
        breakpoint: { max: number; min: number };
        items: number;
    };
}

const MovieSlider: React.FC<MovieSliderProps> = ({ data, title }) => {

    const responsive: ResponsiveType = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div className="movie-slider-container">
            <h3 className="">타이틀</h3>
            <Carousel
                infinite={true}
                centerMode={true}
                itemClass="movie-slider p-1"
                containerClass="carousel-container"
                responsive={responsive}
            >
                {data?.results.map((movie: any, index: number) => (
                    <MovieCard key={movie.id} movie={movie}></MovieCard>
                ))}
            </Carousel>
        </div>
    );
};

export default MovieSlider;
