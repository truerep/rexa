import React, { useEffect, useState } from 'react'
import AdminPanel from './AdminPanel'
import { checkAuthenticated } from '@/helpers'
import { useRouter } from 'next/router';
import { blogsUrls, homeUrls, usersUrls } from '../helpers';

const AdminPanelContainer = ({ children }) => {
  const router = useRouter();

  const [pageLoading, setPageLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [title, setTitle] = useState('');

  useEffect(() => {
    checkUserAuthenticated()

    if (homeUrls.includes(router.pathname)) {
      titleChange('Admin Panel')
    } else if (usersUrls.includes(router.pathname)) {
      titleChange('Users')
    } else if (blogsUrls.includes(router.pathname)) {
      titleChange('Blogs')
    }
  }, [])

  const checkUserAuthenticated = async () => {
    const res = await checkAuthenticated();
    setIsAuthorized(!!res);
    setPageLoading(false);
  };

  const handleLogin = async () => {
    router.push('/authenticate?login&redirectUrl=/admin-panel');
  }

  const titleChange = (title) => {
    setTitle(title);
  }

  return (
    <AdminPanel
      children={children}
      pageLoading={pageLoading}
      isAuthorized={isAuthorized}
      handleLogin={handleLogin}
      title={title}
    />
  )
}

export default AdminPanelContainer