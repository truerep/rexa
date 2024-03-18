import React, {
  useState
} from 'react';
import Header from './Header';

const HeaderContainer = () => {
  const [toggleNav, setToggleNav] = useState(false);
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
    {
      name: 'Partners',
      url: '#clients'
    }
  ];

  return (
    <Header
      navMenu={navMenu}
      toggleNav={toggleNav}
      setToggleNav={setToggleNav}
    />
  );
};

export default HeaderContainer;
