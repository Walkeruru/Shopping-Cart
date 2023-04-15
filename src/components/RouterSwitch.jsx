import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from '../App';
import Shop from "./Shop";
import StoreNavbar from "./Navbar";

const RouterSwitch = () => {

    return(
        <>
            <BrowserRouter>
                <StoreNavbar></StoreNavbar>
                <Routes>
                    <Route path="/" element={<App/>}></Route>
                    <Route path="/shop" element={<Shop/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouterSwitch;