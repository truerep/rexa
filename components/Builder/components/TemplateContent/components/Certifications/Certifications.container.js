import React, {
  useContext
} from 'react';
import Certifications from './Certifications';
import {
  ResumeContext
} from '@/context/ResumeContext';

const CertificationsContainer = () => {
  const { resumeData, updateResumeData } = useContext(ResumeContext);

  // Add New Certifications Section
  const addNewCertificationsSection = () => {
    const updatedResumeData = { ...resumeData };
    updatedResumeData.templateData.certifications.push({
      title: 'ReactJS',
      date: '2022',
      awarder: 'Udemy',
      summary: 'reactjs certificate'
    });
    updateResumeData(updatedResumeData);
  };

  // Remove Certifications Section
  const handleDeleteCertificationsSection = (index) => {
    const updatedResumeData = { ...resumeData };
    updatedResumeData.templateData.certifications.splice(index, 1);
    updateResumeData(updatedResumeData);
  };

  // Update data from Input fields
  const handleInputChange = (index, key, value) => {
    const updatedResumeData = { ...resumeData };
    updatedResumeData.templateData.certifications[index][key] = value;
    updateResumeData(updatedResumeData);
  };

  return (
    <Certifications
      templateData={resumeData?.templateData?.certifications}
      addNewCertificationsSection={addNewCertificationsSection}
      handleDeleteCertificationsSection={handleDeleteCertificationsSection}
      handleInputChange={handleInputChange}
    />
  );
};

export default CertificationsContainer;
