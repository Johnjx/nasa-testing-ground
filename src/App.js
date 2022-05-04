import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "./constants";
import Header from "./components/Header";
import Navbar from "./components/NavBar";

function App() {
  const [nasaData, setNasaData] = useState(null);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => {
        setNasaData(res.data);
      })
      .catch(err => console.log(err))
  }, [])

  if (!nasaData) return <h1 className="text-5xl">Creating star link, one moment please...</h1> 

  return (
    <div>
      <Navbar/>
      {nasaData && <Header data={nasaData} />}
    </div>
  );
}

export default App;
