import React, { useRef, useState } from 'react';
import NavBarLogin from '../components/NavBar-login';
import Image from 'next/image'; // นำเข้า Image จาก next/image
import avatarImage from '../../public/images/signuplogin.jpg'; // นำเข้าภาพของคุณ
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';
import Footer from '../components/footer'; // ตรวจสอบเส้นทางการนำเข้า
import { useRouter } from 'next/router'; // ใช้ useRouter แทน useNavigate

const SignUp: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter(); // สร้าง instance ของ useRouter
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    if (!email || !password) {
      setErrorMessage('Email and Password are required');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/login'); // ใช้ router.push แทน navigate
    } catch (error) {
      console.log(error);
      setErrorMessage((error as Error).message);
    }
  };

  return (
    <div>
      <NavBarLogin />
      <div className="signup-container">
        <div className="signup-left">
          <div className="image-wrapper">
            <Image src={avatarImage} alt="Signup Avatar" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="signup-right">
          <h1>Create Account</h1>
          <p>Welcome! Enter Your Details And Start Creating, Upload And Likes Images.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="email" 
                name='email' 
                placeholder="Email Address" 
                required 
                ref={emailRef} 
              />
            </div>
            <div className="form-group">
              <input 
                type="password" 
                name='password' 
                placeholder="Password" 
                required 
                ref={passwordRef} 
              />
            </div>
            <button type="submit" className="signup-button">Create account</button>
            {errorMessage && <p className='error-message'>{errorMessage}</p>}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
