import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Login from "./components/login.component";
import clip from './components/video/clip.mp4';
function App() {
  return (<Router>
    <div className="App">
      <video autoPlay loop muted style={{
        position: "absolute",
        width: "100%",
        left: "0%",
        height: "100%",
        objectFit: "cover",
        transform: "translate(-50% 50%)",
        zIndex: "-1",
      }}>
        <source src={clip} type='video/mp4'></source>
      </video>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
