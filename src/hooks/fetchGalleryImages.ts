import axios from 'axios';

export default async function fetchGalleryImages(
  category: number,
  pageSize: number,
  pageNumber: number,
) {
  try {
    const authToken = process.env.REACT_APP_FRANFE_TOKEN;
    const headers = {
      authorization: `${authToken}`,
    };
    const params: any = {
      category,
      pageSize,
      pageNumber,
    };

    const response = await axios.get(`http://54.241.187.138:3000/gallery`, {
      params,
      headers,
    });
    console.log('fetchGalleryImages : ', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching galley images : ', error);
    throw error;
  }
}
