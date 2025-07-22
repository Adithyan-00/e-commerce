import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/login.module.css';
import { useAuth } from '../components/authentification/Auth';

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const { dispatch } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.get(`http://localhost:5000/users?email=${form.email}`);
    const user = res.data[0];

    if (user && user.password === form.password) {
      localStorage.setItem('user', JSON.stringify(user));
      dispatch({ type: 'LOGIN', payload: user });

      if (user.role === 'admin') {
        alert('Admin login successful');
        navigate('/dashboard'); // ✅ Fixed here
      } else {
        alert('User login successful');
        navigate('/collection');
      }
    } else {
      alert('Invalid email or password');
    }
  } catch (err) {
    console.error(err);
    alert('Login failed');
  }
};


  const GotoRegister = () => {
    navigate('/register');
  };

  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <h2 className={styles.title}>Login</h2>
        <form onSubmit={handleLogin}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            className={styles.input}
            value={form.email}
            onChange={handleChange}
            required
          />

          <label className={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            className={styles.input}
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className={styles.button}>Login</button>
        </form>

        <span>No account yet? Create one now 👇</span>
        <button onClick={GotoRegister} className={styles.button}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Login;
