import React from "react"

export default function Box (props){

    const [isOn, setIsOn] = React.useState(props.on) 

    const style = { backgroundColor: isOn ? "#222222" : "#cccccc"}


    return(
        <div className="box" 
        style={style} 
        onClick={props.click}>
            
        </div>
    )
}