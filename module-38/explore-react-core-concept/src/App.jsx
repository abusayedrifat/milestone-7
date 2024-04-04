// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './singer'
import BookStore from './BookStore'
//main component
function App() {

const actors = ['sakib', 'raj', 'jasim', 'rubel' ];

const singers = [
  {name:' sabila nur', age:50},
  {name:'neffex', age:89},
  {name:'soilder', age:24}
];

const books = [
  {id:1, name:'chemistry', price:550},
  {id:2, name:'physics', price:300},
  {id:3, name:'bangla', price:150},
  {id:4, name:'english', price:250}
]
  return (
    <>
     
      <h1>Vite + React</h1>

      <BookStore books={books}></BookStore>

      {
        singers.map(singer => <Singer singer = {singer}></Singer>)
      }

      <Actor name = {'salmon khan'}></Actor>

      {
        actors.map( actor => <Actor name={actor} ></Actor>)
      }
      {/* <Todo task= "learn React" isDone= {true}></Todo> */}
       {/* <Devices name="laptop" price="65000"></Devices>
       <Devices name="Mobile" price="13500"></Devices>
       <Devices name="Smart watch" price="4000"></Devices>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student></Student>
      <Student></Student>
      <Developer></Developer> */}
     
     
    </>
  )
}

function Devices(props) {
  return <h3>This Device: {props.name} and price: {props.price} </h3>
}

//my own component or sub-component
function Person() {
  const age = 21;
  const money = 25;
  const person = {name:'abu sayed' , address:'Binodpur, Rajshahi'}

  return <h2>My name is {person.name} . <br/> And something tried to make dynamic {age+money}</h2>
}

//creat another component and give a style on "app.css"

const {grade, score} = {grade:'7', score:'99'};

function Student({grade ,score=0}){
  return (
    <div className='student'>
       <h1>Hello, there</h1>
       <p>I am learning React</p>
       <p>Score: {score}  </p>
       <p>Grade : {grade}  </p>
    </div>
  )
}

//style by an object
function Developer() {
  const developerStyle = {
    margin:'20px',
    padding:'20px',
    border:'2px solid salmon',
    borderRadius:'20px'
  }
  return(
    <div style={developerStyle}>
       <h1>Hello, there</h1>
       <p>I am learning React</p>
       <button>Click for more</button>
    </div>
  )
}




export default App
