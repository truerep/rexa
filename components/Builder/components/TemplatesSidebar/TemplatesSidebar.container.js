import React, {
  useContext
} from 'react';
import TemplatesSidebar from './TemplatesSidebar';
import {
  ResumeContext
} from '@/context/ResumeContext';

const TemplatesSidebarContainer = () => {
  const {resumeData, updateResumeData} = useContext(ResumeContext);
  const updateTemplateId = (updatedTemplateId) => {
    updateResumeData((prevState) => {
      return {
        ...prevState,
        templateId: updatedTemplateId
      };
    });
  };

  return (
    <TemplatesSidebar updateTemplateId={updateTemplateId} />
  );
};

export default TemplatesSidebarContainer;
