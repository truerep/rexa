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
      name: 'Features',
      url: '#features'
    },
    {
      name: 'Explore',
      url: '#app-metrics'
    },
    {
      name: 'Pricing',
      url: '/'
    },
    {
      name: 'About',
      url: '/'
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
