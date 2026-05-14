import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProfile = () => api.get('/profile');
export const getSkills = () => api.get('/skills');
export const getProjects = () => api.get('/projects');
export const submitContact = (data) => api.post('/contact', data);

export default api;
