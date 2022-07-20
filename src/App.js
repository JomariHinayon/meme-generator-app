import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Meme from "./components/Meme"
import Boxes from "./components/boxes"
import React from "react"
import "./components/box.css"
import Box from "./components/box"
import Form from "./components/Form"
import Form1 from "./components/Form1"

function App(props) {

  const [boxes, setBoxes] = React.useState(Boxes)

  function toggle(id) {
    setBoxes( prevBoxes => {
        return prevBoxes.map( (box) => {
          return box.id === id ? {...box, on: !box.on} : box
          
        })
    })
}
  const boxesElements = boxes.map( box => (
    <Box key={box.id} 
          id={box.id} 
          on={box.on} 
          click={ ()=> toggle(box.id)}/>
  ))


  const [messages, setMessages] = React.useState(["a"])


  return (
    <div className="App">
      <Header/>
      <Meme/>
    </div>
  );
}

export default App;
