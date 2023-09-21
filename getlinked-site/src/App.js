import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './css/App.css';
import Contact from './pages/Contact';

function App() {
  // Add animated Routes and scroll to top
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;


// Todo 
// Add 404 page and animated routes