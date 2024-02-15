import React from 'react';
import styles from './styles.module.css';

const HomePage: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.background}></div>
            <div className={styles.content}>
                <h1>Lorem Ipsum</h1>
                <p className={styles.smallText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className={styles.mediumText}>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className={styles.largeText}>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    );
};

export default HomePage;