import React from 'react';
import GrowthCards from './GrowthCards';

const GrowthCardsContainer = () => {
  const growthData = [
    {
      name: 'App Downloads',
      icon: 'https://ik.imagekit.io/sahildhingra/app-downloads-icon-white.png',
      numbers: '955000'
    },
    {
      name: 'Resume Build',
      icon: 'https://ik.imagekit.io/sahildhingra/notes-icon-white.png',
      numbers: '4456463'
    },
    {
      name: 'Loved By',
      icon: 'https://ik.imagekit.io/sahildhingra/star-icon-white.png',
      numbers: '15000'
    },
    {
      name: 'Active Users',
      icon: 'https://ik.imagekit.io/sahildhingra/users-group-icon-white.png',
      numbers: '94500'
    }
  ];

  return (
    <GrowthCards
      growthData={growthData}
    />
  );
};

export default GrowthCardsContainer;
