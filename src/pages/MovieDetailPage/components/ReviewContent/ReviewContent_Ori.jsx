// import React, { useState } from "react";
// import "./ReviewContent.scss";
// import { useMovieReviewQuery } from "../../../../hooks/useMovieReviewQuery";

// const ReviewContent = ({ id }) => {
//     const { data, isLoading, isError } = useMovieReviewQuery(id);
//     console.log("review data", data);

//     const [activeReviews, setActiveReviews] = useState(
//         Array(data?.length).fill(false)
//     );

//     const [moreTexts, setMoreTexts] = useState(
//         Array(data?.length).fill("more")
//     );

//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     if (isError) {
//         return <div>Error fetching data...</div>;
//     }

//     // 리뷰 토글
//     const toggleActive = (index) => {
//         setActiveReviews((prevActiveReviews) => {
//             const newActiveReviews = [...prevActiveReviews];
//             newActiveReviews[index] = !newActiveReviews[index];
//             return newActiveReviews;
//         });

//         setMoreTexts((prevMoreTexts) => {
//             const newMoreTexts = [...prevMoreTexts];
//             newMoreTexts[index] = activeReviews[index] ? "more" : "less";
//             return newMoreTexts;
//         });
//     };

//     return (
//         <ul className="review-card-container">
//             {data.map((review, idx) => (
//                 <li className="review-card" key={idx}>
//                     <div
//                         className={`review-contents ${
//                             activeReviews[idx] ? "active" : ""
//                         }`}
//                         key={idx}
//                     >
//                         <p>{review?.author}</p>
//                         <p>{review?.content}</p>
//                         <p>{review?.created_at}</p>
//                         <p>{review?.url}</p>
//                     </div>
//                     <div className="btn-more" onClick={() => toggleActive(idx)}>
//                         {moreTexts[idx]}
//                     </div>
//                 </li>
//             ))}
//         </ul>
//     );
// };

// export default ReviewContent;
