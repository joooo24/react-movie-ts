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
            {reviewData.map((review: any, idx: number) => (
                <li className="review-card" key={idx}>
                    <div className="review-contents">
                        <p className="review-author">{review?.author} 님</p>
                        <p className="review-content">{review?.content}</p>
                        <p className="review-created">{review?.created_at}</p>
                        <p className="review-url">{review?.url}</p>
                    </div>
                    <div className="btn-more"></div>
                </li>
            ))}
        </ul>
    )
}

export default ReviewContent