import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Article from './Components/Article';
import MyHeader from './Components/MyHeader';
import NavBar from './Components/NavBar';
import PaginaDois from './Components/PaginaDois';

function App() {
  return (
    <Router>
    <div className="App"> 
      <MyHeader/>
      <NavBar/>

      <Link to='/'>Home</Link>
      <Link to='/paginadois'>Paginadois</Link>

        <Switch>
          <Route path='/' exact component={Article}></Route>
          <Route path='/paginadois' component={PaginaDois}></Route>
        </Switch>

    </div>
    </Router>
  );
}

export default App;