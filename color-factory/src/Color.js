import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";


function Color({ colors }) {
    const { name } = useParams();
    const currentColor = colors.find(
        color => color === name
    );

    let colorInfo = null;
    if (currentColor) {
        colorInfo = (


            <div style={{ backgroundColor: currentColor, height: "200px", width: "200px", }}>The color is {currentColor}!
                <p> <NavLink exact to="/colors">Go Back</NavLink></p>
            </div>


        )
    }


    return (
        <div>
            {colorInfo ? colorInfo : "We don't have that color yet"}

        </div>
    )
}

export default Color;