import axios from 'axios';

import {
  appEnv
} from '@/helpers';

const getUserData = async (authToken) => {
  const config = {
    method: 'get',
    url: `${appEnv.API_URL}/api/auth`,
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  };

  const res = await axios(config);
  return res;
};

export default getUserData;
