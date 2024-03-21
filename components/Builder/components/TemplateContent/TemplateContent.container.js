import React, {
  useState
} from 'react';
import TemplateContent from './TemplateContent';
import {
  BasicInfo, Education, Experience, Skills
} from './components';

const TemplateContentContainer = () => {
  const [currentModule, setCurrentModule] = useState('');

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
      currentModule={currentModule}
      setCurrentModule={setCurrentModule}
    />
  );
};

export default TemplateContentContainer;
