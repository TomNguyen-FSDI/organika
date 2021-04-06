import './App.css';
import NavBar from './components/navBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Catalog from './components/catalog';
import Home from './components/home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './components/about';
import Cart from './components/cart';



function App() {

  return (
    <BrowserRouter>
      <div className="App">
        {/* need to import NavBar from ./components/navBar */}
        

        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/organika" exact component={Home}></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/catalog" exact component={Catalog} ></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/cart" exact component={Cart}></Route>
        </Switch>

        

      </div>
    </BrowserRouter>
  );
}

export default App;
