import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Header";
import Footer from "../Footer";

function Wrapper(props) {
    const { children } = props;
    return (
        <Container fluid>
            <Header />
            <Container>{children}</Container>
            <Footer />
        </Container>
    )
}

export default Wrapper;
