import React, { useState,useEffect } from 'react';


const AuthForm = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    // toggle 함수 정의
    const toggle = () => {
      setIsSignUp(!isSignUp);
    };
  useEffect(() => {
    const container = document.getElementById('container');

    setTimeout(() => {
      container.classList.add('sign-in');
    }, 200);

    // 클린업 함수 (Unmount 시에 실행)
    return () => {
      // 필요한 경우에 정리 작업을 수행합니다.
      // 예: 이벤트 리스너 해제 등
    };
  }, []); // 빈 배열을 전달하여 마운트될 때만 실행되도록 설정

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { username, email, password, confirmPassword });
  };


  return (
    <div id="container" className={`container ${isSignUp ? 'sign-up' : 'sign-in'}`}>
    <div className="row">
      {/* SIGN UP */}
      <div className="col align-items-center flex-col sign-up">
        <div className="form-wrapper align-items-center">
          <div className="form sign-up">
            <div className="input-group">
              <i className='bx bxs-user'></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-group">
              <i className='bx bx-mail-send'></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-group">
              <i className='bx bxs-lock-alt'></i>
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-group">
              <i className='bx bxs-lock-alt'></i>
              <input type="password" placeholder="Confirm password" />
            </div>
            <button onClick={handleSubmit}>Sign up</button>
            <p>
              <span>Already have an account?</span>
              <b onClick={toggle} className="pointer">Sign in here</b>
            </p>
          </div>
        </div>
      </div>
        {/* END SIGN UP */}
        {/* SIGN IN */}
        <div className="col align-items-center flex-col sign-in">
          <div className="form-wrapper align-items-center">
            <div className="form sign-in">
              <div className="input-group">
                <i className='bx bxs-user'></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-group">
                <i className='bx bxs-lock-alt'></i>
                <input type="password" placeholder="Password" />
              </div>
              <button>
                Sign in
              </button>
              <p>
                <b>
                  Forgot password?
                </b>
              </p>
              <p>
                <span>
                  Don't have an account?
                </span>
                <b onClick={toggle} className="pointer">
                  Sign up here
                </b>
              </p>
            </div>
          </div>
          <div className="form-wrapper">
            {/* 추가적인 내용 */}
          </div>
        </div>
        {/* END SIGN IN */}
      </div>
      {/* END FORM SECTION */}
      {/* CONTENT SECTION */}
      <div className="row content-row">
        {/* SIGN IN CONTENT */}
        <div className="col align-items-center flex-col">
          <div className="text sign-in">
            <h2>
              Welcome
            </h2>
          </div>
          <div className="img sign-in">
            {/* 추가적인 내용 */}
          </div>
        </div>
        {/* END SIGN IN CONTENT */}
        {/* SIGN UP CONTENT */}
        <div className="col align-items-center flex-col">
          <div className="img sign-up">
            {/* 추가적인 내용 */}
          </div>
          <div className="text sign-up">
            <h2>
              Join with us
            </h2>
          </div>
        </div>
        {/* END SIGN UP CONTENT */}
      </div>
      {/* END CONTENT SECTION */}
    </div>
  );
};

export default AuthForm;
