import React, {
  useContext
} from 'react';
import Project from './Project';
import {
  ResumeContext
} from '@/context/ResumeContext';

const ProjectContainer = () => {
  const {resumeData, updateResumeData} = useContext(ResumeContext);

  // Add New Project Section
  const addNewProjectSection = () => {
    const updatedResumeData = {...resumeData};
    updatedResumeData.templateData.projects.push({
      name: 'Stock Trading Terminal',
      startDate: '2023',
      endDate: 'Present',
      url: 'None',
      highlights: [
        'Implemented real-time data updates',
        'Designed intuitive interfaces'
      ]
    });
    updateResumeData(updatedResumeData);
  };

  // Remove Project Section
  const handleDeleteProjectSection = (index) => {
    const updatedResumeData = {...resumeData};
    updatedResumeData.templateData.projects.splice(index, 1);
    updateResumeData(updatedResumeData);
  };

  // Update data from Input fields
  const handleInputChange = (index, key, value) => {
    const updatedResumeData = {...resumeData};
    updatedResumeData.templateData.projects[index][key] = value;
    updateResumeData(updatedResumeData);
  };

  // Update data for Highlights
  const handleHighlightsChange = (index, hIndex, value) => {
    const updatedResumeData = {...resumeData};
    updatedResumeData.templateData.projects[index].highlights[hIndex] = value;
    updateResumeData(updatedResumeData);
  };

  // Add Highlight Item
  const handleAddHighlight = (index) => {
    const updatedResumeData = {...resumeData};
    updatedResumeData.templateData.projects[index].highlights.push(`Add project's highlight`);
    updateResumeData(updatedResumeData);
  };

  // Delete Highlight Item
  const handleDeleteHighlight = (index, hIndex) => {
    const updatedResumeData = {...resumeData};
    updatedResumeData.templateData.projects[index].highlights.splice(hIndex, 1);
    updateResumeData(updatedResumeData);
  };

  return (
    <Project
      templateData={resumeData?.templateData?.projects}
      addNewProjectSection={addNewProjectSection}
      handleDeleteProjectSection={handleDeleteProjectSection}
      handleInputChange={handleInputChange}
      handleHighlightsChange={handleHighlightsChange}
      handleAddHighlight={handleAddHighlight}
      handleDeleteHighlight={handleDeleteHighlight}
    />
  );
};

export default ProjectContainer;
