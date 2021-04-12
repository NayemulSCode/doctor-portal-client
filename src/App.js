
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appiontment/Appointment';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllPatients from './components/AllPatients/AllPatients/AllPatients';
import AddDoctor from './components/AddDoctor/AddDoctor';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute'
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/appointment">
            <Appointment />
        </Route>
        <Route path="/dashboard">
            <Dashboard />
        </Route>
        <PrivateRoute path="/allPatients">
            <AllPatients />
        </PrivateRoute>
        <Route path="/addDoctor">
            <AddDoctor />
          </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route exact path="/">
            <Home />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
