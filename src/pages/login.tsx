import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Image from 'next/image';
import avatarImage from '../../public/images/signuplogin.jpg';
import { auth } from '../config/firebaseConfig';
import NavBarSignin from '../components/NavBar-signin';
import Footer from '@/src/components/footer';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const uid = user.uid;

      // Handle successful login, redirect to the user's profile page
      router.push(`/User/${uid}`);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div>
      <NavBarSignin />
      <div className="signup-container">
        <div className="signup-left">
          <div className="image-wrapper">
            <Image src={avatarImage} alt="Signup Avatar" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="signup-right">
          <h1>Login To Account</h1>
          <p>Welcome Back! Let's Login For Upload And Likes Images.</p>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <div className="form-group">
              <input 
                type="password" 
                placeholder="Password" 
                required 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit" className="signup-button">Login</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
