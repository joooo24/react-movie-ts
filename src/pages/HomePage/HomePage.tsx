import React from "react";
import HomePageBanner from "./components/HomePageBanner";
import PopularMovieSlider from "./components/PopularMovieSlider";
import TopRatedMovieSlider from "./components/TopRatedMovieSlider";
import UpcomingMovieSlider from "./components/UpcomingMovieSlider";
import "./HomePage.scss";


type Props = {}

const HomePage = (props: Props) => {
    return (
        <div className="homepage">
            <HomePageBanner></HomePageBanner>
            <PopularMovieSlider></PopularMovieSlider>
            <TopRatedMovieSlider></TopRatedMovieSlider>
            <UpcomingMovieSlider></UpcomingMovieSlider>
        </div>
    )
}

export default HomePage