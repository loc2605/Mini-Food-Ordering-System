import axiosClient from './axiosClient';

const getFoods = async () => {
  try {
    const response = await axiosClient.get('/api/foods');
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    throw error;
  }
};

export default getFoods;