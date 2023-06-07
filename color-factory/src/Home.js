import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <div>
            <div>Welcome to the color factory.</div>
            <NavLink exact to="/colors">View Colors</NavLink>
            <NavLink exact to="/colors/new">Add a Color</NavLink>
        </div>
    );
}

export default Home;