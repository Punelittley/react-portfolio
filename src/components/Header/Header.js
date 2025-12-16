import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <div className={styles.logo}>невшаге .thanks 𓆩 𓆪</div>
        <nav className={styles.nav}>
          <a href="#about" className={styles.link}>Кто я</a>
          <a href="#portfolio" className={styles.link}>Чем занимаюсь</a>
          <a href="#contact" className={styles.ctaButton}>Свяжзь со мной</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;