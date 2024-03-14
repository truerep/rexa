import React, {
  useContext
} from 'react';
import Experience from './Experience';
import {
  ResumeContext
} from '@/context/ResumeContext';

const ExperienceContainer = () => {
  const {resumeData, updateResumeData} = useContext(ResumeContext);

  // Add New Experience Section
  const addNewExperienceSection = () => {
    const updatedResumeData = {...resumeData};
    updatedResumeData.templateData.work.push({
      company: 'Company Name',
      position: 'Position in this company',
      website: 'http://websiteUrl.com',
      startDate: 'Jan 2015',
      endDate: 'Present',
      summary: 'A short work summary in this company',
      highlights: [
        'Work information point 1'
      ]
    });
    updateResumeData(updatedResumeData);
  };

  return (
    <Experience
      templateData={resumeData?.templateData?.work}
      addNewExperienceSection={addNewExperienceSection}
    />
  );
};

export default ExperienceContainer;
