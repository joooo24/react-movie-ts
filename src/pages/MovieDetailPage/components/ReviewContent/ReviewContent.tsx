import React, { useState } from "react";
import "./ReviewContent.scss";
import { useMovieReviewQuery } from "../../../../hooks/useMovieReview";
import { Alert } from "react-bootstrap";
import { ClipLoader } from "react-spinners";

interface ReviewContentProps {
    id: string;
}

const ReviewContent: React.FC<ReviewContentProps> = ({ id }) => {

    const { data: reviewData, isLoading, isError, error } = useMovieReviewQuery({ id });
    console.log("reviewData", reviewData);

    // 날짜 포맷팅
    function formatDate(isoDateString: string): string {
        const date = new Date(isoDateString);

        // 연, 월, 일 추출
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // getMonth는 0부터 시작하므로 1을 더해줌
        const day = date.getDate();

        // 시, 분 추출
        const hours = date.getHours();
        const minutes = date.getMinutes();

        // 오후인지 오전인지 판별
        const period = hours < 12 ? "오전" : "오후";

        // 시간 조정 (12시간제로 변환)
        const adjustedHours = hours % 12 || 12;

        // 결과 문자열 생성
        return `${year}년 ${month}월 ${day}일 ${period} ${adjustedHours}시 ${minutes}분`;
    }


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
        <ul className="review-card-container">
            {reviewData ? (reviewData.map((review: any, idx: number) => (
                <li className="review-card" key={idx}>
                    <div className="review-contents">
                        <p className="review-author">{review?.author} 님</p>
                        <p className="review-content">{review?.content}</p>
                        <p className="review-created">{formatDate(review?.created_at)}</p>
                        <p className="review-url">{review?.url}</p>
                    </div>
                    <div className="btn-more"></div>
                </li>
            ))) : (
                <li className="review-card">
                    <div className="review-contents">
                        <p className="error-message">리뷰 데이터를 불러올 수 없습니다.</p>
                    </div>
                </li>
            )}
        </ul>
    )
}

export default ReviewContent
