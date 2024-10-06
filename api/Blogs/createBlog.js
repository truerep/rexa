import axios from 'axios';
import { appEnv } from '@/helpers';

const createBlog = async (blogData) => {
    const authToken = localStorage.getItem('auth_token');

    const config = {
        method: 'post',
        url: `${appEnv.API_URL}/api/blogs`,
        data: blogData,
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    };

    const res = await axios(config);
    return res;
}

export default createBlog;