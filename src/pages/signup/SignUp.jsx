import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useNavigate } from "react-router-dom";
import './Signing.css'

import Button from '../../components/Button/Button';
import { InputBox } from '../../components/InputBox/InputBox';
import Hyperlinks from '../../components/Hyperlinks/Hyperlinks';


function SignUp({ setIsAuth }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();


    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            localStorage.setItem("isAuth", true);
            setIsAuth(true)
            navigate('dashboard')
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <div className='sign-page'>
            <div className='sign-container'>
                <header className='hdr'>
                    <span className='h2'>Sign Up</span>
                    <div className='hdrLine'>
                        <span>Already registered?</span>
                        <Hyperlinks linkText={'Sign In'} linkHref={'/signin'} />
                    </div>
                </header>

                <form className='form' onSubmit={handleSignUp}>

                    <InputBox label={'Email'} inType={'email'} inPlaceHolder={'Email'} inValue={email} inFun={(e) => setEmail(e.target.value)} />
                    <InputBox label={'Password'} inType={'password'} inPlaceHolder={'Password'} inValue={password} inFun={(e) => setPassword(e.target.value)} />
                    <div className='form-bottom'>
                        <Button btnText={"Sign Up"} btnType={'submit'} />

                    </div>
                </form>
            </div></div>
    );
}

export default SignUp;
