import React, {
  useEffect, useState
} from 'react';
import Dashboard from './Dashboard';
import {
  checkAuthenticated
} from '@/helpers';

const DashboardContainer = () => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  const verifyUser = async () => {
    const isAuthenticated = await checkAuthenticated();
    setUserAuthenticated(isAuthenticated);
    console.log(userAuthenticated, isAuthenticated, '<----authenticated');
  };

  useEffect(() => {
    verifyUser();
  }, []);

  return userAuthenticated ? (
    <Dashboard />
  ) : ('login');
};

export default DashboardContainer;
