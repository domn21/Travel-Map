// LoginForm.jsx
import React, { useState } from 'react';
import './loginstyle.css';
import { firebaseAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./firebase";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate(); 

  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setErrorMsg('');
      if (isSignUp) {
        // 회원가입
        const createdUser = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        console.log(createdUser);

      } else {
        // 로그인
        const curUserInfo = await signInWithEmailAndPassword(firebaseAuth, email, password);
        console.log(curUserInfo);
        // 로그인에 성공했을 때 추가적인 로직을 넣으세요.
        console.log('로그인 성공');

        console.log("Navigating to MyPage");
        navigate('/mypage');
      }

      // 공통: 이메일과 비밀번호 초기화
      setEmail('');
      setPassword('');

    } catch (err) {
      console.log(err.code);
      switch (err.code) {
        case 'auth/weak-password':
          setErrorMsg('비밀번호는 6자리 이상이어야 합니다');
          break;
        case 'auth/invalid-email':
          setErrorMsg('잘못된 이메일 주소입니다');
          break;
        case 'auth/email-already-in-use':
          setErrorMsg('이미 가입되어 있는 계정입니다');
          break;
        case 'auth/user-not-found':
          setErrorMsg(isSignUp ? '입력한 이메일 주소로 가입된 계정이 없습니다' : '입력하신 이메일 또는 비밀번호가 일치하지 않습니다');
          break;
        case 'auth/wrong-password':
          setErrorMsg('입력하신 이메일 또는 비밀번호가 일치하지 않습니다');
          break;
        case 'auth/invalid-login-credentials':
          setErrorMsg('입력하신 이메일 또는 비밀번호가 유효하지 않습니다');
          break;
        default:
          setErrorMsg('알 수 없는 오류가 발생했습니다');
          break;
      }
    }
  }

  return (
    <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} id="container">
      <div className="form-container sign-up-container">
        <form action="#" onSubmit={handleFormSubmit}>
          <h1>Create Account</h1>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
          <button type="submit">{isSignUp ? '회원가입' : '로그인'}</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#" onSubmit={handleFormSubmit}>
          <h1>Sign in</h1>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
          <a href="#">Forgot your password?</a>
          <button type="submit">{isSignUp ? '회원가입' : '로그인'}</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" onClick={handleSignInClick}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start the journey with us</p>
            <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
