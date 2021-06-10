import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar  from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
        <Router>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </head> 
      <header className="App-header">
        <NavBar/>
      </header>
      <body>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
        </Switch>
      </body>
        </Router>
    </div>
  );
}

export default App;
