import {useState, useRef} from 'react';
import { Navigate } from 'react-router-dom';
import style from './signup.module.css';

import { signup, useAccount, logout, Login } from '../../firebase';


export default function Signin () {
    const [loading, setLoading] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const email = useRef();
    const password = useRef();
    const activeAccount = useAccount();

    if (loggedIn) {
        return (
            <Navigate to={"/"}/>
        )
    }

    // async function handleClick() {
    //     setLoading(true);
    //     try {
    //         signup(email.current.value, password.current.value);
    //     } catch {
    //         console.error();
    //     }
    //     setLoading(false);
    // }

    async function handleLogin() {
        setLoading(true);
        try {
            Login(email.current.value, password.current.value);
            setLoggedIn(true);
        } catch {
            console.error();
        }
        setLoading(false);
    }

    return (
        <div className={style["wrapper"]}>
            <h1>Please Login in with your DHL account</h1>
            <form className={style["form"]}>
                <label>Email Address</label>
                <input className={style["inputBar"]} ref={email} type="email" required></input>
                <label>Password</label>
                <input className={style["inputBar"]} ref={password} type="password" required></input>
                <div className={style["btnGroup"]}>
                    {/* <button className={style["btn"]} disabled={loading || activeAccount} onClick={handleClick}>Sign Up</button> */}
                    <button className={style["btn"]} disabled={loading || activeAccount} onClick={handleLogin}>Login</button>
                </div>
            </form>          
        </div>
    )
}