import React from "react";
import axios from 'axios'

function HomePage() {
    const handleEvent = () => {
        axios.get("/api/home").then((result) => {
            console.log(result);
        });
    }

    return (
        <>
            <div>Home, World!!</div>
            <h2 onClick={handleEvent}>Home</h2>
        </>
    )
}

export default HomePage;
