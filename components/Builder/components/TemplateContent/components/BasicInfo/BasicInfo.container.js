import React, {
  useContext, useEffect, useState
} from 'react';
import BasicInfo from './BasicInfo';
import {
  ResumeContext
} from '@/context/ResumeContext';

const BasicInfoContainer = () => {
  const {resumeData, updateResumeData} = useContext(ResumeContext);

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

  return (
    <BasicInfo
      templateData={resumeData?.templateData?.basics}
      handleInputChange={handleInputChange}
    />
  );
};

export default BasicInfoContainer;
