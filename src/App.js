
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './routes/ItemListContainer/ItemListContainer';
import Home from './routes/Home/Home';
import ItemDetailContainer from './routes/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import Cart from './routes/Cart/Cart';
import { CartProvider } from './components/cartContext/CartContext';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/ListMotos' element={<ItemListContainer saludo="es el list container" />}></Route>
          <Route path='/ListMotos/:id' element={<ItemDetailContainer />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
