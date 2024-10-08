import React, {
  useContext,
  useState
} from 'react';
import TemplateContent from './TemplateContent';
import {
  BasicInfo, Education, Experience, Skills, Project, AdditionalLinks,
  Certifications, Languages,
  Interests
} from './components';
import {
  ResumeContext
} from '@/context/ResumeContext';
import { sectionNames } from '@/constants/sectionNames';

const TemplateContentContainer = () => {
  const { resumeData } = useContext(ResumeContext);

  const contentModificationModules = [
    {
      id: sectionNames.BASICS,
      name: 'Basic Info',
      component: <BasicInfo />
    },
    {
      id: sectionNames.ADDITONAL_LINKS,
      name: 'Additional Links',
      component: <AdditionalLinks />
    },
    {
      id: sectionNames.SKILLS,
      name: 'Skills',
      component: <Skills />
    },
    {
      id: sectionNames.WORK,
      name: 'Experience',
      component: <Experience />
    },
    {
      id: sectionNames.EDUCATION,
      name: 'Education',
      component: <Education />
    },
    {
      id: sectionNames.PROJECTS,
      name: 'Project',
      component: <Project />
    },
    {
      id: sectionNames.CERTIFICATIONS,
      name: 'Certifications',
      component: <Certifications />
    },
    {
      id: sectionNames.LANGUAGES,
      name: 'Languages',
      component: <Languages />
    },
    {
      id: sectionNames.INTERESTS,
      name: 'Interests',
      component: <Interests />
    }
  ];

  const handleOnFocus= () => {
    sessionStorage.setItem('saveResume', true);
  }

  return (
    <TemplateContent
      contentModificationModules={contentModificationModules}
      activeSection={resumeData?.contentSectionName}
      togglePreview={resumeData?.togglePreview}
      resumeDataDoesNotExist={!resumeData?.templateData}
      handleOnFocus={handleOnFocus}
    />
  );
};

export default TemplateContentContainer;
