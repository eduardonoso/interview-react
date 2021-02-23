import React from 'react';
import tokenService from './token';

/**
 *
 * @param {{}} axios
 * @param history
 */
export const axiosConfig = (axios, history) => {
  axios.defaults.baseURL = `/api`;
  axios.defaults.headers.common['Authorization'] = `Bearer ${tokenService.getToken()}`;

  axios.interceptors.response.use(res => {
    return res;
  }, error => {
    return Promise.reject(error);
  });
};
