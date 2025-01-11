import React, { useState, useEffect } from 'react';

import fb from '../../firebase';
// import './BlogComponent.css'; // Custom CSS for styling

const db = fb.firestore();
const users = db.collection('users');

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!username || !password) {
      setError('Both fields are required.');
      return;
    }

    setError('');

    try {
      const userSnapshot = await users.where('email', '==', username).get();
      if (userSnapshot.empty) {
        setError('User not found.');
        return;
      }

      // Assuming password is stored in plain text (not recommended)
      const userData = userSnapshot.docs[0].data();
      if (userData.password !== password) {
        setError('Incorrect password.');
        return;
      }

      console.log('Logging in with:', { username, password });
      // Perform login logic here (e.g., API call)
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred during login.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="username">Username:</label>
          <input
            style={styles.input}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="password">Password:</label>
          <input
            style={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
    container: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '24px',
      color: '#333',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      marginBottom: '5px',
      fontWeight: 'bold',
      color: '#555',
    },
    input: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '3px',
      fontSize: '16px',
    },
    error: {
      color: 'red',
      marginBottom: '15px',
      textAlign: 'center',
    },
    button: {
      padding: '10px',
      border: 'none',
      borderRadius: '3px',
      backgroundColor: '#007bff',
      color: '#fff',
      fontSize: '16px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

export default LoginPage;