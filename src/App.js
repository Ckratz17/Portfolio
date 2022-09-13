import React, { useState } from 'react';
import Header from './components/Header'
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Footer from './components/Footer';


export default function App() {
  const [currentPage, setCurrentPage] = useState('About')

  const renderPage = () => {
      if (currentPage === 'About') {
          return <About />
      }
      if (currentPage === 'Portfolio') {
          return <Projects />
      }
      if (currentPage === 'Resume') {
          return <Resume />
      }
  }

  const handlePageChange = (page) => setCurrentPage(page)

return (
  <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
  </div>
)}