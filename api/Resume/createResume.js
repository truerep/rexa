import axios from 'axios';

import {
  appEnv
} from '@/helpers';

const createResume = async (payload) => {
  const authToken = localStorage.getItem('auth_token');

  const config = {
    method: 'post',
    url: `${appEnv.API_URL}/api/save-resume`,
    data: payload,
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  };

  const res = await axios(config);
  return res;
};

export default createResume;
