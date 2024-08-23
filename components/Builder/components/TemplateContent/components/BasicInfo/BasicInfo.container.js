import React, {
  useContext
} from 'react';
import BasicInfo from './BasicInfo';
import {
  ResumeContext
} from '@/context/ResumeContext';

const BasicInfoContainer = () => {
  const { resumeData, updateResumeData } = useContext(ResumeContext);

  const handleInputChange = (key, value) => {

    updateResumeData((prevState) => {
      return {
        ...prevState,
        templateData: {
          ...prevState.templateData,
          basics: {
            ...prevState.templateData.basics,
            [key]: value
          }
        }
      };
    });
  };

  const handleClose = () => {
    const updatedResumeData = { ...resumeData };
    updatedResumeData.contentSectionName = '';
    updateResumeData(updatedResumeData);
  }

  return (
    <BasicInfo
      templateData={resumeData?.templateData?.basics}
      handleInputChange={handleInputChange}
      handleClose={handleClose}
    />
  );
};

export default BasicInfoContainer;
