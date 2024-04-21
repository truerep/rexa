import React, {
  useEffect,
  useState
} from 'react';
import {
  useRouter
} from 'next/router';
import Authenticate from './Authenticate';
import {
  appEnv
} from '@/helpers';

const AuthenticateContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const loginUrl = `${appEnv.API_URL}/api/auth/google`;

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push(loginUrl);
    }, 1500);
  };

  useEffect(() => {
    if (router.query.token) {
      localStorage.removeItem('auth_token');
      localStorage.setItem('auth_token', router.query.token);
      const redirectUrl = localStorage.getItem('redirect_url');
      if (redirectUrl) {
        localStorage.removeItem('redirect_url');
        router.push(redirectUrl);
      } else {
        router.push('/dashboard');
      }
    } else if (router.query.login == '') {
      const { redirectUrl } = router.query;
      if (redirectUrl !== undefined) {
        localStorage.setItem('redirect_url', redirectUrl);
      }
      router.push(loginUrl);
    } else {
      setIsLoading(false);
    }
  }, [router]);

  return (
    <Authenticate handleLogin={handleLogin} isLoading={isLoading} />
  );
};

export default AuthenticateContainer;
