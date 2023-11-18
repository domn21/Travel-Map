import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './main/main';
import LoginForm from './sign/login';
import React from 'react';
import MyPage from './page/mypage';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign" element={<LoginForm />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
