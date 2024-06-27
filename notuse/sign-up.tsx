import React from 'react';
import Link from 'next/link';
import NavBarLogin from '../src/components/NavBar-login';
import Image from 'next/image'; // นำเข้า Image จาก next/image
import avatarImage from '../public/images/signuplogin.jpg'; // นำเข้าภาพของคุณ

const SignUp: React.FC = () => {
  return (
    <div>
      <NavBarLogin />
      <div className="signup-container">
        <div className="signup-left">
          <div className="">
            <Image src={avatarImage} alt="Signup Avatar" layout="fill" objectFit="cover" /> 
          </div>
        </div>
        <div className="signup-right">
          <h1>Create Account</h1>
          <p>Welcome! Enter Your Details And Start Creating, Upload And Likes Images.</p>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Username" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Confirm Password" required />
            </div>
            <button type="submit" className="signup-button">Create account</button>
          </form>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-section">
          <h3>Genmage</h3>
          <p>AI image place, upload image, like and share.</p>
          <p>Join our community</p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
        <div className="footer-section">
          <h3>Explore</h3>
          <p><Link href="/images">Images</Link></p>
          <p><Link href="/rankings">Rankings</Link></p>
        </div>
        <div className="footer-section">
          <h3>Join Our Weekly Digest</h3>
          <p>Get exclusive promotions & updates straight to your inbox.</p>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email here" />
            <button>Subscribe</button>
          </div>
        </div>
      </footer>
      <style jsx>{`
        .signup-container {
          display: flex;
          height: 100vh;
        }
        .signup-left {
          flex: 1;
          background-color: #fe7a87;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .signup-avatar {
          width: 200px;
          height: 200px;
          position: relative;
        }
        .signup-right {
          flex: 1;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: #333;
          color: white;
        }
        h1 {
          font-size: 36px;
        }
        p {
          font-size: 16px;
          margin-bottom: 20px;
        }
        .form-group {
          margin-bottom: 20px;
        }
        input[type="text"],
        input[type="email"],
        input[type="password"] {
          width: 100%;
          padding: 10px;
          margin: 5px 0;
          box-sizing: border-box;
          border: none;
          border-radius: 5px;
        }
        .signup-button {
          background-color: #ff007f;
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          font-size: 16px;
          border-radius: 5px;
        }
        footer {
          background-color: #334;
          color: white;
          padding: 20px;
          display: flex;
          justify-content: space-between;
        }
        .footer-section {
          flex: 1;
          margin: 0 10px;
        }
        h3 {
          font-size: 18px;
          margin-bottom: 10px;
        }
        .social-icons i {
          margin-right: 10px;
        }
        .newsletter {
          display: flex;
          align-items: center;
        }
        .newsletter input[type="email"] {
          padding: 10px;
          border: none;
          border-radius: 5px 0 0 5px;
          flex: 1;
        }
        .newsletter button {
          padding: 10px 20px;
          border: none;
          background-color: #ff007f;
          color: white;
          cursor: pointer;
          border-radius: 0 5px 5px 0;
        }
      `}</style>
    </div>
  );
};

export default SignUp;
