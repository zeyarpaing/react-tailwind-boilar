import { CovidAPI } from "../components/api-instance";
import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import axios from "axios";

const Covid19 = () => {
  const [casesData, setCasesData] = useState([]);
  const [country, setCountry] = useState("global");
  const [countryData, setCountryData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function fetchData() {
    let url = country === "global" ? "/v3/covid-19/all" : "/v3/covid-19/countries/" + country;
    CovidAPI.get(url)
      .then(function(res) {
        setCasesData([res.data]);
        console.log(res);
      })
      .catch((err) => console.error(err));
      axios.get("https://restcountries.eu/rest/v2/all?fields=name")
        .then(res => {
          console.log('fetched country data')

          setCountryData(res.data.map(country => country.name))
          
        })
        .catch(e => console.error(e));
  }

  function handleChange(e) {
    console.log("country change", e.target.value);
    setInputValue(e.target.value)
  }
  function handleClick(e) {
    e.preventDefault();
    if(countryData.find(e => e === inputValue)){
      setCountry(inputValue);
    }else {
      setCountry("global");
    }
  }
  useEffect(fetchData, [country]);
  //casesData && console.log(casesData);
  return (
    <div>
      <form>
      <span>Select specific country</span>
      <input onChange={handleChange} className="border border-black py-2 px-3" list="country-data" />
      <datalist id="country-data">
        {
          countryData.map(country => {
            return <option value={country}></option>;
          })
        }
      </datalist>
      <button onClick={handleClick}> Filter</button>
      </form>
      {
        !casesData[0] ?
          <Loading /> :
          (
            <div>
               <div> 
                <p>Today Tests: </p>
                <p>{casesData[0].tests}</p>
             </div>
              <div>
                <p>Today cases: </p>
                <p>{casesData[0].todayCases}</p>
              </div>
              <div> 
                <p>Today Recovered: </p>
                <p>{casesData[0].todayRecovered}</p>
             </div>
             <div> 
                <p>Total Recovered: </p>
                <p>{casesData[0].recovered}</p>
             </div>
             <div> 
                <p> Updated time: </p>
                <p>{new Date(casesData[0].updated).toDateString()}</p>
                <p>{new Date(casesData[0].updated).toLocaleTimeString()}</p>
             </div>
              <div> 
                <p>Total cases: </p>
                <p>{casesData[0].cases}</p>
             </div>
              <div><span>{country} </span><img src={casesData[0].countryInfo.flag}></img> </div>
             
            </div>
            
          )
      }
    </div>
  );
};
export default Covid19;
