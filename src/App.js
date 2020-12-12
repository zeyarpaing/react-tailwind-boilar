import "./styles/mystyle.css";
import "./App.css";
import "./styles/main.css";
import Navigation from "./components/Navigation";
import Gallary from "./pages/Gallary";
import React from "react";

function App() {
  return (
    <>
      <Navigation fixed={true} />
      <div className="pt-8 px-2">
        <Gallary />
      </div>
    </>
  );
}

export default App;
