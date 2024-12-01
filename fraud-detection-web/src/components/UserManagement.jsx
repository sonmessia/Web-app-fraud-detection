import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Paper } from '@mui/material';
import axios from '../services/api';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('/api/users'); // Endpoint API người dùng
      setUsers(response.data);
    };

    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`/api/users/${id}`);
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <Paper>
      <h2>Quản Lý Người Dùng</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Họ Tên</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Vai Trò</TableCell>
            <TableCell>Thao Tác</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Button
                  color="secondary"
                  onClick={() => deleteUser(user.id)}
                >
                  Xóa
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default UserManagement;
