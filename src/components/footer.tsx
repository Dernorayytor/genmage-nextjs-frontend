import Link from 'next/link';
import '../styles/footer.css';
import React from 'react';

const Footer: React.FC = () => {
    return(
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
    );
};

export default Footer;