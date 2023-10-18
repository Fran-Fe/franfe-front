import axios from 'axios';

export default async function fetchCafeLists(
  userLat: number,
  userLng: number,
  radius?: number,
  pageNumber?: number,
  pageSize?: number,
) {
  try {
    const authToken = process.env.REACT_APP_FRANFE_TOKEN;
    const headers = {
      authorization: `${authToken}`,
    };
    const params: any = {
      userLat,
      userLng,
    };

    if (radius !== undefined) {
      params.radius = radius;
    }

    if (pageNumber !== undefined) {
      params.pageNumber = pageNumber;
    }

    if (pageSize !== undefined) {
      params.pageSize = pageSize;
    }

    const response = await axios.get(`http://54.241.187.138:3000/cafe/list`, {
      params,
      headers,
    });
    console.log('fetchCafe : ', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching cafes:', error);
    throw error;
  }
}
