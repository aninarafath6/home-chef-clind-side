import { useState } from "react";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Header from "./components/header_section/Header";
import Home from "./components/home/home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
function App() {
 const [remount, setRemount] = useState(0);

  const onRemount =(e)=>{
setRemount(e)
  }
  return (
    <div className="App">
     
<Router>
   <Header data={remount}/>

<Switch>

<Route path="/" exact>
  <Home data={onRemount}/>
</Route>

<Route path='/login' component={Login}/>
<Route path='/signup' component={Signup}/>
<Route path='/cart' component={Cart}/>



</Switch>
  </Router>   
   </div>
  );
}

export default App;