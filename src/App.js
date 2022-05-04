import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "./constants";
import Header from "./components/Header";
import Navbar from "./components/NavBar";
import Main from "./components/Main";
import NewDate from "./components/NewDate";



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

      <Switch>

        <Route path="/new-date">
          <NewDate/>
        </Route>

        <Route path="/">
          {nasaData && <Header data={nasaData} />}
          {nasaData && <Main data={nasaData} />}
        </Route>
         
      </Switch>
    </div>
  );
}

export default App;
