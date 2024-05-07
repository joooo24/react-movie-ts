import React, { useState } from "react";
import "./ReviewContent.scss";
// import { useMovieReviewQuery } from "../../../../hooks/useMovieReviewQuery";

const ReviewContent: React.FC = () => {
    return (
        <ul className="review-card-container">
            {/* {data.map((review, idx) => (
                <li className="review-card" key={idx}>
                    <div
                        className={`review-contents ${activeReviews[idx] ? "active" : ""
                            }`}
                        key={idx}
                    >
                        <p>{review?.author}</p>
                        <p>{review?.content}</p>
                        <p>{review?.created_at}</p>
                        <p>{review?.url}</p>
                    </div>
                    <div className="btn-more" onClick={() => toggleActive(idx)}>
                        {moreTexts[idx]}
                    </div>
                </li>
            ))} */}
        </ul>
    )
}

export default ReviewContent