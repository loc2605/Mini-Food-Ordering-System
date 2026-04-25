import axiosClient from './axiosClient';

const createPayment = async (data) => {
  try {
    const response = await axiosClient.post('/api/payments', data);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    throw error;
  }
};

export default createPayment;