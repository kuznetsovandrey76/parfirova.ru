import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Header";

function Wrapper(props) {
    const { children } = props;
    return (
        <Container fluid>
            <Header />
            <Container>{children}</Container>
        </Container>
    )
}

export default Wrapper;
