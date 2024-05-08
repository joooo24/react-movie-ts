// import React, { useState } from "react";
// import Modal from "react-bootstrap/Modal";
// import YouTube from "react-youtube";
// import { useMovieTrailerQuery } from "../../hooks/useMovieTrailerQuery";
// import { Alert } from "react-bootstrap";
// import "./MovieModal.scss";

// export const MovieModal = ({ modalData }) => {
//     const { closeModal, id, showModal } = modalData;

//     const { data, isLoading, isError } = useMovieTrailerQuery({ id });

//     console.log("useMovieTrailerQuery data", data);

//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     if (isError) {
//         return <div>Movie Modal Error fetching data...</div>;
//     }

//     // 유튜브 옵션
//     const opts = {
//         height: "100%",
//         width: "100%",
//         playerVars: {
//             // https://developers.google.com/youtube/player_parameters
//             autoplay: 1,
//         },
//     };
//     return (
//         <>
//             {showModal && (
//                 <div
//                     className="modal"
//                     style={{ display: showModal ? "block" : "none" }}
//                 >
//                     <Modal.Dialog>
//                         <Modal.Header onClick={closeModal} closeButton>
//                             <Modal.Title>
//                                 {data.length > 0
//                                     ? data[0].name
//                                     : "준비된 영상이 없습니다."}
//                             </Modal.Title>
//                         </Modal.Header>
//                         <Modal.Body>
//                             {data.length > 0 ? (
//                                 <YouTube
//                                     videoId={data[0].key}
//                                     style={{ height: "100%" }}
//                                     opts={opts}
//                                     className="youtube-frame"
//                                 />
//                             ) : (
//                                 <div>준비된 영상이 없습니다.</div>
//                             )}
//                         </Modal.Body>
//                     </Modal.Dialog>
//                 </div>
//             )}
//         </>
//     );
// };
