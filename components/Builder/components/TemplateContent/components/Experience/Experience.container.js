import React, {
  useContext
} from 'react';
import Experience from './Experience';
import {
  ResumeContext
} from '@/context/ResumeContext';
import toast from 'react-hot-toast';
import { updateWorkSection } from '@/api';

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

  // Remove Experience Section
  const handleDeleteWorkSection = (index) => {
    const updatedResumeData = {...resumeData};
    updatedResumeData.templateData.work.splice(index, 1);
    updateResumeData(updatedResumeData);
  };

  // Update data from Input fields
  const handleInputChange = (index, key, value) => {
    const updatedResumeData = {...resumeData};
    updatedResumeData.templateData.work[index][key] = value;
    updateResumeData(updatedResumeData);
  };

  // Update data for Highlights
  const handleHighlightsChange = (index, hIndex, value) => {
    const updatedResumeData = {...resumeData};
    updatedResumeData.templateData.work[index].highlights[hIndex] = value;
    updateResumeData(updatedResumeData);
  };

  // Add Highlight Item
  const handleAddHighlight = (index) => {
    const updatedResumeData = {...resumeData};
    updatedResumeData.templateData.work[index].highlights.push('Add work highlight');
    updateResumeData(updatedResumeData);
  };

  // Delete Highlight Item
  const handleDeleteHighlight = (index, hIndex) => {
    const updatedResumeData = {...resumeData};
    updatedResumeData.templateData.work[index].highlights.splice(hIndex, 1);
    updateResumeData(updatedResumeData);
  };

  // Modify Hightlights Using Prompt
  const handleModifyHighlights = async (index) => {
    const modifiedHighlights = prompt('Enter prompt to improve your work section', 'Modify my work summary according on this Job Description... ');
    if (modifiedHighlights) {
      let olderHighlights = resumeData?.templateData?.work[index]?.highlights.join('. ')
      let payload = {
        resume: olderHighlights,
        prompt: modifiedHighlights
      }
      try {
        const res = await updateWorkSection(payload);
        if (res?.data) {
          let newHighlights = res.data[0]?.highlights;
          const updatedResumeData = {...resumeData};
          updatedResumeData?.templateData?.work[index]?.highlights.splice(0, updatedResumeData?.templateData?.work[index]?.highlights?.length, ...newHighlights);
          updateResumeData(updatedResumeData);
        }
      } catch (error) {
        toast.error("Error modifying work!")
      }
    }
  }

  return (
    <Experience
      templateData={resumeData?.templateData?.work}
      addNewExperienceSection={addNewExperienceSection}
      handleDeleteWorkSection={handleDeleteWorkSection}
      handleInputChange={handleInputChange}
      handleHighlightsChange={handleHighlightsChange}
      handleAddHighlight={handleAddHighlight}
      handleDeleteHighlight={handleDeleteHighlight}
      handleModifyHighlights={handleModifyHighlights}
    />
  );
};

export default ExperienceContainer;
