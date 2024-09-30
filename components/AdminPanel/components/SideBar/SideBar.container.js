import React from 'react'
import SideBar from './SideBar'
import { useRouter } from 'next/router'

const SideBarContainer = () => {
  const router = useRouter();

  const handleRedirectRoute = (route) => {
    router.push(route);
  }

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
      handleClick: () => handleRedirectRoute('/admin-panel/users'),
      activeFor: ['/admin-panel/users']
    },
    {
      name: 'Blogs',
      icon: '/assets/icons/admin-panel/blogs-icon.svg',
      handleClick: () =>  handleRedirectRoute('/admin-panel/blogs'),
      activeFor: ['/admin-panel/blogs', '/admin-panel/blogs/create-new']
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
    />
  )
}

export default SideBarContainer