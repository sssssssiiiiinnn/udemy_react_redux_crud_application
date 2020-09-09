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
  return (
    <div>
      <Cat />
      <Cat />
    </div>
  );
};

const Cat = () => {
  return (
    <div>
      <h1>Meow!</h1>
      <h1>Meow!</h1>
      <h1>Meow!</h1>
    </div>
  );
};

export default App;
