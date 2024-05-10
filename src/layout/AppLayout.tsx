import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./AppLayout.style.scss";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer/Footer";

const AppLayout: React.FC = () => {
    const navigate = useNavigate();

    const [keyword, setKeyword] = useState("");
    console.log("keyword", keyword)

    const searchByKeyword = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // 검색어(keyword)를 포함한 URL로 페이지 이동
        navigate(`/movies?q=${keyword}`);
        setKeyword("");
    }

    return (
        <>
            <Navbar expand="lg" className="header">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img
                            src="/JVING_logo.png"
                            alt="jving-logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/movies">Movies</Nav.Link>
                        </Nav>
                        {/* 검색 폼 */}
                        <Form className="d-flex" onSubmit={searchByKeyword}>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                value={keyword}
                                onChange={(event) => {
                                    setKeyword(event.target.value)
                                }}
                            />
                            {/* 검색 버튼 */}
                            <Button variant="outline-success" type="submit">
                                Search
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
            <Footer />
        </>
    )
}

export default AppLayout