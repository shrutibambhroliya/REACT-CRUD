import React, { useState, useContext } from 'react';
import userContext from '../Context/user.Context';
import { useNavigate } from 'react-router-dom';
const Loginpage = () => {

    const userValue = useContext(userContext);
    console.log('userValue::', userValue);
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SaveData = () => {
        const value = userValue.data.find((ele) => ele.Name === name && ele.Email === email && ele.Password === password);

        if (value) {
            alert('Go with TableData');
            navigate('/Table');
        } else {
            alert('invailed name email and Password')
        }
    }

    return (
        <div>
            <center>
                <div className="form-box">
                    <form className="form">
                        <span className="title">Log In</span>
                        <span className="subtitle">Create a free account with your email.</span>
                        <div className="form-container">
                            <input type="text"
                                value={ name }
                                onChange={ (e) => setName(e.target.value) }
                                className="input"
                                placeholder="Full Name" />

                            <input type="email"
                                value={ email }
                                onChange={ (e) => setEmail(e.target.value) }
                                className="input"
                                placeholder="Email" />

                            <input type="password"
                                value={ password }
                                onChange={ (e) => setPassword(e.target.value) }
                                className="input"
                                placeholder="Password"
                            />
                        </div>
                        <button onClick={ SaveData }>Log In</button>
                    </form>

                </div>
            </center>
        </div>
    )
}

export default Loginpage


