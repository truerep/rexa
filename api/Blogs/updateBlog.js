import axios from 'axios';
import { appEnv } from '@/helpers';

const updateBlog = async (blogSlug, blogData) => {
    const authToken = localStorage.getItem('auth_token');

    const config = {
        method: 'put',
        url: `${appEnv.API_URL}/api/blogs/${blogSlug}`,
        data: blogData,
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    };

    const res = await axios(config);
    return res;
}

export default updateBlog;