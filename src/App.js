import React from 'react';
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom';
import Books from './components/Books';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        {/* <Route path="categories" element={<Categories />} /> */}
      </Routes>
    </div>
  );
}

export default App;
