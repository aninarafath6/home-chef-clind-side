import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Header from "./components/header_section/Header";
import Home from "./components/home/home";
import Login from "./components/login/login";
function App() {
  return (
    <div className="App">
     
<Router>
   <Header/>

<Switch>
<Route path='/' component={Home} exact/>

<Route path='/login' component={Login}/>

</Switch>
  </Router>   
   </div>
  );
}

export default App;