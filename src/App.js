import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Header from "./components/header_section/Header";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Signup from "./components/signup/Signup";
import PlaceOrder from "./components/placeOrder/Place_order";
import Order_success from './components/order_success/order_success'
import Orders from './components/view_orders/View_orders' 
import OurShopes from "./components/ourShopes/ourShopes";
import Menu from "./components/menus/menu";
function App() {
  const [remount, setRemount] = useState(0);

  const onRemount = (e) => {
    setRemount(e);
  };
  return (
    <div className="App">
      <Router>
        <Header data={remount} />

        <Switch>
          <Route path="/" exact>
            <Home data={onRemount} />
          </Route>

          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/cart" component={Cart} />
          <Route path="/placeOrder" component={PlaceOrder} />
          <Route path="/Order_success" component={Order_success} />
          <Route path="/orders" component={Orders} />
          <Route path="/our-shopes" component={OurShopes} />
          <Route path="/menus/:id" component={Menu} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
