import { useState } from 'react';
import axios from 'axios';

const Form =()=> {
  const [city, setCity] = useState("");
  const getWeather =(e)=> {
    e.preventDefault();
    axios.get("https://api.weatherapi.com/v1/current.json?key=b24c63cafd8146d4831124254212503&q=London&aqi=no")
      .then(res => console.log(res))
  }
  return (
    <form>
      <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)} />
      <button type="submit" onClick={getWeather}>Get Weather</button>
    </form>
  );
};

export default Form;