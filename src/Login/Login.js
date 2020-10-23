import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./Login.css";
import Logo from '../Header/logo.png';
import { LogIn } from "./auth";
import { useDispatch, useSelector } from 'react-redux';
//import Register from './Register';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = useSelector(state=>state.auth);
    const { loading, userInfo, error } = auth;
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(userInfo){
            history.push('/');
        }
        return () => {
            
        }
    }, [userInfo]);

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
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
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
                
                <button className='login_registerButton'> <Link to="/register" className="login_registerButton_Link">Create your Account</Link></button>
               
            </div>
        </div>
    )
}

export default Login
