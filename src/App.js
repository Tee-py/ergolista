import Login from "./Pages/Login/index";
import Register from "./Pages/Register/index";
import { 
  BrowserRouter as Router, 
  Route, 
  //Link, 
  Switch 
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login}></Route> 
        <Route exact path='/register' component={Register}></Route> 
      </Switch>
    </Router>
  );
}

export default App;
