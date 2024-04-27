import React, {
  useContext,
  useState
} from 'react';
import TemplateContent from './TemplateContent';
import {
  BasicInfo, Education, Experience, Skills, Project, AdditionalLinks
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
    }
  ];

  return (
    <TemplateContent
      contentModificationModules={contentModificationModules}
      activeSection={resumeData?.contentSectionName}
      togglePreview={resumeData?.togglePreview}
    />
  );
};

export default TemplateContentContainer;
