import Hello from "./hello";
import React from "react";
import ReactDOM from "react-dom";

// Your main App component
const App: React.FC = () => {
  return <Hello />;
};

ReactDOM.render(<App />, document.getElementById("root"));
