import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Kiểm tra thông tin đăng nhập
    if (username === 'admin' && password === 'admin1') {
      // Lưu trạng thái đăng nhập
      localStorage.setItem('isAdmin', true);
      navigate('/dashboard'); // Điều hướng đến trang Dashboard
    } else {
      setError('Tên tài khoản hoặc mật khẩu không đúng.');
    }
  };
  const handleKeyDown = (e) =>
  {
    if (e.key === 'Enter')
    {
      handleLogin();
    }
  };
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Paper style={{ padding: '20px', width: '400px' }}>
        <Typography variant="h5" gutterBottom>Đăng Nhập</Typography>
        {error && <Typography color="error">{error}</Typography>}
        <TextField
          label="Tên tài khoản"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <TextField
          label="Mật khẩu"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '15px' }}
          onClick={handleLogin}
        >
          Đăng Nhập
        </Button>
      </Paper>
    </Grid>
  );
};

export default Login;