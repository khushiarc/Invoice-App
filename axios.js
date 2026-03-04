import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // this points to your backend
});

export default API;
