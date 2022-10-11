import Navtabs from '../../components/Navtabs';
import "./Dashboard.css";
import Carousel from './Carousel';
import React, { Component } from "react";

const Dashboard = () => {
    return (
        <>
            <div className="page-wrapper">
                <Carousel />
                <Navtabs />
            </div>
        </>
    );
}

export default Dashboard;