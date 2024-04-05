import React, { useState } from 'react';
import { auth } from '../../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";


import Button from '../../components/Button/Button';
import { InputBox } from '../../components/InputBox/InputBox';
import Hyperlinks from '../../components/Hyperlinks/Hyperlinks';

import './Signing.css'



const SignIn = ({ setIsAuth }) => {

    let navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem("isAuth", email);
            setIsAuth(true)
            navigate("/dashboard")
        } catch (error) {
            setError('Your Information Are Wrong')
            console.error('Error signing in:', error);
        }
    };

    return (
        <div className='sign-page'>
            <div className='sign-container'>
                <header className='hdr'>
                    <span className='h2'>Sign In</span>
                    <div className='hdrLine'>
                        <span>Not registered yet?</span>
                        <Hyperlinks linkText={'Sign Up'} linkHref={'/signup'} />
                    </div>
                </header>

                <form className='form' onSubmit={handleSignIn}>
                    {error && <span className='err-msg'>{error}</span>}

                    <InputBox label={'Email'} inType={'email'} inPlaceHolder={'Email'} inValue={email} inFun={(e) => setEmail(e.target.value)} />

                    <InputBox label={'Password'} inType={'password'} inPlaceHolder={'Password'} inValue={password} inFun={(e) => setPassword(e.target.value)} />
                    <div className='form-bottom'>

                        <Button btnText={"Sign In"} btnType={'submit'} />

                        <Hyperlinks linkText={'Forgot password?'} linkHref={'/'} style={{ "color": "#000" }} />
                    </div>
                </form>
            </div></div>
    );
}

export default SignIn;
