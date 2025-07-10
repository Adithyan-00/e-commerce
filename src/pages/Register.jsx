import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import styles from '../styles/register.module.css' 

function Register() {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleRegister = async (e) => {
    e.preventDefault() 

    try {
      const result = await axios.get(`http://localhost:5000/users?email=${form.email}`)
      if (result.data.length > 0) {
        alert("Email already exists")
        return
      }

      await axios.post('http://localhost:5000/users', form)
      alert("Registered Successfully ")
      navigate('/login')
    } catch (err) {
      console.error(err)
      alert("Registration Failed ")
    }
  }

  return (
    <div className={styles.register}>
      <div className={styles.formContainer}>
        <form onSubmit={handleRegister}>
          <h1>Register</h1>

          <label className={styles.label}>Name</label>
          <input className={styles.input}
            type="text"
            id="userName"
            name="userName"
            placeholder="Enter your name"
            value={form.userName}
            onChange={handleChange}
            required
          />

          <label className={styles.label}>Email</label>
          <input className={styles.input}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label className={styles.label}>Password</label>
          <input className={styles.input}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button className={styles.button} type="submit">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register
