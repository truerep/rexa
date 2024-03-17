import axios from 'axios';

import {
  appEnv
} from '@/helpers';

const getResumeText = async (resumeFile) => {
  const formdata = new FormData();
  formdata.append('resume', resumeFile, resumeFile?.name);
  const config = {
    method: 'post',
    url: `${appEnv.API_URL}/api/send-resume/upload`,
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data: formdata
  };
  const res = await axios(config);
  return res?.data;
};

export default getResumeText;
