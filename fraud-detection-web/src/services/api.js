import axios from "axios";

// Cấu hình base URL của API Gateway
const api = axios.create({
  baseURL: "https://ez9v1mgi1b.execute-api.ap-southeast-1.amazonaws.com/default",
});

export default api;