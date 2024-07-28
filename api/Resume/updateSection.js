import axios from 'axios';

import {
  appEnv
} from '@/helpers';

const updateSection = async (payload, section) => {
  const config = {
    method: 'post',
    url: `${appEnv.API_URL}/api/send-resume/generate-resume-section/${section}`,
    data: payload,
  };

  const res = await axios(config);
  return res;
};

export default updateSection;
