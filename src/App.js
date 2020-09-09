import React from "react";

function App() {
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input
        type="text"
        onClick={() => {
          console.log("asdfa");
        }}
        onChange={(event) => {
          console.log(event.target);
        }}
      />
    </React.Fragment>
  );
}

export default App;
