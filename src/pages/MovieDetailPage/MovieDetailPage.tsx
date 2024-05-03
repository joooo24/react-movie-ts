import React, { useState } from "react";
import "./MovieDetailPage.scss";
import { useParams } from "react-router-dom";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import { Alert } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { FaStar } from "react-icons/fa";

// import ReviewContent from "./components/ReviewContent/ReviewContent";
// import RecommendMovie from "./components/RecommendMovie/RecommendMovie";
// import { MovieModal } from "../../common/MovieModal/MovieModal";

const MovieDetailPage: React.FC = () => {

    const params = useParams();
    const keyword = params.id ?? "";

    const { data: detailData, isLoading, isError, error } = useMovieDetailQuery(keyword);
    console.log("### detailData", detailData)

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
        <section className="movie-detail-page">
            <article className="movie-information">
                <div className="poster">
                    {/* <img
                        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${data?.poster_path}`}
                        alt="poster"
                    /> */}
                </div>
                <div className="details">
                    <ul className="badge-wrap">
                        장르
                        {/* {data.genres.map((item, index) => (
                            <li key={index}>{item.name}</li>
                        ))} */}
                    </ul>
                    <div className="title">{detailData.title}</div>
                    <div className="title-sub">{detailData.tagline}</div>
                    <ul className="tag-wrap">
                        <li className="">
                            <i></i>
                            {detailData.vote_average}점
                        </li>
                        <li className="">
                            <FaStar/>
                            {detailData.popularity}
                        </li>
                        <li>
                            {detailData.adult ? (
                                <div className="adult">18</div>
                            ) : (
                                <div className="all">ALL</div>
                            )}
                        </li>
                    </ul>
                    <div className="summary">{detailData.overview}</div>
                    <ul className="bullet-wrap">
                        <li className="bullet">
                            <p>Budget</p>
                            <p>{detailData.budget}</p>
                        </li>
                        <li className="bullet">
                            <p>Revenue</p>
                            <p>{detailData.revenue}</p>
                        </li>
                        <li className="bullet">
                            <p>Release Date</p>
                            <p>{detailData.release_date}</p>
                        </li>
                        <li className="bullet">
                            <p>Run Time</p>
                            <p>{detailData.runtime}분</p>
                        </li>
                    </ul>

                    <button
                        className="btn-trailer"
                    >
                        Watch the trailer
                    </button>
                </div>
            </article>
            {/* 탭메뉴 */}
            {/* <ul className="tab-wrap">
                <li onClick={() => setActiveTab(0)}>Review</li>
                <li onClick={() => setActiveTab(1)}>Recommend</li>
            </ul> */}
            {/* {activeTab === 0 && <ReviewContent id={{ id }} />}
            {activeTab === 1 && <RecommendMovie id={{ id }} />} */}

            {/* 모달 */}
            {/* <MovieModal
                modalData={{
                    closeModal: closeModal,
                    id: id,
                    showModal: showModal,
                }}
            /> */}
        </section>
    )
}

export default MovieDetailPage