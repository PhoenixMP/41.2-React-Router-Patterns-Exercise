import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";

import Dog from "./Dog.js"
import Home from "./Home.js";

function MyRoutes({ dogs }) {
    return (
        <div>
            <Routes>
                <Route exact path="/dogs/:name" element={<Dog dogs={dogs} />} />
                <Route exact path="/dogs" element={<Home />} />
                <Route path="*" element={<Navigate replace to="/dogs" />} />
            </Routes>


        </div>
    );
}

export default MyRoutes