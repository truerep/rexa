import React, {
  useContext
} from 'react';
import AdditionalLinks from './AdditionalLinks';
import {
  ResumeContext
} from '@/context/ResumeContext';

const AdditionalLinksContainer = () => {
  const {resumeData, updateResumeData} = useContext(ResumeContext);

  const handleInputChange = (key, value) => {
    updateResumeData((prevState) => {
      return {
        ...prevState,
        templateData: {
          ...prevState.templateData,
          additionalLinks: {
            ...prevState.templateData.additionalLinks,
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
    <AdditionalLinks
      templateData={resumeData?.templateData?.additionalLinks}
      handleInputChange={handleInputChange}
      handleClose={handleClose}
    />
  );
};

export default AdditionalLinksContainer;
