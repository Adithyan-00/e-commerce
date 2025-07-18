import React, { useState } from 'react';
import styles from "../styles/Support.module.css"

function Support() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  
  };

  return (
    <div className={styles.box}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input 
          type="text" 
          name="name" 
          value={form.name} 
          onChange={handleChange} 
        />

        <label htmlFor="email">Your Email</label>
        <input 
          type="email" 
          name="email" 
          value={form.email} 
          onChange={handleChange} 
        />

        <label htmlFor="message">Message</label>
        <textarea 
          name="message" 
          rows="5"
          value={form.message} 
          onChange={handleChange} 
        />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Support;
