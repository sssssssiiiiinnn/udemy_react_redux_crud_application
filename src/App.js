import React from "react";
import PropTypes from "prop-types";

const App = () => {
  const profiles = [
    { name: "taro", age: 4 },
    { name: "adf", age: 2 },
    { age: 222 },
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </div>
  );
};

const User = (props) => {
  return (
    <div>
      <p>My name is {props.name}</p>
      <p>I am {props.age} years old</p>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default App;
