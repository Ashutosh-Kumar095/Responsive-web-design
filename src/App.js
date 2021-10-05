import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection  from './Components/HeroSection';
import FooterSection from './Components/FooterSection';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <HeroSection/>
        <Switch>
          <Route path="/" exact></Route>
        </Switch>
        <FooterSection/>
      </Router>
    </>
  );
}

export default App;
