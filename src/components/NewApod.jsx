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
        <section className="dark:bg-gray-600">
            <h2 className="text-center text-2xl leading-loose dark:text-white">New Nasa Feature</h2>
            { newNasaData &&
                <div className="flex flex-col items-center dark:text-white">
                    <h1 className="text-4xl">{newNasaData.title}</h1>
                    <h3 className="text-2xl p-3">{newNasaData.date}</h3>
                    <img className="w-screen max-h-screen" src={newNasaData.hdurl} alt="Nasa feature"/>
                    <h3 className="text-3xl leading-loose p-4 font-semibold">Details about this Piece</h3>
                    <p className="max-w-5xl text-xl leading-relaxed">{newNasaData.explanation}</p>
                    <p className="p-4 text-lg font-bold">{newNasaData.copyright}</p>
                </div>
            }    
        </section>
    )
}

export default NewApod;