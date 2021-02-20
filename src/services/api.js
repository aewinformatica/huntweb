import axios from 'axios';

const baseURL = process.env.port || "http://localhost:3001/api";

const api = axios.create({
  baseURL,
});

export default api;
