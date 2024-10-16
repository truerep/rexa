import axios from 'axios';
import { appEnv } from '@/helpers';

const deleteBlog = async (blogSlug) => {
    const authToken = localStorage.getItem('auth_token');

    const config = {
        method: 'delete',
        url: `${appEnv.API_URL}/api/blogs/${blogSlug}`,
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    };

    const res = await axios(config);
    return res;
}

export default deleteBlog;