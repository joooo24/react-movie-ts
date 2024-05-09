import React from 'react'
import Modal from "react-bootstrap/Modal";
import YouTube, { YouTubeProps } from "react-youtube";
import { Alert } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { useMovieTrailerQuery } from './../../hooks/useMovieTrailer';
import "./MovieModal.scss";

interface MovieModalProps {
    modalData: {
        id: string;
        showModal: boolean;
        closeModal: any;
    };
}

const MovieModal: React.FC<MovieModalProps> = ({ modalData }) => {
    const { id, showModal, closeModal } = modalData;

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

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    // YouTube 플레이어의 옵션 설정
    const opts: YouTubeProps['opts'] = {
        width: "100%",
        height: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return (
        <>
            {showModal && (
                <div className="modal"
                    style={{ display: showModal ? "block" : "none" }}
                    onClick={closeModal}
                >
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                {TrailerData.length > 0
                                    ? TrailerData[0].name
                                    : "해당 영화는 준비된 영상이 없습니다."}

                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <YouTube videoId={id} opts={opts} onReady={onPlayerReady} />
                        </Modal.Body>
                    </Modal.Dialog>
                </div>
            )}
        </>
    );
}


export default MovieModal