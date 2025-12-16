import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <div className={styles.logo}>невшаге</div>
        <nav className={styles.nav}>
          <a className={styles.link}>Кнопка</a>
          <a className={styles.link}>Еще кнопка</a>
          <a className={styles.ctaButton}>Лучшая кнопка</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;