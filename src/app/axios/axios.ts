import axios from 'axios';

export const axiosPublic = axios.create({
  baseURL: process.env.BACKEND_URL,
});
