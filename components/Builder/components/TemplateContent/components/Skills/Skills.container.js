import React, {
  useContext
} from 'react';
import Skills from './Skills';
import {
  ResumeContext
} from '@/context/ResumeContext';

const SkillsContainer = () => {
  const {resumeData, updateResumeData} = useContext(ResumeContext);

  // Update Skill
  const updateSkill = (index, subindex, newSkill) => {
    const updatedResumeData = {...resumeData};
    updatedResumeData.templateData.skills[index].keywords[subindex] = newSkill;
    updateResumeData(updatedResumeData);
  };

  const handleUpdateSkill = (skillSetIndex, skillIndex, skill) => {
    updateSkill(skillSetIndex, skillIndex, skill);
  };

  // Update Skill Section Title
  const updateSkillSectionTitle = (index, skillSectionTitle) => {
    const updatedResumeData = {...resumeData};
    updatedResumeData.templateData.skills[index].name = skillSectionTitle;
    updateResumeData(updatedResumeData);
  };

  const handleUpdateSkillSectionTitle = (skillSetIndex, skillSectionTitle) => {
    updateSkillSectionTitle(skillSetIndex, skillSectionTitle);
  };

  // Delete Skill Item
  const deleteSkill = (index, subindex) => {
    const updatedResumeData = {...resumeData};
    updatedResumeData.templateData.skills[index].keywords.splice(subindex, 1);
    updateResumeData(updatedResumeData);
  };

  const handleDeleteSkill = (index, subindex) => {
    deleteSkill(index, subindex);
  };

  // Delete Skill Section
  const deleteSkillSection = (index) => {
    const updatedResumeData = {...resumeData};
    updatedResumeData.templateData.skills.splice(index, 1);
    updateResumeData(updatedResumeData);
  };

  const handleDeleteSkillSection = (index) => {
    deleteSkillSection(index);
  };

  // Add Skill Item
  const addSkill = (subIndex) => {
    const updatedResumeData = {...resumeData};
    updatedResumeData.templateData.skills[subIndex].keywords.push('Add New Skill');
    updateResumeData(updatedResumeData);
  };

  const handleAddSkill = (subIndex) => {
    addSkill(subIndex);
  };

  // Add New Skill Section
  const addNewSkillSection = () => {
    const updatedResumeData = {...resumeData};
    updatedResumeData.templateData.skills.push({
      name: 'New Skill Section',
      level: 'Set Experience Level',
      keywords: []
    });
    updateResumeData(updatedResumeData);
  };

  const handleClose = () => {
    const updatedResumeData = { ...resumeData };
    updatedResumeData.contentSectionName = '';
    updateResumeData(updatedResumeData);
  }

  return (
    <Skills
      templateData={resumeData?.templateData?.skills}
      handleUpdateSkill={handleUpdateSkill}
      handleUpdateSkillSectionTitle={handleUpdateSkillSectionTitle}
      handleDeleteSkill={handleDeleteSkill}
      handleDeleteSkillSection={handleDeleteSkillSection}
      handleAddSkill={handleAddSkill}
      addNewSkillSection={addNewSkillSection}
      handleClose={handleClose}
    />
  );
};

export default SkillsContainer;
