import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Login from './components/Authentication/Login';
import Logout from './components/Authentication/Logout';

function App() {
  return (
 <>
 <Router>
 <Navbar />
   <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/services" exact component={Services}/>
     <Route path="/Products" exact component={Products}/>
     <Route path="/sign-up" exact component={SignUp}/>
     <Route path="/Login" exact component={Login}/>
     <Route path="/Logout" exact component={Logout} />
    
     
     
   </Switch>
 </Router>

 </>
  );
}

export default App;
