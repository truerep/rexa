import React, {
  useContext,
  useState
} from 'react';
import TemplateContent from './TemplateContent';
import {
  BasicInfo, Education, Experience, Skills
} from './components';
import {
  ResumeContext
} from '@/context/ResumeContext';

const TemplateContentContainer = () => {
  const {resumeData} = useContext(ResumeContext);

  const contentModificationModules = [
    {
      id: 'basic',
      name: 'Basic Info',
      component: <BasicInfo />
    },
    {
      id: 'skills',
      name: 'Skills',
      component: <Skills />
    },
    {
      id: 'experience',
      name: 'Experience',
      component: <Experience />
    },
    {
      id: 'education',
      name: 'Education',
      component: <Education />
    }
  ];

  return (
    <TemplateContent
      contentModificationModules={contentModificationModules}
      activeSection={resumeData?.contentSectionName}
    />
  );
};

export default TemplateContentContainer;
