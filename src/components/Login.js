import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      navigate('/home');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Error Code: ${errorCode} \n Error message: ${errorMessage}`);
    });
  }

  return (
    <div>
      <form>
        <input type="email" placeholder='Email' onChange={(event) => setEmail(event.target.value)}/>
        <input type="password" placeholder='Password' onChange={(event) => setPassword(event.target.value)} />
        <button onClick={login}>Login</button>
      </form>
    </div>
  )
}

export default Login