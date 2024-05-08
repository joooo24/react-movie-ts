import React from 'react'
import Modal from "react-bootstrap/Modal";
import YouTube from "react-youtube";
import { Alert } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import "./MovieModal.scss";

interface MovieModalProps {
    id: string;
}

const MovieModal: React.FC<MovieModalProps> = ({ id }) => {
    console.log("id", id)
    return (
        <div>MovieModal</div>
    )
}

export default MovieModal