import React, {useState} from 'react'
import { Link,useHistory } from 'react-router-dom';
import "./Login.css";
import Logo from '../Header/logo.png';
import { LogIn } from "./auth";
import { useDispatch } from 'react-redux';
//import { useStateValue } from '../StateProvider/StateProvider';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const login = (e) => {
        e.preventDefault();
        const user = {
            email, password
        }
        dispatch(LogIn(user));
    }
    
    return (
        <div className='login'>
            <div className='login_container'>
                <Link to="/" className="login_link">
                    <img className="login_logo" src={Logo} alt="logo"/>
                </Link>
                <h1>Login</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' id="email" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' onClick={login} className="login_signInButton">Login</button>
                </form>
                <p>
                    By signing-in you agree to the JNmart Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                
                <button onClick={login} className='login_registerButton'>Create your Account</button>
               
            </div>
        </div>
    )
}

export default Login
