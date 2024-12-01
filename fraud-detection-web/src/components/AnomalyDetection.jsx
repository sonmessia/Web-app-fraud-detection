import React, { useEffect, useState } from 'react';
import { Alert, AlertTitle, List, ListItem, ListItemText, Paper } from '@mui/material';
import axios from '../services/api';

const AnomalyDetection = () => {
  const [anomalies, setAnomalies] = useState([]);

  useEffect(() => {
    const fetchAnomalies = async () => {
      const response = await axios.get('/api/anomalies'); // Endpoint API phát hiện bất thường
      setAnomalies(response.data);
    };

    fetchAnomalies();
  }, []);

  return (
    <Paper>
      <h2>Phát Hiện Hành Vi Bất Thường</h2>
      {anomalies.length > 0 ? (
        <Alert severity="warning">
          <AlertTitle>Cảnh Báo</AlertTitle>
          Có {anomalies.length} giao dịch bất thường!
        </Alert>
      ) : (
        <Alert severity="success">Không có giao dịch bất thường.</Alert>
      )}
      <List>
        {anomalies.map((anomaly, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`Tài khoản: ${anomaly.account}`}
              secondary={`Chi tiết: ${anomaly.detail}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default AnomalyDetection;