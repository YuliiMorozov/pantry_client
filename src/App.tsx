import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Header from './components/Header';


function App() {
  return (
    <>
    <Header />
      <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </>
  );
}

export default App;
