import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../constants";

const NewApod = (props) => {
    const { date } = props;
    const [newNasaData, setNewNasaData] = useState(null);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date[0]}-${date[1]}-${date[2]}`)
            .then(res => {
                setNewNasaData(res.data)
            })
            .catch(err => console.log(err))
    },[date])

    return (
        <section>
            <h2>New Nasa Feature</h2>
            { newNasaData &&
                <div>
                    <h1>{newNasaData.title}</h1>
                    <h3>{newNasaData.date}</h3>
                    <img src={newNasaData.hdurl} alt="Nasa feature"/>
                    <h3>Details about this Piece</h3>
                    <p>{newNasaData.explanation}</p>
                    <p>{newNasaData.copyright}</p>
                </div>
            }    
        </section>
    )
}

export default NewApod;