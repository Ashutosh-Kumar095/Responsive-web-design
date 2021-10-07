import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection  from './Components/HeroSection';
import FooterSection from './Components/FooterSection';
import LoginRegistration from './Components/LoginRegistration';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={(props)=>{return (<HeroSection {...props}/>)}}></Route>
          <Route path="/login" exact component={() => { return (<LoginRegistration/>)}} />
        </Switch>
        <FooterSection/>
      </Router>
    </>
  );
}

export default App;
