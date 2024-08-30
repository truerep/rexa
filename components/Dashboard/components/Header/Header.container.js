import React, {
  useEffect,
  useRef,
  useState
} from 'react';
import {
  useRouter
} from 'next/router';
import Header from './Header';
import {
  useOnClickOutside
} from '@/hooks';
import { checkAuthenticated } from '@/helpers';

const HeaderContainer = () => {
  const [userData, setUserData] = useState({});
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const dropdownRef = useRef(null);
  useOnClickOutside(dropdownRef, () => setToggleDropdown(false));

  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    router.push('/');
  };


  useEffect(() => {

    const checkAuthenticatedUser = async () => {
      const isAuthenticated = await checkAuthenticated();

      if (!isAuthenticated) {
        // if user is not authenticated, redirect to login page
        router.push('/authenticate?login');
      } else {
        // if user is authenticated, get user data
        setUserData(isAuthenticated);
      }
    }

    checkAuthenticatedUser();

  }, [router]);

  return (
    <Header
      userData={userData}
      handleLogout={handleLogout}
      toggleDropdown={toggleDropdown}
      dropdownRef={dropdownRef}
      setToggleDropdown={setToggleDropdown}
    />
  );
};

export default HeaderContainer;
