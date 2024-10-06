import React from 'react'
import SideBar from './SideBar'
import { useRouter } from 'next/router'
import { checkAuthenticated } from '@/helpers';

const SideBarContainer = () => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = React.useState(false);

  const handleRedirectRoute = (route) => {
    router.push(route);
  }

  const handleLogin = async () => {
    router.push('/authenticate?login&redirectUrl=/admin-panel');
  }

  const checkUserAuthenticated = async () => {
    const res = await checkAuthenticated();
    setIsAuthorized(!!res);
  };

  React.useEffect(() => {
    checkUserAuthenticated();
  }, []);

  const primaryMenu = [
    {
      name: 'Home',
      icon: '/assets/icons/admin-panel/home-icon.svg',
      handleClick: () => handleRedirectRoute('/admin-panel'),
      activeFor: ['/admin-panel']
    },
    {
      name: 'Users',
      icon: '/assets/icons/admin-panel/users-icon.svg',
      handleClick: () => handleRedirectRoute('/admin-panel'),
      activeFor: ['/admin-panel/users']
    },
    {
      name: 'Blogs',
      icon: '/assets/icons/admin-panel/blogs-icon.svg',
      handleClick: () => handleRedirectRoute('/admin-panel/blogs'),
      activeFor: ['/admin-panel/blogs', '/admin-panel/blogs/create-new', '/admin-panel/blogs/edit/[slug]']
    },
  ];

  const secondryMenu = [
    {
      name: 'Logout',
      icon: '/assets/icons/admin-panel/logout-icon.svg'
    }
  ];

  return (
    <SideBar
      pathname={router?.pathname}
      primaryMenu={primaryMenu}
      secondryMenu={secondryMenu}
      isAuthorized={isAuthorized}
      handleLogin={handleLogin}
    />
  )
}

export default SideBarContainer