import React from 'react';
import styles from '../styles/About.module.css'
function About() {
  return (
    <div className={styles.aboutContainer}>
      <section className={styles.hero}>
        <h1>About NeuWear</h1>
        <p>We redefine fashion with innovation and comfort.</p>
      </section>

      <section className={styles.content}>
        <h2>Our Mission</h2>
        <p>
          At NeuWear, we blend trendsetting designs with top-quality materials to bring you clothing that's as functional as it is stylish.
        </p>

        <h2>Who We Are</h2>
        <p>
          Founded in 2025, NeuWear is a youth-driven brand focused on delivering affordable fashion inspired by streetwear, minimalism, and global trends.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔️ Trendy and timeless pieces</li>
          <li>✔️ Premium fabric quality</li>
          <li>✔️ Fast delivery and easy returns</li>
          <li>✔️ Customer-first support</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
