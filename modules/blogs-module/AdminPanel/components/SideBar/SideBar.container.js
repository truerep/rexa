import React, { useContext } from 'react'
import SideBar from './SideBar'
import { useRouter } from 'next/router'
import { AdminContext } from '../../context/AdminContext';
import { blogsUrls, homeUrls, usersUrls } from '@/modules/blogs-module/helpers';

const SideBarContainer = () => {
  const router = useRouter();
  const { adminData, handleHideSidebar } = useContext(AdminContext);

  const handleRedirectRoute = (route) => {
    router.push(route);
  }

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    router.push('/');
  };

  const primaryMenu = [
    {
      name: 'Home',
      icon: '/assets/icons/admin-panel/home-icon.svg',
      handleClick: () => handleRedirectRoute('/admin-panel'),
      activeFor: homeUrls
    },
    {
      name: 'Users',
      icon: '/assets/icons/admin-panel/users-icon.svg',
      handleClick: () => handleRedirectRoute('/admin-panel/users'),
      activeFor: usersUrls
    },
    {
      name: 'Blogs',
      icon: '/assets/icons/admin-panel/blogs-icon.svg',
      handleClick: () => handleRedirectRoute('/admin-panel/blogs'),
      activeFor: blogsUrls
    },
  ];

  const secondryMenu = [
    {
      name: 'Logout',
      icon: '/assets/icons/admin-panel/logout-icon.svg',
      handleClick: handleLogout
    }
  ];

  return (
    <SideBar
      pathname={router?.pathname}
      primaryMenu={primaryMenu}
      secondryMenu={secondryMenu}
      hideSidebar={adminData?.handleSidebar}
      handleHideSidebar={handleHideSidebar}
    />
  )
}

export default SideBarContainer