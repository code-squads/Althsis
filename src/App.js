import React, { useContext, useState } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import { AuthProvider } from './context/authorisation';
import { ThemeProvider } from "./context/ThemeContext";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import "./colors.css";
import "./App.css";

const App = () => {

  return (
    <div className="App">
      <ThemeProvider>
        <AuthProvider>
          <BrowserRouter>
            <Navbar />
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/login" component={Login} />
                <Route exact path='/dash' component={Dashboard} />
                <Redirect to="/" />
              </Switch>
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;