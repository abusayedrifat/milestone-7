
import './App.css'
import Friend from './Friend'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'
import Counter from './counter'

function App() {


  function handleClick() {
    alert('button clicked')
  }

  const handleClick2 = () =>{
    alert('button 2 clicked')
  }

  // const addToFive = (num) =>{
    
  // }

  return (
    <>
   
      <h1>Vite + React</h1>
      <Friends></Friends>
      <Friend></Friend>
      <Users></Users>
      <Team></Team>
       <Counter></Counter>
     <button onClick={handleClick}>click me</button>
     <button onClick={handleClick2}>click me 2</button>
     <button onClick={() =>{ alert('third button clicked') }}>Click me 3</button>
    </>
  )
}

export default App
