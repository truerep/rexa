import React, {
  useContext
} from 'react';

import ContentSectionNames from './ContentSectionNames';
import {
  ResumeContext
} from '@/context/ResumeContext';

const ContentSectionNamesContainer = () => {
  const {resumeData, updateResumeData} = useContext(ResumeContext);

  const handleContentSection = (sectionName) => {
    const updatedResumeData = {...resumeData};
    updatedResumeData.contentSectionName = sectionName;
    updateResumeData(updatedResumeData);
  };

  const sectionNamesList = [
    {
      handleClick: () => handleContentSection('basic'),
      id: 'basic',
      name: 'Basic Details',
      iconUrl: '/assets/icons/basic-details-icon.svg'
    },
    {
      handleClick: () => handleContentSection('skills'),
      id: 'skills',
      name: 'Skills',
      iconUrl: '/assets/icons/skills-icon.svg'
    },
    {
      handleClick: () => handleContentSection('experience'),
      id: 'experience',
      name: 'Experience',
      iconUrl: '/assets/icons/experience-icon.svg'
    },
    {
      handleClick: () => handleContentSection('education'),
      id: 'education',
      name: 'Education',
      iconUrl: '/assets/icons/education-icon.svg'
    },
    {
      handleClick: () => handleContentSection('projects'),
      id: 'projects',
      name: 'Projects',
      iconUrl: '/assets/icons/projects-icon.svg'
    }
  ];

  return (
    <ContentSectionNames
      sectionNamesList={sectionNamesList}
      activeSection={resumeData?.contentSectionName}
    />
  );
};
export default ContentSectionNamesContainer;
