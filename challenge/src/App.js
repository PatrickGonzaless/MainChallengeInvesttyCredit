import './App.css';
import Article from './Components/Article';
import MyHeader from './Components/MyHeader';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <MyHeader/>
      <NavBar/>
      <Article/>
      
    </div>
  );
}

export default App;