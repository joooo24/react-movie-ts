import React from "react";
import { usePopularMoviesQuery } from "../../../hooks/usePopularMovies";
import { Alert } from "react-bootstrap";

const HomePageBanner: React.FC = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();

    console.log("### homepage-banner usePopularMoviesQuery data", data)

    // 로딩 상태
    if (isLoading) {
        return <div>로딩 중...</div>;
    }

    // 에러 상태
    if (isError) {
        return <Alert variant="danger">{error?.message}</Alert>;
    }

    // 홈페이지 배너 이미지 URL 정의
    const backgroundImageUrl = data?.results[0]?.poster_path
        ? `https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data.results[0].poster_path}`
        : "";

    return (
        <div
            className="homepage-banner"
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
            }}
        >
            <div className="homepage-banner-txt">
                <h2>{data?.results[0]?.title}</h2>
                <p>{data?.results[0]?.overview}</p>
            </div>
        </div>
    );
};

export default HomePageBanner;
