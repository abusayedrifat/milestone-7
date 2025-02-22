import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import '../country/country.css'

const Countries = () => {
    const [countries, setCountries] = useState([]) ;

    const[visitedCountries, setVisitedCountries] = useState([]);

    const [visitedFlags, setVisitedFlags] = useState([])

    //
    
    useEffect( () =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    } ,[])

    const handleVisitedCountry = country =>{
        console.log('visited country');
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlags = flag =>{
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
    }
    return (
        <div>
            <h2>Countries : {countries.length} </h2>
            <div>
                <h3>Visited Countries :{visitedCountries.length} </h3>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca2}>{country.name.common}</li>)
                    }
                </ul>
                <div className="flag-container">
                    {
                        visitedFlags.map(flag => <img src={flag}></img>)
                    }
                </div>
            </div>
           <div className="country-container">
           {
                countries.map(country => <Country key = {country.cca3}
                    handleVisitedCountry = {handleVisitedCountry}
                    handleVisitedFlags = {handleVisitedFlags}
                    country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;