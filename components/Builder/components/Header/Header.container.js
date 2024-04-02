import React, {
  useContext,
  useEffect,
  useState
} from 'react';
import Header from './Header';
import {
  ResumeContext
} from '@/context/ResumeContext';

const HeaderContainer = () => {
  const [showTemplates, setShowTemplates] = useState(false);

  const {resumeData} = useContext(ResumeContext);

  useEffect(() => {
    setShowTemplates(resumeData.toggleTemplatesPopover);
  }, [resumeData]);

  const builderActionsList = [
    {
      handleClick: () => setShowTemplates(true),
      iconUrl: '/assets/icons/template-icon.svg'
    },
    {
      handleClick: () => alert(),
      iconUrl: '/assets/icons/sync-icon.svg'
    },
    {
      handleClick: () => alert('Coming soon...'),
      iconUrl: '/assets/icons/preview-icon.svg'
    },
    {
      handleClick: () => alert('Coming soon...'),
      iconUrl: '/assets/icons/save-icon.svg'
    },
    {
      handleClick: () => window.print(),
      iconUrl: '/assets/icons/download-icon.svg'
    }
  ];

  return (
    <Header
      builderActionsList={builderActionsList}
      showTemplates={showTemplates}
      setShowTemplates={setShowTemplates}
    />
  );
};

export default HeaderContainer;
