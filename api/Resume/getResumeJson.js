import axios from 'axios';

import {
  appEnv
} from '@/helpers';


const getResumeJson = async (resume) => {
  try {
    const config = {
      method: 'post',
      url: `${appEnv.API_URL}/api/send-resume`,
      data: {resume}
    };

    const res = await axios(config);
    return res?.data;
  } catch (err) {
    console.log(err);
  }
};

export default getResumeJson;
