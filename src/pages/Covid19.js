import {CovidAPI} from '../components/api-instance';
import React, {useState, useEffect} from 'react';
import Loading from '../components/Loading';
import reactLogo from '../logo.svg';

function fetchCountryData(setCountryData) {
  CovidAPI.get('/v3/covid-19/countries/').then(res => {
    setCountryData(res.data.map(countryData => countryData.country));
  }).catch(e => console.error(e));
}

const once = fn => {
  let isCalled = false;
  return function(){
    return isCalled ? void 0: (isCalled = true, fn.apply(this, arguments))
  }
}

const callOnceFetchCountry = once(fetchCountryData);
const Covid19 = () => {
  const [casesData, setCasesData] = useState([]);
  const [country, setCountry] = useState('global');
  const [countryData, setCountryData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function fetchData() {
    let url = country === 'global' ?
        '/v3/covid-19/all' :
        '/v3/covid-19/countries/' + country;
    CovidAPI.get(url).then(function(res) {
      setCasesData([res.data]);
    }).catch((err) => console.error(err));
   callOnceFetchCountry(setCountryData)
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    if (countryData.find(e => e === inputValue)) {
      setCountry(inputValue);
    } else {
      setCountry('global');
    }
  }

  useEffect(fetchData, [country]);
  return (
      <div>
        <form>
          <span>Select specific country</span>
          <input onChange={handleChange}
                 className="border border-black py-2 px-3"
                 list="country-data"
                 value={inputValue}
          />
          <datalist id="country-data">
            {
              countryData.map((country, idx) => {
                return <option key={idx} value={country} />;
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
                      <p>Showing data for : </p>
                      <span> {country} </span>
                      <img style={{maxWidth: 100}}
                           src={country === 'global' ?
                               reactLogo :
                               casesData[0].countryInfo &&
                               casesData[0].countryInfo.flag} />
                    </div>

                    <div>
                      <p>Total cases: </p>
                      <p>{casesData[0].cases}</p>
                    </div>

                    <div>
                      <p>Today cases: </p>
                      <p>{casesData[0].todayCases}</p>
                    </div>

                    <div>
                      <p>Total Recovered: </p>
                      <p>{casesData[0].recovered}</p>
                    </div>

                    <div>
                      <p>Today Recovered: </p>
                      <p>{casesData[0].todayRecovered}</p>
                    </div>
                    <div>
                      <p>Total Deaths: </p>
                      <p>{casesData[0].deaths}</p>
                    </div>

                    <div>
                      <p>Today Deaths: </p>
                      <p>{casesData[0].todayDeaths}</p>
                    </div>

                    <div>
                      <p>Total Tests: </p>
                      <p>{casesData[0].tests}</p>
                    </div>

                    <div>
                      <p>Recovery rate (% by total cases): </p>
                      <p>{/* WRITE YOUR CODE HERE */}</p>
                    </div>

                    <div>
                      <p>Death rate (% by total cases): </p>
                      <p>{/* WRITE YOUR CODE HERE */}</p>
                    </div>

                    <div>
                      <p> Updated time: </p>
                      <p>{new Date(casesData[0].updated).toDateString()}</p>
                      <p>{new Date(
                          casesData[0].updated).toLocaleTimeString()}</p>
                    </div>

                  </div>

              )
        }
      </div>
  );
};
export default Covid19;
