activity-10
import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Login = ({authenticateUser}) => {
    let history = useHistory();
    const[userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const [errorData, setErrorData] = useState({errors: null});

    const {email, password} = userData;
    const {errors} = errorData;

    const onChange = e => {
        const {name, value} = e.target;
        setUserData({
            ...userData,
            [name]: value
        });

 activity-9

 activity-8
 master
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = ({ authenticateUser }) => {
 activity-9
  let history = useHistory();
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });
  const [errorData, setErrorData] = useState({ errors: null });

  const { email, password } = userData;
  const { errors } = errorData;

  const onChange = e => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    }) 
  } 

  const loginUser = async () => {
    const newUser = {
      email: email,
      password: password
    }

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const body = JSON.stringify(newUser);
      const res = await axios.post('http://localhost:5000/api/login', body, config);

      // Store user data and redirect
      localStorage.setItem('token', res.data.token);
      history.push('/')
      
    } catch (error) {
      // Clear user data
      localStorage.removeItem('token');

      setErrorData({
        ...errors,
        errors: error.response.data.errors
      })
    }

    authenticateUser();
  }

  return (
    <div>
      <h2>Log In</h2>
      <div>
        <input 
          type="text" 
          placeholder="Email" 
          name="email" 
          value={email} 
          onChange={e => onChange(e)} />
      </div>
      <div>
        <input 
          type="text" 
          placeholder="Password" 
          name="password" 
          value={password} 
          onChange={e => onChange(e)} />
      </div>
      <div>
        <button onClick={() => loginUser()}>Log In</button> 
      </div>
      <div>
        {errors && errors.map(error => 
          <div key={error.msg}>{error.msg}</div>)}
      </div>
    </div>
  )
  

    let history = useHistory();
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const [errorData, setErrorData] = useState({ errors: null });

    const { email, password } = userData;
    const { errors } = errorData;

    const onChange = e => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        })
master
    }

    const loginUser = async () => {
        const newUser = {
            email: email,
            password: password
        }

 activity-10
        try{

        try {
 master
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const body = JSON.stringify(newUser);
            const res = await axios.post('http://localhost:5000/api/login', body, config);

            localStorage.setItem('token', res.data.token);
            history.push('/');
 activity-10
        }catch(error){

        } catch (error) {
 master
            localStorage.removeItem('token');

            setErrorData({
                ...errors,
                errors: error.response.data.errors
 activity-10
            });

            })
 master
        }

        authenticateUser();
    }
 activity-10


 master
    return (
        <div>
            <h2>Log In</h2>
            <div>
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={e => onChange(e)} />
            </div>
            <div>
 activity-10
                <input 

                <input
 master
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={e => onChange(e)} />
            </div>
            <div>
                <button onClick={() => loginUser()}>Log In</button>
            </div>
            <div>
                {errors && errors.map(error =>
                    <div key={error.msg}>{error.msg}</div>)}
            </div>
        </div>
activity-10
    );

    )

import React from 'react';

const Login = () => {
    return <div>Login</div>;
master
 master
 master
}

export default Login;