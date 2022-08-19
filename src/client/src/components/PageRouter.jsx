import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Switch from "./Switch";
import Speed from "./Speed";

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/switch" element={<Switch />} />
            <Route path="/speed" element={<Speed />} />
        </Routes>
    );
};
