import axios from 'axios';
import { appEnv } from '@/helpers';

const getAllBlogsAdmin = async () => {
  const authToken = localStorage.getItem('auth_token');

  const config = {
    method: 'get',
    url: `${appEnv.API_URL}/api/blogs/get-all-blogs`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  };

  const res = await axios(config);

  return res;
};

export default getAllBlogsAdmin;
