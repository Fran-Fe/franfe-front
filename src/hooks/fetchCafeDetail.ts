import axios from 'axios';

export default async function fetchCafeDetail(uuid: string) {
  try {
    const isWin = 1;
    const authToken = process.env.REACT_APP_FRANFE_TOKEN;
    const headers = {
      authorization: `${authToken}`,
    };
    const response = await axios.get(`http://54.241.187.138:3000/cafe/infos/${uuid}`, {
      params: {
        isWin,
      },
      headers,
    });
    console.log('fetchCafeDetail : ', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching cafes:', error);
    throw error;
  }
}
