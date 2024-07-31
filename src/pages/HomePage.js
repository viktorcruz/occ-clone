import React from "react";
import Header from "../components/header/Header";
import Main from "../components/home/Main";
import Footer from "../components/common/Footer";

const HomePage = () => {
    return (
        <div className="home">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default HomePage