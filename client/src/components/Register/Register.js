 activity-9
import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Register = ({ authenticateUser }) => {
    let history = useHistory();

import React, { useState } from 'react';
import axios from 'axios';
 activity-8
import { useHistory } from 'react-router-dom';

const Register = ({ authenticateUser }) => {
    let history = useHistory();


const Register = () => {
 master
 master
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
 activity-9
        passwordConfirm: ''
    });

        passwordConfirm: '',
    });
 activity-8
 master
    const [errorData, setErrorData] = useState({ errors: null });

    const { name, email, password, passwordConfirm } = userData;
    const { errors } = errorData;

 activity-9
    const onChange = e => {
        const { name, value } = e.target;
        setUserData({
            ...userData,   
            [name]: value
        })
    }

    const registerUser = async () => {
        if (password !== passwordConfirm) {
            console.log ('Passwords do not match');


    const { name, email, password, passwordConfirm } = userData;
 master

    const onChange = e => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        })
    }

 activity-8
    const registerUser = async () => {

    const register = async () => {
master
        if (password !== passwordConfirm) {
            console.log('Passwords do not match');
 master
        }
        else {
            const newUser = {
                name: name,
                email: email,
 activity-9
                password: password

                password: password,
 master
            }

            try {
                const config = {
 activity-9
                    headers:{

                    headers: {
 master
                        'Content-Type': 'application/json'
                    }
                }

                const body = JSON.stringify(newUser);
                const res = await axios.post('http://localhost:5000/api/users', body, config);
 activity-9
                
                // Store user data and redirect
                localStorage.setItem('token', res.data.token);
                history.push('/');
            } catch (error) {
                //clear user data and set errors

 activity-8

                localStorage.setItem('token', res.data.token);
                history.push('/');
            } catch (error) {
 master
                localStorage.removeItem('token');

                setErrorData({
                    ...errors,
                    errors: error.response.data.errors
                })
            }
 activity-9
            authenticateUser();
        }
    }    
    
return (
    <div>
        <h2>Register</h2>
        <div>
            <input 
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => onChange(e)} />
        </div>
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
      <input 
          type="text"
          placeholder="Confirm Password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={e => onChange(e)} />
        </div>
        <div>
            <button onClick={() => registerUser()}>Register</button>
        </div>
        <div>
            {errors && errors.map(error => 
                <div key={error.msg}>{error.msg}</div>)}
        </div>
    </div>
) 
}

export default Register;


            authenticateUser();

                console.log(res.data);
            } catch (error) {
                console.error(error.response.data);
                return;
            }
 master
        }
    }
    return (
        <div>
            <h2>Register</h2>
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={e => onChange(e)}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={e => onChange(e)}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={e => onChange(e)}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Confirm Password"
                    name="passwordConfirm"
                    value={passwordConfirm}
                    onChange={e => onChange(e)}
                />
            </div>
            <div>
 activity-8
                <button onClick={() => registerUser()}>Register</button>
            </div>
            <div>
                {errors && errors.map(error =>
                    <div key={error.msg}>{error.msg}</div>)}

                <button onClick={() => register()}>Register</button>
 master
            </div>
        </div>
    )
}

export default Register
 master
