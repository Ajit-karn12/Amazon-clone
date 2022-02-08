
import './App.css';
import CheckOut from './Component/CheckOut/CheckOut';
import DisplayContent from './Component/DisplayContent/DisplayContent';
import MainPage from './Component/HomePage/MainPage';
import NavBar from './Component/NavBar/Navigation';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';
import { BrowserRouter as Router,Route,Routes, Link } from "react-router-dom";
import CartContextProvider from './Component/PlaceOrder/CartContext';

function App() {
  return (
    <Router>
    <div className="App">
      <CartContextProvider>
      <NavBar/>
      <Routes>
      <Route path="/display" element={<DisplayContent/>} />
       <Route path="/order/:id" element={<PlaceOrder/>} />
       <Route path="/checkout" element={<CheckOut/> } />
       <Route path="/" element={<MainPage/>} />
     </Routes>
     </CartContextProvider>
    </div>
    </Router>
  );
}

export default App;
