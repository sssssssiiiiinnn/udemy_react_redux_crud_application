import React from "react";

// function App() {
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input
//         type="text"
//         onClick={() => {
//           console.log("asdfa");
//         }}
//         onChange={(event) => {
//           console.log(event.target);
//         }}
//       />
//     </React.Fragment>
//   );
// }

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

User.defaultProps = {
  age: 1,
  name: "John Doe",
};

export default App;
