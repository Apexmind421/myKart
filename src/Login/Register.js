import React from 'react';
import "./Login.css";

function Register({ isRegister }) {
    const [Register, isRegister] = React.useState(false);
    if (Register) {
        return (
            <div className='login_container'>
                <h5>First Name</h5>
                <input type='text' value="" />
                <h5>Last Name</h5>
                <input type='text' value="" />
            </div>
        )
    }
}

export default Register
