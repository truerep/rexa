import React, {
  useContext, useRef, useState
} from 'react';
import Experience from './Experience';
import {
  ResumeContext
} from '@/context/ResumeContext';
import toast from 'react-hot-toast';
import { updateSection } from '@/api';

const ExperienceContainer = () => {
  const { resumeData, updateResumeData } = useContext(ResumeContext);
  const [showPromptModal, setShowPromptModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [promptText, setPromptText] = useState('');
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);
  const experienceRef = useRef(null);

  // Add New Experience Section
  const addNewExperienceSection = () => {
    toast.loading('Adding Experience...', {
      id: 'adding-experience'
    });
    const updatedResumeData = { ...resumeData };
    updatedResumeData.templateData.work.push({
      company: 'Company Name',
      position: 'Position in this company',
      website: 'http://websiteUrl.com',
      startDate: 'Jan 2015',
      endDate: 'Present',
      highlights: [
        'Work information point 1'
      ]
    });
    updateResumeData(updatedResumeData);
    setTimeout(() => {
      if (experienceRef.current) {
        experienceRef.current.scrollTo({
          top: experienceRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }
    }, 500);
    toast.success('Experience added!', {
      id: 'adding-experience'
    });
  };

  // Remove Experience Section
  const handleDeleteWorkSection = (index) => {
    toast.loading('Removing Experience...', {
      id: 'removing-experience'
    });
    const updatedResumeData = { ...resumeData };
    updatedResumeData.templateData.work.splice(index, 1);
    updateResumeData(updatedResumeData);
    toast.success('Experience Removed!', {
      id: 'removing-experience'
    });
  };

  // Update data from Input fields
  const handleInputChange = (index, key, value) => {
    const updatedResumeData = { ...resumeData };
    updatedResumeData.templateData.work[index][key] = value;
    updateResumeData(updatedResumeData);
  };

  // Update data for Highlights
  const handleHighlightsChange = (index, hIndex, value) => {
    const updatedResumeData = { ...resumeData };
    updatedResumeData.templateData.work[index].highlights[hIndex] = value;
    updateResumeData(updatedResumeData);
  };

  // Add Highlight Item
  const handleAddHighlight = (index) => {
    const updatedResumeData = { ...resumeData };
    updatedResumeData.templateData.work[index].highlights.push('Add work highlight');
    updateResumeData(updatedResumeData);
  };

  // Delete Highlight Item
  const handleDeleteHighlight = (index, hIndex) => {
    const updatedResumeData = { ...resumeData };
    updatedResumeData.templateData.work[index].highlights.splice(hIndex, 1);
    updateResumeData(updatedResumeData);
  };

  // Modify Hightlights Using Prompt
  const handleModifyHighlights = async () => {
    if (promptText.length > 0) {
      setIsLoading(true);
      toast.loading('Modifying resume...', {
        id: 'modifying-resume'
      });
      let olderHighlights = resumeData?.templateData?.work[currentWorkIndex]?.highlights.join(', ')
      let payload = {
        resume: olderHighlights,
        prompt: promptText
      }
      try {
        const res = await updateSection(payload, 'work');
        if (res?.data) {
          let newHighlights = res.data[0]?.highlights;
          const updatedResumeData = { ...resumeData };
          updatedResumeData?.templateData?.work[currentWorkIndex]?.highlights.splice(0, updatedResumeData?.templateData?.work[currentWorkIndex]?.highlights?.length, ...newHighlights);
          updateResumeData(updatedResumeData);
        }
        toast.success('Resume modified!', {
          id: 'modifying-resume'
        });
      } catch (err) {
        toast.error(err?.response?.data?.message ?? 'Error modifying resume!', {
          id: 'modifying-resume'
        });
      } finally {
        setIsLoading(false);
        setShowPromptModal(false);
        setPromptText('');
      }
    }
  }

  return (
    <Experience
      templateData={resumeData?.templateData?.work}
      experienceRef={experienceRef}
      addNewExperienceSection={addNewExperienceSection}
      handleDeleteWorkSection={handleDeleteWorkSection}
      handleInputChange={handleInputChange}
      handleHighlightsChange={handleHighlightsChange}
      handleAddHighlight={handleAddHighlight}
      handleDeleteHighlight={handleDeleteHighlight}
      handleModifyHighlights={handleModifyHighlights}
      showPromptModal={showPromptModal}
      setShowPromptModal={setShowPromptModal}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
      promptText={promptText}
      setPromptText={setPromptText}
      setCurrentWorkIndex={setCurrentWorkIndex}
    />
  );
};

export default ExperienceContainer;
