import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import Bracker from "../components/Bracker";
import Dashboard from "../screens/Dashboard/Dashboard";
import Navbars from "../components/Navbars";
import Error from '../components/Error'
import DepositMain from "../screens/Deposit/DepositMain";
import Header from "../components/Layout/Header/Header";
import Bracker from "../screens/Bracker/Bracker";
import Gamerunning from "../screens/GameRunning/Gamerunning";

const AppMain = () => {
    return (
        <>
            <Suspense fallback={<span>loading</span>}>
                {/* <Navbars /> */}
                <Header />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/Bracker" element={< Bracker />} />
                    <Route path="/Brickgame" element={<Gamerunning />} />
                    <Route path="/deposit" element={<DepositMain />} />
                    <Route path="*" element={< Error />} />
                </Routes>
            </Suspense>
        </>
    );
};

export default AppMain;
