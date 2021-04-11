
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appiontment/Appointment';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/appointment">
            <Appointment />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
