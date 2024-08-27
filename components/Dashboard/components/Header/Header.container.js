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
  getUserData
} from '@/api';
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

  // const checkUserAuthenticated = async (authToken) => {
  //   try {
  //     const res = await getUserData(authToken);
  //     setUserData(res?.data);
  //   } catch (err) {
  //     router.push('/authenticate?login');
  //   }
  // };

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    router.push('/');
  };

  // useEffect(() => {
  //   const authToken = localStorage.getItem('auth_token');

  //   if (authToken) {
  //     checkUserAuthenticated(authToken);
  //   } else if (authToken === null) {
  //     router.push('/authenticate?login');
  //   } else {}
  // }, [router]);


  useEffect(async () => {
    const isAuthenticated = await checkAuthenticated();

    if (!isAuthenticated) {
      // if user is not authenticated, redirect to login page
      router.push('/authenticate?login');
    } else {
      // if user is authenticated, get user data
      setUserData(isAuthenticated);
    }
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
