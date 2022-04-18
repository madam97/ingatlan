import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './pages/parts/Footer';
import Header from './pages/parts/Header';
import AdList from './pages/AdList';
import AdDetailed from './pages/AdDetailed';
import FavoriteList from './pages/FavoriteList';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AdList />} />
        <Route path="/ads/:id" element={<AdDetailed />} />
        <Route path="/favorites" element={<FavoriteList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
