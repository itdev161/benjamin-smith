import React, { useState } from 'react';
import axios from 'axios';
 activity-8
import { useHistory } from 'react-router-dom';

const Register = ({ authenticateUser }) => {
    let history = useHistory();


const Register = () => {
 master
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });
 activity-8
    const [errorData, setErrorData] = useState({ errors: null });

    const { name, email, password, passwordConfirm } = userData;
    const { errors } = errorData;


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
        }
        else {
            const newUser = {
                name: name,
                email: email,
                password: password,
            }

            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }

                const body = JSON.stringify(newUser);
                const res = await axios.post('http://localhost:5000/api/users', body, config);
 activity-8

                localStorage.setItem('token', res.data.token);
                history.push('/');
            } catch (error) {
                localStorage.removeItem('token');

                setErrorData({
                    ...errors,
                    errors: error.response.data.errors
                })
            }

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