import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../constants";
import AnimatedPage from "./Animations/AnimatedPage";

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
        <AnimatedPage>
        <section className="dark:bg-gray-600">
            <h2 className="text-center text-2xl leading-loose dark:text-white">New Nasa Feature</h2>
            { newNasaData &&
                <div className="flex flex-col items-center dark:text-white">
                    <h1 className="text-4xl">{newNasaData.title}</h1>
                    <h3 className="text-2xl p-3">{newNasaData.date}</h3>
                    <img className="w-screen max-h-screen" src={newNasaData.hdurl} alt="Nasa feature"/>
                    <h3 className="text-3xl leading-loose p-4 font-semibold">Details about this Piece</h3>
                    <p className="2xl:max-w-5xl 2xl:text-2xl text-xl leading-relaxed lg:max-w-2xl sm:max-w-md xs:text-lg xs:max-w-xs">{newNasaData.explanation}</p>
                    <p className="p-4 text-lg font-bold">{newNasaData.copyright}</p>
                    <div className="h-12 w-screen bg-sec">
                        <p className="text-center p-4 dark:text-black">© 2022 John Ruddock.</p>
                    </div>
                </div>
            }    
        </section>
        </AnimatedPage>
    )
}

export default NewApod;