import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './css/App.css';
import ScrollToTop from './utils/ScrollToTop';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AnimatedRoutes from './utils/AnimatedRoutes';

function App() {
  // Add animated Routes and scroll to top
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Header/>
        <AnimatedRoutes/>
        <Footer/>
      </Router>
      <ToastContainer position='top-center' autoClose={false} theme='dark'/>
    </>
  );
}

export default App;


// Todo 
// Add 404 page and animated routes