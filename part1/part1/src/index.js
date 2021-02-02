import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const a = 10
  const b = 20

  return (
    <div>
      <p>{a} + {b} = {a+b}</p>
      <Time />
      <Hello name="John" age="200"/>
    </div>
  );
};

const Hello = (props) =>{
  return (
    <div>
      <p>Hello {props.name}</p>
      <p>Your age is {props.age}</p>
    </div>
  )
}


const Time = () => {
  const now = new Date()
  let hours = `${now.getHours()}`.padStart(2, "0")
  let minutes = `${now.getMinutes()}`.padStart(2, "0")
  let seconds = `${now.getSeconds()}`.padStart(2, "0")

  return (
    <div>
      <p>Time: {hours}:{minutes}:{seconds}</p>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector("#root"));
