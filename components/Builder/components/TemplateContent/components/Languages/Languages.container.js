import React, {
  useContext
} from 'react';
import Languages from './Languages';
import {
  ResumeContext
} from '@/context/ResumeContext';

const LanguagesContainer = () => {
  const { resumeData, updateResumeData } = useContext(ResumeContext);

  // Add New Languages Section
  const addNewLanguagesSection = () => {
    const updatedResumeData = { ...resumeData };
    updatedResumeData.templateData.languages.push({
      language: 'English',
      fluency: 'Native speaker'
    });
    updateResumeData(updatedResumeData);
  };

  // Remove Languages Section
  const handleDeleteLanguagesSection = (index) => {
    const updatedResumeData = { ...resumeData };
    updatedResumeData.templateData.languages.splice(index, 1);
    updateResumeData(updatedResumeData);
  };

  // Update data from Input fields
  const handleInputChange = (index, key, value) => {
    const updatedResumeData = { ...resumeData };
    updatedResumeData.templateData.languages[index][key] = value;
    updateResumeData(updatedResumeData);
  };

  return (
    <Languages
      templateData={resumeData?.templateData?.languages}
      addNewLanguagesSection={addNewLanguagesSection}
      handleDeleteLanguagesSection={handleDeleteLanguagesSection}
      handleInputChange={handleInputChange}
    />
  );
};

export default LanguagesContainer;
