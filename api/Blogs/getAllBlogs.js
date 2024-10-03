import axios from 'axios';
import { appEnv } from '@/helpers';

const getAllBlogs = async () => {
  const config = {
    method: 'get',
    url: `${appEnv.API_URL}/api/blogs`,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  const res = await axios(config);

  return res;
};

export default getAllBlogs;
