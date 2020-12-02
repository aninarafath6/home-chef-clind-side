import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Header from "./components/header_section/Header";
import Home from "./components/home/home";
function App() {
  return (
    <div className="App">
     
<Router>
   <Header/>

<Switch>
<Route path="/">
  <Home/>
</Route>
</Switch>
  </Router>   
   </div>
  );
}

export default App;