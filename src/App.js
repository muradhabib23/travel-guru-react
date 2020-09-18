import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import Login from './Components/Login/Login';
import Booking from './Components/Booking/Booking';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import BookingConfirmation from './Components/BookingConfirmation/BookingConfirmation';

export const DestinationContext = createContext([]);


function App() {
  const [destination, setDestination] = useState([])
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
  <DestinationContext.Provider value = {[destination, setDestination, loggedInUser, setLoggedInUser]}>
   <Router>
    <Switch>
      <Route path="/home">
        <Home/>
      </Route>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/login">
          <Login/>
        </Route>
        <Route path="/booking">
          <Booking/>
        </Route>
        <PrivateRoute path="/bookingConfirmation">
          <BookingConfirmation/>
        </PrivateRoute>
      <Route path="*">
        <NoMatch/>
      </Route>
    </Switch>
  </Router>
  </DestinationContext.Provider>
  );
}

export default App;
