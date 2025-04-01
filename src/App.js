import './App.css';
import Header from './myComponents/Header';
import Footer from './myComponents/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './myComponents/Home';
import About from './myComponents/About';

function App() {

  return (
    <>
      <Router>

        <Header title="Task Management" />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
