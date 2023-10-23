// useAxiosSecure.js
import { useEffect } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom'; // Use useNavigate from React Router
import useAuth from './useAuth';

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate(); // Use useNavigate to navigate in React Router

  const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
  });




  useEffect(() => {
  axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    });

//     (error) => {
//       return Promise.reject(error);
//     }
//   );

  axiosSecure.interceptors.response.use((response) => 
    response,
    
    async (error) => {
      if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        // Log out the user and navigate to the login page
        await logOut();
        navigate('/login'); // Use navigate to go to the login page
      }
      return Promise.reject(error);
    }
  );
  }, [logOut, navigate, axiosSecure]);
  return [axiosSecure]; // Return the configured Axios instance
};

export default useAxiosSecure;
