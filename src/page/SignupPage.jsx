import React, { useState, useContext } from 'react';
import userContext from '../Context/user.Context';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css'

const SignupPage = () => {
    const userData = useContext(userContext);
    console.log('userData:::', userData)
    const [name, setNmae] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const route = useNavigate();

    const saveData = () => {
        if (name === '' || email === "" || password === "") {
            alert('Fill This Information')
        } else {
            const object = {
                Name: name,
                Email: email,
                Password: password
            }
            userData.setData([...userData.data, object]);
        };
        route('Loginpage');
    }




    return (
        <div>
            <center>
                <div className="form-box">
                    <form className="form">
                        <span className="title">Sign up</span>
                        <span className="subtitle">Create a free account with your email.</span>

                        <div className="form-container">

                            <input type="text"
                                value={ name }
                                onChange={ (e) => setNmae(e.target.value) }
                                className="input"
                                placeholder=" Name" />

                            <input type="email"
                                value={ email }
                                onChange={ (e) => setEmail(e.target.value) }
                                className="input"
                                placeholder="Email" />

                            <input type="password"
                                value={ password }
                                onChange={ (e) => setPassword(e.target.value) }
                                className="input"
                                placeholder="Password" />




                        </div>
                        <button onClick={ saveData } >Sign up</button>
                    </form>

                </div>
            </center>
        </div>
    )
}

export default SignupPage

