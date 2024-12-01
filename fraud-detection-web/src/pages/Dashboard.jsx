import React from 'react';
import { Grid, Paper } from '@mui/material';
import RealTimeMonitor from '../components/RealTimeMonitor';
import AnomalyDetection from '../components/AnomalyDetection';
import TransactionReports from '../components/TransactionReports';

const Dashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Bảng Điều Khiển</h1>
      <Grid container spacing={3}>
        {/* Giám sát giao dịch */}
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '15px' }}>
            <RealTimeMonitor />
          </Paper>
        </Grid>

        {/* Phát hiện bất thường */}
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '15px' }}>
            <AnomalyDetection />
          </Paper>
        </Grid>

        {/* Phân tích báo cáo */}
        <Grid item xs={12}>
          <Paper style={{ padding: '15px' }}>
            <TransactionReports />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;