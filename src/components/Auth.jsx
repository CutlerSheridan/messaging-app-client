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

  return (
    <>
      <h1>{pageName}</h1>
    </>
  );
};

export default Auth;
