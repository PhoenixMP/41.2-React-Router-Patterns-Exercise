import React, { useState } from "react";
import { Route, Navigate, Routes } from "react-router-dom";

import Color from "./Color.js";
import ColorNav from "./ColorNav.js";
import NewColorForm from "./NewColorForm.js";



function MyRoutes() {

    const [colors, setColors] = useState(['red'])


    function handleAdd(newColor) {
        setColors(prevColors => ([...prevColors, newColor]));
    }


    return (
        <div>
            <Routes>
                <Route exact path="/colors/new" element={<NewColorForm addColor={handleAdd} colors={colors} />} />

                <Route exact path="/colors/:name" element={<Color colors={colors} />} />

                <Route exact path="/colors" element={<ColorNav colors={colors} />} />
                {/* 
                <Route path="*" element={<Navigate replace to="/colors" />} /> */}
            </Routes>


        </div>
    );
}

export default MyRoutes