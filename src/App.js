import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './main/main';
import LoginForm from './sign/login';
import React from 'react';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign" element={<LoginForm />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
