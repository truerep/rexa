import React, {
  useContext
} from 'react';

import ContentSectionNames from './ContentSectionNames';
import {
  ResumeContext
} from '@/context/ResumeContext';
import { sectionNames } from '@/constants/sectionNames';

const ContentSectionNamesContainer = () => {
  const { resumeData, updateResumeData } = useContext(ResumeContext);

  const handleContentSection = (sectionName) => {
    const updatedResumeData = { ...resumeData };
    updatedResumeData.contentSectionName = sectionName;
    updateResumeData(updatedResumeData);
  };

  const sectionNamesList = [
    {
      handleClick: () => handleContentSection(sectionNames.BASICS),
      id: sectionNames.BASICS,
      name: 'Basic Details',
      iconUrl: '/assets/icons/basic-details-icon.svg'
    },
    {
      handleClick: () => handleContentSection(sectionNames.ADDITONAL_LINKS),
      id: sectionNames.ADDITONAL_LINKS,
      name: 'Additional Links',
      iconUrl: '/assets/icons/link-icon.svg'
    },
    {
      handleClick: () => handleContentSection(sectionNames.SKILLS),
      id: sectionNames.SKILLS,
      name: 'Skills',
      iconUrl: '/assets/icons/skills-icon.svg'
    },
    {
      handleClick: () => handleContentSection(sectionNames.WORK),
      id: sectionNames.WORK,
      name: 'Experience',
      iconUrl: '/assets/icons/experience-icon.svg'
    },
    {
      handleClick: () => handleContentSection(sectionNames.EDUCATION),
      id: sectionNames.EDUCATION,
      name: 'Education',
      iconUrl: '/assets/icons/education-icon.svg'
    },
    {
      handleClick: () => handleContentSection(sectionNames.PROJECTS),
      id: sectionNames.PROJECTS,
      name: 'Projects',
      iconUrl: '/assets/icons/projects-icon.svg'
    },
    {
      handleClick: () => handleContentSection(sectionNames.CERTIFICATIONS),
      id: sectionNames.CERTIFICATIONS,
      name: 'Certifications',
      iconUrl: '/assets/icons/certificate-icon.svg'
    },
    {
      handleClick: () => handleContentSection(sectionNames.LANGUAGES),
      id: sectionNames.LANGUAGES,
      name: 'Languages',
      iconUrl: '/assets/icons/translate-icon.svg'
    },
    {
      handleClick: () => handleContentSection(sectionNames.INTERESTS),
      id: sectionNames.INTERESTS,
      name: 'Interests',
      iconUrl: '/assets/icons/basketball-icon.svg'
    }
  ];

  return (
    <ContentSectionNames
      // sectionNamesList={resumeData && resumeData?.templateData && sectionNamesList.map((sectionName) => (
      //   Object.keys(resumeData?.templateData).includes(sectionName.id) ? sectionName : null
      // ))}
      sectionNamesList={sectionNamesList}
      activeSection={resumeData?.contentSectionName}
      togglePreview={resumeData?.togglePreview}
      loading={resumeData?.loading}
    />
  );
};
export default ContentSectionNamesContainer;
