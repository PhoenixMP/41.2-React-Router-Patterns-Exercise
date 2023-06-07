import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import duke from './photos/duke.jpg'
import perry from './photos/perry.jpg'
import tubby from './photos/tubby.jpg'
import whiskey from './photos/whiskey.jpg'


function Dog({ dogs }) {
    const { name } = useParams();
    const currentDog = dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
    );

    let dogInfo = null;
    if (currentDog) {
        dogInfo = (
            < div >

                <p> Name: {currentDog.name}  </p>
                <p>Age: {currentDog.age}</p>
                <p><img src={currentDog.src}></img></p>
                <p>Facts about {currentDog.name}:  </p>
                <ul>
                    {currentDog.facts.map((fact, i) => <li key={i}>{fact}</li>)}
                </ul>

            </div >
        )
    }


    return (
        <div>
            {dogInfo ? dogInfo : "No dog here"}

        </div>
    )
}

export default Dog;