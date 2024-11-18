import { useRef, useState } from 'react';
import SERVER_URL from '../serverUrl';
import './Auth.css';

const Auth = ({ updateJwt }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [errors, setErrors] = useState([]);
  const submitButton = useRef(null);

  const pageName = isSigningUp ? 'Sign up' : 'Log in';

  const swapModals = () => {
    setIsSigningUp(!isSigningUp);
    setErrors([]);
  };

  const handleSubmit = async (e) => {
    const parsedResponse = await fetchFormResponse(e);

    if (parsedResponse.hasOwnProperty('token')) {
      updateJwt(parsedResponse);
    } else if (typeof parsedResponse === 'string') {
      setErrors([parsedResponse.split(': ')[1]]);
    } else {
      setErrors(parsedResponse);
    }
  };

  const fetchFormResponse = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch(
      `${SERVER_URL}/api/1/auth/${isSigningUp ? 'signup' : 'login'}`,
      {
        method: form.method,
        headers: { 'Content-type': 'applications/json' },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      }
    );
    const parsedResponse = await response.json();
    return parsedResponse;
  };

  return (
    <>
      <h1>{pageName}</h1>
      <form method="POST" className="auth-formWrapper" onSubmit={handleSubmit}>
        <div className="auth-formGroup">
          <label htmlFor="username">Username:</label>
          <input
            className="auth-formControl"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            name="username"
            autoCapitalize="none"
            autoCorrect="off"
          />
        </div>
        <div className="auth-formGroup">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="auth-formControl"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
            autoCapitalize="none"
            autoCorrect="off"
          />
        </div>
        <ul className="auth-errorsList">
          {errors.map((err) => (
            <li
              className="auth-error"
              key={typeof err === 'string' ? err : err.msg}
            >
              {typeof err === 'string' ? err : err.msg}
            </li>
          ))}
        </ul>

        <div className="auth-controls">
          <button
            type="submit"
            ref={submitButton}
            disabled={!username || !password}
          >
            Submit
          </button>
          <button
            type="button"
            className="auth-swapModalButton"
            onClick={swapModals}
          >
            {isSigningUp ? 'Log in' : 'Sign up'}
          </button>
        </div>
      </form>
    </>
  );
};

export default Auth;
