import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./component/Home";
import Cart from "./component/Cart";
import Navbar from './component/Navbar';
import {Provider} from "react-redux";
import store from "./store/store";
function App() {
  return (
    <Provider store = {store}>
      <div>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
