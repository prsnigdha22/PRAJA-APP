import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AreaSelector from './AreaSelector';
import App1 from './App1';

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App1 />} />
          <Route path="/prajaapp" element={<AreaSelector />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
