import React, { useState } from "react";
import "./MovieDetailPage.scss";
import { useParams } from "react-router-dom";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import { Alert } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { FaStar } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { HiHandThumbUp } from "react-icons/hi2";
import RecommendMovie from "./components/RecommendMovie/RecommendMovie";
import ReviewContent from "./components/ReviewContent/ReviewContent";
// import { MovieModal } from "../../common/MovieModal/MovieModal";

const MovieDetailPage: React.FC = () => {

    const params = useParams();
    const keyword = params.id ?? "";

    const { data: detailData, isLoading, isError, error } = useMovieDetailQuery(keyword);
    console.log("### detailData", detailData)

    // 탭 액티브
    const [activeTab, setActiveTab] = useState<number>(0);

    // 카드 이미지 URL 정의
    const posterPath = detailData?.poster_path
        ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detailData.poster_path}`
        : '';

    // 예산 단위 변경
    // 미국($)
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
    // 한국(원)
    // const formatter = new Intl.NumberFormat("ko-KR", {
    //     style: "currency",
    //     currency: "KRW",
    // });

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
                    <img
                        src={posterPath}
                        alt="poster"
                    />
                </div>
                <div className="details">
                    <ul className="badge-wrap">
                        {detailData.genres.map((item: { name: string }, index: number) => (
                            <li key={index}>{item.name}</li>
                        ))}
                    </ul>
                    <div className="title">{detailData.title}</div>
                    <div className="title-sub">{detailData.tagline}</div>
                    <ul className="tag-wrap">
                        <li>
                            <FaStar />
                            {detailData.vote_average}점
                        </li>
                        <li>
                            <HiHandThumbUp />
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
                            <p>{formatter.format(detailData.budget)}</p>
                        </li>
                        <li className="bullet">
                            <p>Revenue</p>
                            <p>{formatter.format(detailData.revenue)}</p>
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
                        Watch the trailer <ImYoutube />
                    </button>
                </div>
            </article>
            {/* 탭 메뉴 */}
            <ul className="tab-wrap">
                <li onClick={() => setActiveTab(0)} className={activeTab === 0 ? 'active' : ''} >Review</li>
                <li onClick={() => setActiveTab(1)} className={activeTab === 1 ? 'active' : ''} >Recommend</li>
            </ul>
            {activeTab === 0 && <ReviewContent id={keyword} />}
            {activeTab === 1 && <RecommendMovie id={keyword} />}

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