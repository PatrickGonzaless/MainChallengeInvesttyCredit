import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Article from './Components/Article';
import MyHeader from './Components/MyHeader';
import NavBar from './Components/NavBar';
import SecondArticle from './Components/SecondArticle';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      
    <div className="App"> 
      <MyHeader/>
      <NavBar/>

      <Switch>
          <Route path='/artigo1' exact component={Article}></Route>
          <Route path='/artigo2' component={SecondArticle}></Route>
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;