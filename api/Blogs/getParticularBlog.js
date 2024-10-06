import axios from 'axios';
import { appEnv } from '@/helpers';

const getParticularBlog = async (blogSlug) => {
  const config = {
    method: 'get',
    url: `${appEnv.API_URL}/api/blogs/${blogSlug}`
  };

  const res = await axios(config);
  return res;
}

export default getParticularBlog;