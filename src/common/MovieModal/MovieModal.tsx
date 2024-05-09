import React from 'react'
import Modal from "react-bootstrap/Modal";
import YouTube from "react-youtube";
import { Alert } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { useMovieTrailerQuery } from './../../hooks/useMovieTrailer';
import "./MovieModal.scss";

interface MovieModalProps {
    id: string;
}

const MovieModal: React.FC<MovieModalProps> = ({ id }) => {
    // const { closeModal, id, showModal } = modalData;

    const { data: TrailerData, isLoading, isError, error } = useMovieTrailerQuery({ id });
    console.log("### TrailerData", TrailerData);

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

    // YouTube 플레이어의 옵션 설정
    // const opts = {
    //     height: "100%",
    //     width: "100%",
    //     playerVars: {
    //         autoplay: 1,
    //     },
    // };

    return (
        <Modal show={true} onHide={() => { }}>
            <Modal.Header closeButton>
                <Modal.Title>YouTube Video</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* YouTube 컴포넌트를 통해 동영상을 렌더링 */}
                {/* <YouTube videoId={id} opts={opts} /> */}
            </Modal.Body>
        </Modal>
    );
}


export default MovieModal