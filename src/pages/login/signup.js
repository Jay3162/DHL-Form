import react, {useState, useRef} from 'react';
import { Redirect } from 'react-router-dom';
import style from './login/signup.module.css';
import { signup, useAccount, logout } from '../../firebase';


export default function signin () {
    const [loading, setLoading] = useState(false);
    const email = useRef();
    const password = useRef();
    const activeAccount = useAccount();

    async function handleClick () {
        setLoading(true);
        try {
            signup(email.current.value, password.current.value);
        } catch {
            console.error();
        }
        setLoading(false);
    }

    async function handleLogin () {
        setLoading(true);
        try {
            login(email.current.value, password.current.value);
        } catch {
            console.error();
        }
        setLoading(false);
    }

    async function handleLogout() {
        setLoading(true);
        try {
            logout();
        } catch {
            console.error();
        }
        setLoading(false);
    }
    return (
        <div>
            <input ref={email}></input>
            <input ref={password} type="password"></input>
            <button disabled={loading || activeAccount} onClick={handleClick()}>Sign Up</button>
            <button disabled={loading || activeAccount} onClick={handleLogin()}>Login</button>
            <button disabled={loading || !activeAccount} onClick={handleLogout()}>Logout</button>
            
        </div>
    )
}