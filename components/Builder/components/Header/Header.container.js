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
  const [showJdModal, setShowJdModal] = useState();

  const {resumeData} = useContext(ResumeContext);

  useEffect(() => {
    setShowTemplates(resumeData.toggleTemplatesPopover);
  }, [resumeData]);

  useEffect(() => {
    setShowJdModal(resumeData.toggleJdModal);
  }, [resumeData]);

  const builderActionsList = [
    {
      handleClick: () => setShowTemplates(true),
      iconUrl: '/assets/icons/template-icon.svg',
      tooltip: 'Change Resume Template'
    },
    {
      handleClick: () => setShowJdModal(true),
      iconUrl: '/assets/icons/sync-icon.svg',
      tooltip: 'Sync Resume with Job Description'
    },
    {
      iconUrl: '/assets/icons/preview-icon.svg',
      tooltip: 'Preview & Share (coming soon)'
    },
    {
      iconUrl: '/assets/icons/save-icon.svg',
      tooltip: 'Save Template (coming soon)'
    },
    {
      handleClick: () => window.print(),
      iconUrl: '/assets/icons/download-icon.svg',
      tooltip: 'Download Resume'
    }
  ];

  return (
    <Header
      builderActionsList={builderActionsList}
      showTemplates={showTemplates}
      setShowTemplates={setShowTemplates}
      showJdModal={showJdModal}
      setShowJdModal={setShowJdModal}
    />
  );
};

export default HeaderContainer;
