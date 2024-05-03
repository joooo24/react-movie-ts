import React, { useState } from "react";
import "./MovieDetailPage.scss";
import { useParams } from "react-router-dom";
import { useMovieDetailQuery } from "../../hooks/useMovieDetailQuery"; // assuming useMovieDetailQuery returns MovieDetailData type
// import ReviewContent from "./components/ReviewContent/ReviewContent";
// import RecommendMovie from "./components/RecommendMovie/RecommendMovie";
// import { MovieModal } from "../../common/MovieModal/MovieModal";

const MovieDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Specify useParams type
    const { data, isLoading, isError } = useMovieDetailQuery(id);

    console.log("### detail data", data);

    // 예산 단위 변경
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    // 탭 인덱스 상태 값
    const [activeTab, setActiveTab] = useState<number>(0);

    // 모달 상태 값
    const [showModal, setShowModal] = useState<boolean>(false);
    const closeModal = () => setShowModal(false);

    // 정렬 상태 값
    const [sort, setSort] = useState<string>("");
    const [genre, setGenre] = useState<string | null>(null);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching data...</div>;
    }

    return (
        <section className="movie-detail-page">
            {/* <article className="movie-information">
                <div className="poster">
                    <img
                        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${data?.poster_path}`}
                        alt="poster"
                    />
                </div>
                <div className="details">
                    <ul className="badge-wrap">
                        {data.genres.map((item: { name: string }, index: number) => (
                            <li key={index}>{item.name}</li>
                        ))}
                    </ul>
                    <div className="title">{data?.title}</div>
                    <div className="title-sub">{data?.tagline}</div>
                    <ul className="tag-wrap">
                        <li className="">
                            <i></i>
                            {data?.vote_average}점
                        </li>
                        <li className="">
                            <i></i>
                            {data?.popularity}
                        </li>
                        <li>
                            {data.adult ? (
                                <div className="adult">18</div>
                            ) : (
                                <div className="all">ALL</div>
                            )}
                        </li>
                    </ul>
                    <div className="summary">{data?.overview}</div>
                    <ul className="bullet-wrap">
                        <li className="bullet">
                            <p>Budget</p>
                            <p>{formatter.format(data?.budget)}</p>
                        </li>
                        <li className="bullet">
                            <p>Revenue</p>
                            <p>{formatter.format(data?.revenue)}</p>
                        </li>
                        <li className="bullet">
                            <p>Release Date</p>
                            <p>{data?.release_date}</p>
                        </li>
                        <li className="bullet">
                            <p>Run Time</p>
                            <p>{data?.runtime}분</p>
                        </li>
                    </ul>

                    <button
                        className="btn-trailer"
                        onClick={() => setShowModal(true)}
                    >
                        Watch the trailer
                    </button>
                </div>
            </article>
            <ul className="tab-wrap">
                <li onClick={() => setActiveTab(0)}>Review</li>
                <li onClick={() => setActiveTab(1)}>Recommend</li>
            </ul>
            {activeTab === 0 && <ReviewContent id={{ id }} />}
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
    );
};

export default MovieDetailPage;
