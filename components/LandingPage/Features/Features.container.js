import React, {
  useState
} from 'react';
import Features from './Features';

const FeaturesContainer = () => {
  const [activeTab, setActiveTab] = useState(1);

  const featuresData = [
    {
      title: 'Easy Access to Dashboard',
      largeImg: '/assets/images/feature-1-lg.png',
      smallImg: '/assets/images/feature-1.png'
    },
    {
      title: 'Multiple Features',
      largeImg: '/assets/images/feature-2-lg.png',
      smallImg: '/assets/images/feature-2.png'
    },
    {
      title: 'Choose from multiple templates',
      largeImg: '/assets/images/feature-3-lg.png',
      smallImg: '/assets/images/feature-3.png'
    },
    {
      title: 'AI Powered',
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
