import React, {
  useContext
} from 'react';
import Interests from './Interests';
import {
  ResumeContext
} from '@/context/ResumeContext';

const InterestsContainer = () => {
  const { resumeData, updateResumeData } = useContext(ResumeContext);

  // Update Interest
  const updateInterest = (index, subindex, newInterest) => {
    const updatedResumeData = { ...resumeData };
    updatedResumeData.templateData.interests[index].keywords[subindex] = newInterest;
    updateResumeData(updatedResumeData);
  };

  const handleUpdateInterest = (InterestsetIndex, InterestIndex, Interest) => {
    updateInterest(InterestsetIndex, InterestIndex, Interest);
  };

  // Update Interest Section Title
  const updateInterestsectionTitle = (index, InterestsectionTitle) => {
    const updatedResumeData = { ...resumeData };
    updatedResumeData.templateData.interests[index].name = InterestsectionTitle;
    updateResumeData(updatedResumeData);
  };

  const handleUpdateInterestsectionTitle = (InterestsetIndex, InterestsectionTitle) => {
    updateInterestsectionTitle(InterestsetIndex, InterestsectionTitle);
  };

  // Delete Interest Item
  const deleteInterest = (index, subindex) => {
    const updatedResumeData = { ...resumeData };
    updatedResumeData.templateData.interests[index].keywords.splice(subindex, 1);
    updateResumeData(updatedResumeData);
  };

  const handleDeleteInterest = (index, subindex) => {
    deleteInterest(index, subindex);
  };

  // Delete Interest Section
  const deleteInterestsection = (index) => {
    const updatedResumeData = { ...resumeData };
    updatedResumeData.templateData.interests.splice(index, 1);
    updateResumeData(updatedResumeData);
  };

  const handleDeleteInterestsection = (index) => {
    deleteInterestsection(index);
  };

  // Add Interest Item
  const addInterest = (subIndex) => {
    const updatedResumeData = { ...resumeData };
    updatedResumeData.templateData.interests[subIndex].keywords.push('Add New Interest');
    updateResumeData(updatedResumeData);
  };

  const handleAddInterest = (subIndex) => {
    addInterest(subIndex);
  };

  // Add New Interest Section
  const addNewInterestsection = () => {
    const updatedResumeData = { ...resumeData };
    updatedResumeData.templateData.interests.push({
      name: 'New Interest Section',
      keywords: []
    });
    updateResumeData(updatedResumeData);
  };

  return (
    <Interests
      templateData={resumeData?.templateData?.interests}
      handleUpdateInterest={handleUpdateInterest}
      handleUpdateInterestsectionTitle={handleUpdateInterestsectionTitle}
      handleDeleteInterest={handleDeleteInterest}
      handleDeleteInterestsection={handleDeleteInterestsection}
      handleAddInterest={handleAddInterest}
      addNewInterestsection={addNewInterestsection}
    />
  );
};

export default InterestsContainer;
