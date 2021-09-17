import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
