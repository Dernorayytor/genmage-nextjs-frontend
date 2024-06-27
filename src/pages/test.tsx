import React from 'react';
import Image from 'next/image';
import styles from '../styles/TopImage.module.css'; // Assuming you have the CSS in a file named TopImage.module.css

const imageCards = [
  {
    src: '/images/image1.jpg',
    alt: 'Women In Business Look',
    title: 'Women In Business Look',
    author: 'MR.MuwaHaHaHa',
    likes: '404+',
  },
  {
    src: '/images/image2.jpg',
    alt: 'Movie Star',
    title: 'Movie Star',
    author: 'โคโนะเซ็น',
    likes: '1025+',
  },
  {
    src: '/images/image3.jpg',
    alt: 'สาวไทย',
    title: 'สาวไทย',
    author: 'โตโระไม่ใช่โตเนี้ยโตโร่',
    likes: '1025+',
  },
];

const TopImage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Top Image</h1>
        <p>Checkout Top Rated Image And Prompt</p>
      </div>
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
  );
};

export default TopImage;
