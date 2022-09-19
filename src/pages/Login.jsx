import React, { useState } from 'react';
import { LoginStyle, RegisterStyle } from '../style';
import { Button, TextField } from '@mui/material';
import { user_login } from '../http/login';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(false);

    const login = () => {
        setDisabled(true);
        user_login({ email, password })
            .then((response) => {
                console.log(response);
            })
            .finally(() => {
                setDisabled(false);
            });
    };

    return (
        <div className={LoginStyle.wrapper}>
            <div className={LoginStyle.content}>
                <form method="POST" className={LoginStyle.logForm}>
                    <h2 className={LoginStyle.h2}>Login</h2>
                    <TextField
                        style={{
                            marginBottom: '25px',
                            width: '70%',
                        }}
                        label={'Email'}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                    <TextField
                        label={'Password'}
                        style={{
                            marginBottom: '25px',
                            width: '70%',
                        }}
                        type={'password'}
                        onChange={({ target }) => setPassword(target.value)}
                    />
                    <Button
                        disabled={disabled}
                        onClick={() => login()}
                        variant={'contained'}
                        style={{
                            marginTop: '15px',
                            backgroundColor: '#00d4ff',
                            width: '150px',
                            height: '45px',
                            fontFamily: 'Segoe UI',
                            fontSize: '14px',
                            fontWeight: '500',
                            letterSpacing: '5px',
                        }}
                    >
                        LOGIN
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Login;
