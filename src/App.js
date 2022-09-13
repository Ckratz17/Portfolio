import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Footer from './components/Footer';


function App() {
  return (

    <Router>
      <div>
      <Header />
      </div>
      <div>
        <Routes>
          <Route
            path="/"
            element={<About />}
          />
          <Route
            path="/projects"
            element={<Projects />}
          />
          <Route
            path="/resume"
            element={<Resume />}
          />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </Router>


  );
}

export default App;