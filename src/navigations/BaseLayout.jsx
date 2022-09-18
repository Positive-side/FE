import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ScrollToTop from '../components/ScrollToTop'
import Main from '../pages/Main'

const BaseLayout = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" exact element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default BaseLayout