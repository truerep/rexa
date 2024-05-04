import React, {
  useEffect,
  useState
} from 'react';
import Header from './Header';
import {
  checkAuthenticated
} from '@/helpers';

const HeaderContainer = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const checkUserAuthenticated = async () => {
    const res = await checkAuthenticated();
    setIsAuthorized(res);
  };

  useEffect(() => {
    checkUserAuthenticated();
  }, []);

  const navMenu = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'Explore',
      url: '#app-metrics'
    },
    {
      name: 'Features',
      url: '#features'
    },
    // {
    //   name: 'Pricing',
    //   url: '/'
    // },
    // {
    //   name: 'Partners',
    //   url: '#clients'
    // }
  ];

  return (
    <Header
      isAuthorized={isAuthorized}
      navMenu={navMenu}
      toggleNav={toggleNav}
      setToggleNav={setToggleNav}
    />
  );
};

export default HeaderContainer;
