import axios from 'axios';

import {
  appEnv
} from '@/helpers';

const updateWorkSection = async (payload) => {
  const config = {
    method: 'post',
    url: `${appEnv.API_URL}/api/send-resume/generate-resume-section/work`,
    data: payload,
  };

  const res = await axios(config);
  return res;
};

export default updateWorkSection;
