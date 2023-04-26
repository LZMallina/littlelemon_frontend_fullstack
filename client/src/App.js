import './App.css';
import Header from './components/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Menu from './components/pages/Menu';
import BookingPage from './components/pages/BookingPage';
import Orderonline from './components/pages/Orderonline';
import Login from './components/pages/Login';
import RegistrationForm from './components/pages/RegistrationForm';
import ConfirmationPage from './components/pages/ConfirmationPage'
import Checkout from "./components/pages/Checkout";
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { CartcontextProvider } from './context/CartContext';
function App() {
  return (
    <>
      <CartcontextProvider>
        <Header />
        <main className="content">
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/reservation" element={<BookingPage />}></Route>
            <Route path="/orderonline" element={<Orderonline />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/registration" element={<RegistrationForm />}></Route>
            <Route path="/confirmation" element={<ConfirmationPage />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
        </main>
        <Footer />
      </CartcontextProvider>
    </>
  );
}

export default App;
