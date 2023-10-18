import axios from 'axios';

export default async function fetchRankings() {
  try {
    const authToken = process.env.REACT_APP_FRANFE_TOKEN;
    const headers = {
      authorization: `${authToken}`,
    };
    const response = await axios.get(`http://54.241.187.138:3000/cafe/rankings`, {
      headers,
    });
    console.log('fetchCafeDetail : ', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching cafes:', error);
    throw error;
  }
}
