import axiosClient from './axiosClient';

export const registerUser = async (data) => {
  try {
    const response = await axiosClient.post('/api/users/register', data);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    throw error;
  }
};

export const loginUser = async (data) => {
  try {
    const response = await axiosClient.post('/api/users/login', data);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    throw error;
  }
};