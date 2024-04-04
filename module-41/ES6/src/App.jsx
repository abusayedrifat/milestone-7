export default App
import { useState } from 'react'
import './App.css'
import Watch from './watch/Watch'
import { useEffect } from 'react'

function App() {

  // const watches = [
  //   {id:1, name:'apple', price:500},
  //   {id:1, name:'orange', price:600},
  //   {id:1, name:'samsung', price:300},
  //   {id:1, name:'lenevo', price:350}
  // ]
 
  const [cars, setCars] = useState([]) 

  useEffect( () =>{

    fetch('cars-data.json')
    .then(res => res.json())
    .then(data => setCars(data))
  } ,[])
   return (
    <>
     
      <h1>Vite + React</h1>
      
      {
        cars.map(watch => <Watch key={watch.id} watch={watch} ></Watch>)
      }
    </>
  )
}


