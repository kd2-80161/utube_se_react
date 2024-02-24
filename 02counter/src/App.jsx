import { useState } from 'react'
import './App.css'

function App() {

  //const[yeh variable hai, yeh function hai variable ko update krne ke liye]
  const [counter, setCounter] = useState(15);
  //useState ke () andr ham default value kya dena chahte ho variable
  // let counter = 15

  const addValue = () => {
    console.log("Clicked", Math.random());
    console.log(counter)
    // counter = counter + 1 // toh ab aise update ni hoga ab hame 
    // apne method ko call krna padega
    // setCounter(counter) // yeh likhne ke liye hame upper const ki jagah par let likhna padega
    //or
    // setCounter(counter + 1) 
    // or
    let updateCounter = counter + 1
    if (counter <= 20)
      setCounter(updateCounter)

  }

  const removeValue = () => {
    if (counter >= 1)
      setCounter(counter - 1)
  }

  // react react krti hai variable ke updation pr

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button
        onClick={addValue}>Add Value {counter}</button>
      {/*          addValue() yeh is liye ni laga rahe kyu ki phir woh directly execute ho jayega */}
      <br />
      <button
        onClick={removeValue}>Remove or Decrease Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
