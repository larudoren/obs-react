import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // Hard-coded user data
    const validUsername = 'admin';
    const validPassword = 'admin';

    if (username === validUsername && password === validPassword) {
        props.onLogin();
    }
  }

  return (
    <>
    <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="User ID" value={username} onChange={(event) => setUsername(event.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
            <Button type="submit">Login</Button>
            <br />
            <button className="link-btn">Forgot My Password</button>
        </Form.Group>
      
    </Form>
    </>
  );
}

export default Login;