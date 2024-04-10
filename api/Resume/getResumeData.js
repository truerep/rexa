import axios from 'axios';

import {
  appEnv
} from '@/helpers';

const getResumeData = async (resumeId) => {
  const authToken = localStorage.getItem('auth_token');

  const config = {
    method: 'get',
    url: `${appEnv.API_URL}/api/save-resume/${resumeId}`,
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  };

  const res = await axios(config);
  return res;
};

export default getResumeData;
