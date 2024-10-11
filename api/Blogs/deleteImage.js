import axios from 'axios';
import { appEnv } from '@/helpers';

const deleteImage = async (imageId) => {
    const authToken = localStorage.getItem('auth_token');

    const config = {
        method: 'delete',
        url: `${appEnv.API_URL}/api/blogs/delete-image/${imageId}`,
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    };

    const res = await axios(config);
    return res.data;
}

export default deleteImage;