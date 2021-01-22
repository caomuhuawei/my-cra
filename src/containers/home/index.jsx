import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd-mobile";
import logo from "assets/logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/login">
          <Button type="primary" size="small">
            登录 hook
          </Button>
        </Link>
        <Link to="/list">
          <Button type="primary" size="small">
            列表 hook
          </Button>
        </Link>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
