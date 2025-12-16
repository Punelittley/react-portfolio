import React, { useState } from 'react';
import styles from './About.module.css';

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>Ку, я невшаге .thanks 𓆩 𓆪 aka Денис Жуков воч демо</h1>
        <p className={styles.subtitle}>
        Люблю монстр папелайн пунш и хочу его на новый год (кто мне его купит во век не забуду), могу сайт сделать и игнорить неделями просто потому что хочу
        </p>

        <button 
          className={styles.toggleBtn} 
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Скрыть' : 'О себе'}
        </button>

        {showMore && (
          <div className={styles.moreInfo}>
            <p><strong>Стек:</strong>React, HTML, CSS, JS, Lua(чуть чуть)</p>
            <p><strong>Цель:</strong>Покой в богатстве</p>
            <p><strong>Локация:</strong>Дом(хика)</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default About;