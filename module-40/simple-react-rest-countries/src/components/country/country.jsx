import { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, capital, flags, population, maps, area} = country

   

    const [visited, setVisited] = useState(false)

    const handleVisited = () =>{
        setVisited(!visited)
    } 

  
    
    return (
        <div className="box">
            <div className={`each-box ${visited ? 'visited':'not-visited'}`}>
            <h4 style={{color: visited ? 'white' : 'black' }}>{name?.common} </h4>
            <h5>Capital : {capital} </h5>
        <img src= {flags.png} alt="" className='flag'/>
        <p>Area : {area} km<sup> 2</sup> </p>
        <p>Population : {population}</p>
        <p> <a href= {maps?.googleMaps} target='blank'> See on Map</a> </p>
        <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button> <br />
        <button onClick={()=> handleVisitedCountry(country)}>Mark Visited</button><br/>
        <button onClick={handleVisited} style={{outline:'none'}}>Visit</button>
        {visited ? '  visited ' : ' not visited'}
        </div>
        </div>
        
    );
};

export default Country;
