import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const socket = io('http://your-api-endpoint'); // Đổi thành endpoint của bạn

const RealTimeMonitor = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    socket.on('transaction', (data) => {
      setTransactions((prev) => [data, ...prev]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Paper>
      <h2>Giám Sát Giao Dịch Thời Gian Thực</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Thời Gian</TableCell>
            <TableCell>Số Tài Khoản</TableCell>
            <TableCell>Số Tiền</TableCell>
            <TableCell>Trạng Thái</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((txn, index) => (
            <TableRow key={index}>
              <TableCell>{txn.timestamp}</TableCell>
              <TableCell>{txn.account}</TableCell>
              <TableCell>{txn.amount}</TableCell>
              <TableCell>{txn.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default RealTimeMonitor;