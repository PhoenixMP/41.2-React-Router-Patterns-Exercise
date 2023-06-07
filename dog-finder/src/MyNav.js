import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ dogs }) {
    return (
        <div className="MyNavBarClass">
            <p> <NavLink exact to="/dogs">home</NavLink></p>
            {dogs.map((dog, i) => (
                <p> <NavLink key={i} exact to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</NavLink></p>
            ))}
        </div>
    );
}
export default Nav
