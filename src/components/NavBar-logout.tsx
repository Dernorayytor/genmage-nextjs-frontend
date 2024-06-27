import React from 'react';
import Link from 'next/link';
import '../styles/NavBar.css';

const NavBarLogout: React.FC = () => {
    return (
        <div className="navbar">
            <Link href="/" passHref>
                <button className="navbar-button">
                    Genmage
                </button>
            </Link>

        <div className="navbar">
            <Link href="" passHref>
                <button className="navbar-button">
                    
                </button>
            </Link>
        </div>

        <div className="navbar">
            <Link href="" passHref>
                <button className="navbar-button">
                    
                </button>
            </Link>
        </div>

        <div className="navbar-image">
            <Link href="/images" passHref>
                <button className="navbar-button">
                    Images
                </button>
            </Link>
        </div>

        <div className="navbar-ranking">
            <Link href="/rankings" passHref>
                <button className="navbar-button">
                    Rankings
                </button>
            </Link>
        </div>
            
        <div className="navbar-signuploginlogout">
            <Link href="/login" passHref>
                <button className="signuploginlogout-button">
                    LogOut
                </button>
            </Link>
        </div>
    </div>
    );
};

export default NavBarLogout;
