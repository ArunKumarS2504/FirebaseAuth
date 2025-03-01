import React, { useState } from 'react';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './setup';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleForgotPassword = () => {
    // Send a password reset email
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('Password reset email sent successfully.');
        // You can provide user feedback or navigate to a different page.
      })
      .catch((error) => {
        console.error('Error sending password reset email:', error);
      });
  };

  return (
    <>
      <main>
        <section>
          <div>
            <p> FocusApp </p>

            <form>
              <div>
                <label htmlFor="email-address">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <button onClick={onLogin}>Login</button>
              </div>
            </form>

            <p className="text-sm text-white text-center">
              No account yet?{' '}
              <NavLink to="/signup">
                Sign up
              </NavLink>
            </p>

            <p className="text-sm text-white text-center">
              <span onClick={handleForgotPassword} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                Forgot your password?
              </span>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;