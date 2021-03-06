import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.part.part1} exercises={props.exercises.exercises1} />
      <Part part={props.part.part2} exercises={props.exercises.exercises2} />
      <Part part={props.part.part3} exercises={props.exercises.exercises3} />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  );
};

const App = () => {
  const courseTitle = "Half Stack application development";
  const part1 = "Fundamentals of React ";
  const exercises1 = 10;
  const part2 = "Using props to pass data ";
  const exercises2 = 7;
  const part3 = "State of a component ";
  const exercises3 = 14;

  return (
    <div>
      <Header course={courseTitle} />
      <Content
        part={{ part1, part2, part3 }}
        exercises={{ exercises1, exercises2, exercises3 }}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
