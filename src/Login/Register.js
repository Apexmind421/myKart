import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./Register.css";
import Logo from '../Header/logo.png';
import { SignUp } from "./auth";
import { useDispatch, useSelector } from 'react-redux';
//import Login from './Login';

function Register() {
 
    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [rePassword, setRePassword] = useState('');
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

    const register = (e) => {
        e.preventDefault();
        const user = {
            firstName, lastName, email, password 
        }
        dispatch(SignUp(user));
    }

    return (
        <div className='register'>
            <div className='register_container'>
                <Link to="/" className="register_link">
                    <img className="login_logo" src={Logo} alt="logo"/>
                </Link>
                <h1>Register</h1>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                <form>
                    <h5>First Name</h5>
                    <input type='text' id="firstname" name="firstname" value={firstName} onChange={e => setFirstName(e.target.value)} />
                    <h5>Last Name</h5>
                    <input type='text' id="lastname" name="lastname" value={lastName} onChange={e => setLastName(e.target.value)} />
                    <h5>E-mail</h5>
                    <input type='text' id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' id="email" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' onClick={register} className="register_signInButton">Create Account</button>
                </form>
                <p>
                    By registering you agree to the JNmart Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                
                <button className='register_registerButton'><Link to="/login" className='register_registerButton_link'>Already have account?</Link></button>
               
            </div>
        </div>
    )
}

export default Register
