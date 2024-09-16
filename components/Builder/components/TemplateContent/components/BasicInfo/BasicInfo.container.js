import React, {
  useContext, useState
} from 'react';
import BasicInfo from './BasicInfo';
import {
  ResumeContext
} from '@/context/ResumeContext';
import { updateSection } from '@/api';
import toast from 'react-hot-toast';

const BasicInfoContainer = () => {
  const { resumeData, updateResumeData } = useContext(ResumeContext);
  const [isLoading, setIsLoading] = useState(false);
  const [showPromptModal, setShowPromptModal] = useState(false);
  const [promptText, setPromptText] = useState('');

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

  const handleModifySummary = async () => {
    if (promptText.length > 0) {
      setIsLoading(true);
      toast.loading('Modifying resume...', {
        id: 'modifying-resume'
      });
      let olderSummary = resumeData?.templateData?.basics?.summary
      let payload = {
        resume: olderSummary,
        prompt: promptText
      }
      try {
        const res = await updateSection(payload, 'basics');
        if (res?.data) {
          let newSummary = res?.data?.summary;
          const updatedResumeData = { ...resumeData };
          updatedResumeData.templateData.basics.summary = newSummary;
          updateResumeData(updatedResumeData);
        }
        toast.success('Resume modified!', {
          id: 'modifying-resume'
        });
      } catch (err) {
        toast.error(err?.response?.data?.error ?? 'Error modifying resume!', {
          id: 'modifying-resume'
        });
      } finally {
        setIsLoading(false);
        setShowPromptModal(false);
        setPromptText('');
      }
    }
  }

  const handleClose = () => {
    const updatedResumeData = { ...resumeData };
    updatedResumeData.contentSectionName = '';
    updateResumeData(updatedResumeData);
  }

  return (
    <BasicInfo
      showPromptModal={showPromptModal}
      setShowPromptModal={setShowPromptModal}
      promptText={promptText}
      setPromptText={setPromptText}
      isLoading={isLoading}
      handleModifySummary={handleModifySummary}
      templateData={resumeData?.templateData?.basics}
      handleInputChange={handleInputChange}
      handleClose={handleClose}
    />
  );
};

export default BasicInfoContainer;
