import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './css/App.css';
import Contact from './pages/Contact';
import ScrollToTop from './utils/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import Register from './pages/Register';

function App() {
  // Add animated Routes and scroll to top
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Header/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
        <Footer/>
      </Router>
      <ToastContainer position='top-center' autoClose={5000} theme='dark'/>
    </>
  );
}

export default App;


// Todo 
// Add 404 page and animated routes