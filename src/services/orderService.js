import axiosClient from './axiosClient';

const createOrder = async (data) => {
  try {
    const response = await axiosClient.post('/api/orders', data);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    throw error;
  }
};

export default createOrder;