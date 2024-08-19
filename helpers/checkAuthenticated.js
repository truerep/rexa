import {
  getUserData
} from '@/api';

const checkAuthenticated = async () => {
  const authToken = localStorage.getItem('auth_token');
  if (!authToken) {
    return false;
  }
  try {
    const res = await getUserData(authToken);
    if (res?.statusCode === 200) {
      return true;
    }
  } catch (err) {
  }
  return false;
};

export default checkAuthenticated;
