import React, {
  useState
} from 'react';
import Features from './Features';

const FeaturesContainer = () => {
  const [activeTab, setActiveTab] = useState(1);

  const featuresData = [
    {
      title: 'Intuitive Interface',
      largeImg: '/assets/images/feature-1-lg.png',
      smallImg: '/assets/images/feature-1.png'
    },
    {
      title: 'Cross-Platform Syncing',
      largeImg: '/assets/images/feature-2-lg.png',
      smallImg: '/assets/images/feature-2.png'
    },
    {
      title: 'Collaboration Tools',
      largeImg: '/assets/images/feature-3-lg.png',
      smallImg: '/assets/images/feature-3.png'
    },
    {
      title: 'AI Search',
      largeImg: '/assets/images/feature-4-lg.png',
      smallImg: '/assets/images/feature-4.png'
    }
  ];

  return (
    <Features
      featuresData={featuresData}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />
  );
};

export default FeaturesContainer;
