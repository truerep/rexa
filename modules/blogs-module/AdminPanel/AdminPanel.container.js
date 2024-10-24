import React, { useEffect, useState } from 'react'
import AdminPanel from './AdminPanel'
import { checkAuthenticated } from '@/helpers'
import { useRouter } from 'next/router';

const AdminPanelContainer = ({ children }) => {
  const router = useRouter();

  const [pageLoading, setPageLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    checkUserAuthenticated()
  }, [])

  const checkUserAuthenticated = async () => {
    const res = await checkAuthenticated();
    setIsAuthorized(!!res);
    setPageLoading(false);
  };

  const handleLogin = async () => {
    router.push('/authenticate?login&redirectUrl=/admin-panel');
  }

  return (
    <AdminPanel
      children={children}
      pageLoading={pageLoading}
      isAuthorized={isAuthorized}
      handleLogin={handleLogin}
    />
  )
}

export default AdminPanelContainer