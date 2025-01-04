import axios from 'axios';

import {
  appEnv
} from '@/helpers';


const getAllTemplatesData = async () => {
  const config = {
    method: 'get',
    url: `${appEnv.API_URL}/api/save-resume/template/getAll`,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const res = await axios(config);

  let templatesData = {};

  res?.data.forEach((template) => {
    templatesData = {
      ...templatesData,
      [template.slug]: {
        id: template.slug,
        name: template.name,
        description: template.description,
        thumbnail: template.imageUrl,
        price: template.price,
        users: template.users,
        templateId: template._id
      }
    };
  });

  return templatesData;

};

export default getAllTemplatesData;
