import React from 'react';
import Dashboard from './Dashboard';

const DashboardContainer = () => {
  const breadcrumbs = [
    {
      name: 'Home',
      icon: '/assets/icons/home-icon-dark.png',
      url: '/'
    },
    {
      name: 'Dashboard',
      icon: '/assets/icons/dashboard-icon-dark.png',
      url: '/dashboard',
      isCurrent: true
    }
  ]

  return (
    <Dashboard breadcrumbs={breadcrumbs} />
  );
}

export default DashboardContainer;
