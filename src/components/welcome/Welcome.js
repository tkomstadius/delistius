import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Welcome.module.css';

const Welcome = () => {
  return (
    <div className={styles['container']}>
      <h1>What do you want to eat today?</h1>
      <Link to="/courses" className={styles['link']}>
        <div className={styles['button']}>
          <span role="img" aria-label="food">
            🍜🎂
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Welcome;
