import React, { useState } from 'react';
import { RegisterStyle } from '../style';
import { Button, TextField } from '@mui/material';

const Register = () => {
    const [regNickname, setRegNickname] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [regPassconf, setRegPassconf] = useState('');

    return (
        <div className={RegisterStyle.wrapper}>
            <div className={RegisterStyle.content}>
                <form method="POST" className={RegisterStyle.regForm}>
                    <h2 className={RegisterStyle.h2}>REGISTRATION</h2>
                    <TextField
                        style={{
                            marginBottom: '25px',
                            width: '70%',
                        }}
                        label="Nickname"
                        variant="outlined"
                        onChange={({ target }) => setRegNickname(target.value)}
                    />
                    <TextField
                        style={{
                            marginBottom: '25px',
                            width: '70%',
                        }}
                        label="E-mail"
                        type="email"
                        variant="outlined"
                        onChange={({ target }) => setRegEmail(target.value)}
                    />
                    <TextField
                        style={{
                            marginBottom: '25px',
                            width: '70%',
                        }}
                        label="Password"
                        type="password"
                        variant="outlined"
                        onChange={({ target }) => setRegPassword(target.value)}
                    />
                    <TextField
                        style={{
                            marginBottom: '25px',
                            width: '70%',
                        }}
                        label="Confirm password"
                        type="password"
                        variant="outlined"
                        onChange={({ target }) => setRegPassconf(target.value)}
                    />
                    <Button
                        variant={'contained'}
                        size="lg"
                        style={{
                            marginTop: '25px',
                            backgroundColor: '#00d4ff',
                            width: '150px',
                            height: '45px',
                            fontFamily: 'Segoe UI',
                            fontSize: '15px',
                            fontWeight: '500',
                            letterSpacing: '5px',
                        }}
                    >
                        Register
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Register;
