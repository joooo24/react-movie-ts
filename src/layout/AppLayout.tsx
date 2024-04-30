import React from "react";
// import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./AppLayout.style.scss";
import { Outlet } from "react-router-dom";


type Props = {}

const AppLayout = (props: Props) => {

    return (
        <>
            <Navbar expand="lg" className="header">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img
                            src="https://image.tving.com/ntgs/operation/logo/2023/09/18/1695032536_1.svg"
                            alt="tving-logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/movies">Movies</Nav.Link>
                        </Nav>
                        {/* 검색 폼 */}
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
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
        </>
    )
}

export default AppLayout