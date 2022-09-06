import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Article from './Components/Article';
import MyHeader from './Components/MyHeader';
import NavBar from './Components/NavBar';
import PaginaDois from './Components/PaginaDois';

function App() {
  return (
    <div className="App">
      
      <Router>
      <MyHeader/>
      <NavBar/>
      
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pagdois" >Pagdois</Link>
          </li>
        </ul>
        <Switch>
        <Route exact path="/">
          <Article/>
        </Route>
        <Route path="pagdois">
        <PaginaDois/>
        </Route>
      </Switch>
      
      </Router>

    </div>
  );
}

export default App;