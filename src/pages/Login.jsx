import React, { useState } from 'react'

import styles from './login.styles.module.scss'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async (event) => {
    event.preventDefault()
    const auth = getAuth();

    try {
      if (!email || !password || email === '' || password === '') {
        alert('Por favor rellene todos los campos')
        return
      }
      signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        console.log(userCredential)
      })
      navigate('/personajes');
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={styles.loginContainer}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Correo:</label>
          <input 
            type='email'
            name='email'
            value={email}
            onChange={
              (event) => setEmail(event.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor='password'>Contraseña:</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={
              (event) => setPassword(event.target.value)
            }
          />
        </div>

        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  )
}

export default Login