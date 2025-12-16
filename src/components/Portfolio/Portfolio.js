import React from 'react';
import styles from './Portfolio.module.css';

function Portfolio() {
  const projects = [
    { id: 1, title: 'Casino-bot', description: 'Четкое казино без накрутки', stack: ['React', 'Post', 'API'] },
    { id: 2, title: 'Магазин Одежды Siaodqq', description: 'Красивый магазин, красивый магазин, что тут еще сказать', stack: ['Figma', 'CSS', 'React'] },
    { id: 3, title: 'GitHub', description: 'Веб-сервис для хостинга IT-проектов и их совместной разработки', stack: ['Node.js', 'React', 'Monster Energy Pipeline Punch'] },
  ];

  return (
    <section id="portfolio" className={`${styles.portfolioSection} fade-in-up`}>
      <div className={styles.container}>
        <h2 className={styles.title}>Мои Проекты</h2>
        <div className={styles.grid}>
          {projects.map((p) => (
            <div key={p.id} className={styles.card}>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.description}</p>
              <div className={styles.tags}>
                {p.stack.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;