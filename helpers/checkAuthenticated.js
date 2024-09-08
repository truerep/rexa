import {
  getUserData
} from '@/api';
import { HttpStatusCode } from 'axios';

const checkAuthenticated = async () => {
  const authToken = localStorage.getItem('auth_token');
  if (!authToken) {
    return false;
  }
  try {
    const res = await getUserData(authToken);
    if (res?.status === HttpStatusCode.Ok) {
      return res?.data;
    }
  } catch (err) {
    return false;
  }
  return false;
};

export default checkAuthenticated;
