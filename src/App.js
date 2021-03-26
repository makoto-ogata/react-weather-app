import {useState} from 'react';
import axios from 'axios';
import Title from './components/Title';
import Form from './components/Form';
import Result from './components/Results';
import './App.css';

function App() {
  const [city, setCity] = useState("");
  const [results, setResults] = useState({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    localTime: "",
    icon: ""
  });
  const getWeather =(e)=> {
    e.preventDefault();
    axios.get("https://api.weatherapi.com/v1/current.json?key=b24c63cafd8146d4831124254212503&q=London&aqi=no")
      .then(res => {
        setResults({
          country: res.data.location.country,
          cityName: res.data.location.name,
          temperature: res.data.current.temp_c,
          conditionText: res.data.current.condition.text,
          localTime: res.data.location.localtime,
          icon: res.data.current.condition.icon
        })
      })
  }
  return (
    <div className="test">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Result results={results} />
    </div>
  );
}

export default App;
