import axios from 'axios';
import { appEnv } from '@/helpers';

const uploadImage = async (file) => {
    const authToken = localStorage.getItem('auth_token');

    const formData = new FormData();
    formData.append('image', file, file.name);

    const config = {
        method: 'post',
        url: `${appEnv.API_URL}/api/blogs/upload-image`,
        data: formData,
        headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'multipart/form-data'
        }
    };

    const res = await axios(config);
    return res.data;
}

export default uploadImage;