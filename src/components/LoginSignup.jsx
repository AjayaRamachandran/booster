import { Link } from "react-router-dom";
import '../assets/styles/LoginSignup.css'
import React, { useState } from 'react';
import InputField from './InputField.jsx';

function FormButton({text, type}) {
    return (
        <Link to={type === 'login' ? '/login' : '/signup'}>
            <button className="button button-fill">{text}</button>
        </Link>
    )
}

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [usernameHelperText, setUsernameHelperText] = useState(" ");
    const [passwordHelperText, setPasswordHelperText] = useState(" ");
  
    const handleUsernameChange = (e) => {
        setUsernameHelperText(" ");
        setUsernameError(false);

        setUsername(e.target.value);
        // ways usernames can be invalid
        if (e.target.value.trim() === '') {
            setUsernameError(true);
            setUsernameHelperText("This field is required");
        } else {
            const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-"
            const validChars = e.target.value.split('').every(char => charset.includes(char));
            if (!validChars) {
                //setUsernameError(true);
                //setUsernameHelperText("Username cannot contain special characters (^, #, &, etc.)");
            }
        }
    }
    const handlePasswordChange = (e) => {

        let helperText = " "
        setPasswordError(false);

        let strength = 0;
        setPassword(e.target.value);
        let localPassword = e.target.value

        if (localPassword.length > 12) {
            strength += 1;
        }

        if (e.target.value.trim() === '') {
            setPasswordError(true);
            helperText = "This field is required";
        } else {
            if (localPassword.length < 8) {
                //setPasswordError(true);
                //helperText = "Password must be at least 8 characters long";
            }
            const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
            const validChars = e.target.value.split('').every(char => charset.includes(char));
            if (!validChars) {
                strength += 1;
            }
        }
        if (helperText === " ") {
            //helperText = `Password strength: ${strength === 0 ? "Weak" : strength === 1 ? "Moderately Strong" : "Very Strong"}`;
        }
        setPasswordHelperText(helperText);
    }

    return(
        <div className="login-window">
            <div className="login-title">Log In</div>
            <InputField
                label="Username"
                obfuscate="False"
                placeholder="Enter your username"
                helperText={usernameHelperText}
                error={usernameError}
                value={username}
                onChange={handleUsernameChange}
            />
            <InputField
                label="Password"
                obfuscate="True"
                placeholder="Enter your password"
                helperText={passwordHelperText}
                error={passwordError}
                value={password}
                onChange={handlePasswordChange}
            />
            <FormButton text='Submit' type='login' />
        </div>
    )
}

export const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [usernameHelperText, setUsernameHelperText] = useState(" ");
    const [passwordHelperText, setPasswordHelperText] = useState(" ");
  
    const handleUsernameChange = (e) => {
        setUsernameHelperText(" ");
        setUsernameError(false);

        setUsername(e.target.value);
        // ways usernames can be invalid
        if (e.target.value.trim() === '') {
            setUsernameError(true);
            setUsernameHelperText("This field is required");
        } else {
            const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-"
            const validChars = e.target.value.split('').every(char => charset.includes(char));
            if (!validChars) {
                setUsernameError(true);
                setUsernameHelperText("Username cannot contain special characters (^, #, &, etc.)");
            }
        }
    }
    const handlePasswordChange = (e) => {

        let helperText = " "
        setPasswordError(false);

        let strength = 0;
        setPassword(e.target.value);
        let localPassword = e.target.value

        if (localPassword.length > 12) {
            strength += 1;
        }

        if (e.target.value.trim() === '') {
            setPasswordError(true);
            helperText = "This field is required";
        } else {
            if (localPassword.length < 8) {
                setPasswordError(true);
                helperText = "Password must be at least 8 characters long";
            }
            const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
            const validChars = e.target.value.split('').every(char => charset.includes(char));
            if (!validChars) {
                strength += 1;
            }
        }
        if (helperText === " ") {
            helperText = `Password strength: ${strength === 0 ? "Weak" : strength === 1 ? "Moderately Strong" : "Very Strong"}`;
        }
        setPasswordHelperText(helperText);
    }

    return(
        <div className="login-window">
            <div className="login-title">Sign Up</div>
            <InputField
                label="Username"
                obfuscate="False"
                placeholder="Create a username"
                helperText={usernameHelperText}
                error={usernameError}
                value={username}
                onChange={handleUsernameChange}
            />
            <InputField
                label="Password"
                obfuscate="True"
                placeholder="Create a password"
                helperText={passwordHelperText}
                error={passwordError}
                value={password}
                onChange={handlePasswordChange}
            />
            <FormButton text='Create Account' type='login' />
        </div>
    )
}

export default Login;