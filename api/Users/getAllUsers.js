import axios from 'axios';

import {
  appEnv
} from '@/helpers';

const getAllUsers = async () => {
  const authToken = localStorage.getItem('auth_token');

  const config = {
    method: 'get',
    url: `${appEnv.API_URL}/api/auth/list`,
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  };

  const res = await axios(config);
  return res;
};

export default getAllUsers;
