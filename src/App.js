import "./styles/mystyle.css";
import "./App.css";
import "./styles/main.css";
import Navigation from "./components/Navigation";
import Gallary from "./pages/Gallary";
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Register from "./pages/Register";
import Photo from "./components/Photo";

function App() {
  return (
    <>
      <Router>
        <Navigation fixed={true} />
        <div className="pt-16 px-2">
          <Route path={'/gallary'} component={Gallary}/>
          <Route path={'/register'} component={Register}/>
          <Route path={'/aboutus'} component={() => <div>About us</div>}/>
          <Route path={'/photo/:pid'} component={Photo}/>
        </div>
      </Router>
    </>
  );
}

export default App;
