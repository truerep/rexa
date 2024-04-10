import axios from 'axios';

import {
  appEnv
} from '@/helpers';

const updateResume = async (resumeId, payload) => {
  const authToken = localStorage.getItem('auth_token');

  const config = {
    method: 'put',
    url: `${appEnv.API_URL}/api/save-resume/${resumeId}`,
    data: payload,
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  };

  const res = await axios(config);
  return res;
};

export default updateResume;
