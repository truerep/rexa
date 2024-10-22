import axios from 'axios';
import { appEnv } from '@/helpers';

const getParticularBlogAdmin = async (blogSlug) => {
  const authToken = localStorage.getItem('auth_token');
  
  const config = {
    method: 'get',
    url: `${appEnv.API_URL}/api/blogs/get-any-blog/${blogSlug}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  };

  const res = await axios(config);
  return res;
}

export default getParticularBlogAdmin;