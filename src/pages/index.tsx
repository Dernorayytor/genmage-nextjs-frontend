import React from 'react';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import showImage from '../../public/images/img.jpg';
import LikeandComment from '../../public/images/LikeandComment.jpg';
import CreateCollection from '../../public/images/CreateCollection.jpg';
import SignUp from '../../public/images/SignUp.jpg';
import Image from 'next/image'; // นำเข้า Image จาก next/image
import '../styles/globals.css';
import styles from '../styles/TopImage.module.css';
import Footer from '@/src/components/footer';
const imageCards = [
    {
      src: showImage,
      alt: 'Women In Business Look',
      title: 'Women In Business Look',
      author: 'MR.MuwaHaHaHa',
      likes: 'Likes:404+',
    },
    {
      src: showImage,
      alt: 'Movie Star',
      title: 'Movie Star',
      author: 'คน',
      likes: 'Likes:1025+',
    },
    {
      src: showImage,
      alt: 'สาวไทย',
      title: 'สาวไทย',
      author: 'คนเหมือนกัน',
      likes: 'Likes:1025+',
    },
  ];
  
const HomePage = () => {
    return (
        <div>
            <NavBar />
            <div id="myPage" data-spy="scroll" data-target=".navbar" data-offset="50">
                <div className="content">
                    <div className="text-section">
                        <h1>Discover</h1>
                        <h1>AI Image</h1>
                        <p>AI Image Place. Upload Image, Like And Share Image From More Than 5k AI Creators.</p>
                        <Link href="#Howitwork" passHref><button className="get-started-button">Get Started</button></Link>
                        <div className="stats">
                            <div className="stat">
                                <strong>240k+</strong>
                                <span>Image</span>
                            </div>
                            <div className="stat">
                                <strong>100k+</strong>
                                <span>Prompt</span>
                            </div>
                            <div className="stat">
                                <strong>10k+</strong>
                                <span>Creators</span>
                            </div>
                        </div>
                    </div>
                    <div className="image-section">
                        <Image src={showImage} alt="Cat Girl Models" className="featured-image" />
                        <div className="image-caption">
                            <p>Cat Girl Models</p>
                            <p>MR.MuwaHaHaHa</p>
                        </div>
                    </div>
                </div>
            </div>

        <div id="Topimage" data-spy="scroll" data-target=".navbar" data-offset="50">
            <div className="content">
            <div className="text-section">
                    <h1>Top Image</h1>
                    <p>Checkout Top Rated Image and Prompt</p>
                </div>
                <div className={styles.container}>
                
                <div className={styles.cardsContainer}>
                    {imageCards.map((card, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imageWrapper}>
                        <Image src={card.src} alt={card.alt} layout="fill" objectFit="cover" />
                        </div>
                        <div className={styles.cardContent}>
                        <h3>{card.title}</h3>
                        <p className={styles.author}>{card.author}</p>
                        <div className={styles.likes}>
                            <span>{card.likes}</span>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
                
                {/* <div className="image-howitwork-section">
                    <div className="image-section">
                        <Image src={showImage} alt="Cat Girl Models" className="featured-image" />
                    </div>
                    <div className="image-section">
                        <Image src={showImage} alt="Cat Girl Models" className="featured-image" />
                    </div>
                    <div className="image-section">
                        <Image src={showImage} alt="Cat Girl Models" className="featured-image" />
                    </div>
                </div> */}
            </div>
        </div>

        <div id="Howitwork" data-spy="scroll" data-target=".navbar" data-offset="50">
            <div className="content">
                <div className="text-section">
                    <h1>How it works</h1>
                    <p>Find out how to get started</p>
                </div>
                <div className="image-howitwork-section">
                    <div className="howitwork-caption">
                        <Image src={SignUp} alt="SignUp" className="featured-howitwork-image" />
                        <p>Sign Up</p>
                        <p>Users need to sign up for an account on the website by providing personal information to create their personal profile.</p>
                    </div>
                    <div className="howitwork-caption">
                        <Image src={CreateCollection} alt="CreateCollection" className="featured-howitwork-image" />
                        <p>Create Collection</p>
                        <p>Upload and setup your work. Add a description prompt, social links.</p>
                    </div>
                    <div className="howitwork-caption">
                        <Image src={LikeandComment} alt="SignUp" className="featured-howitwork-image" />
                        <p>Like and Comment</p>
                        <p>like the photo or leave comments on it to facilitate sharing and interaction among</p>
                    </div>
                </div>
            </div>

         
        </div>
        <Footer />
        </div> 
    );
};

    

export default HomePage  ;
