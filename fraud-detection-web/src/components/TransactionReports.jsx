import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import axios from '../services/api';

const TransactionReports = () => {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      const response = await axios.get('/api/reports'); // Endpoint API báo cáo
      setReportData(response.data);
    };

    fetchReports();
  }, []);

  return (
    <div>
      <h2>Phân Tích Báo Cáo Giao Dịch</h2>
      <BarChart width={600} height={300} data={reportData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="totalAmount" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default TransactionReports;