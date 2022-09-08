import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Resume from './pages/Resume'



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
            path="/contact"
            element={<Contact />}
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
      </Router>


  );
}

export default App;