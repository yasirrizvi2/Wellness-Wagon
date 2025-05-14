import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../utils/axiosinstance';
import { useNavigate } from 'react-router-dom';
import { sharedStyles as styles } from '../styles/sharedstyles'; // Import shared styles

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/api/login', { email, password });
      toast.success(response.data.message || 'Login successful!');
      setEmail('');
      setPassword('');
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Login failed. Please try again.';
      toast.error(errorMessage);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.title}>Wellness Wagon</h1>
        <p style={styles.subtitle}>Welcome back! Please log in to your account.</p>

        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>

        <p style={styles.linkText}>
          Don’t have an account?
          <button onClick={() => navigate('/register')} style={styles.linkButton}>Register</button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
