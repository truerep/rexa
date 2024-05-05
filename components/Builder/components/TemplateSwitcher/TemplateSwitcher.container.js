import React, {
  useContext,
  useState
} from 'react';
import TemplateSwitcher from './TemplateSwitcher';
import {
  ResumeContext
} from '@/context/ResumeContext';

const TemplateSwitcherContainer = () => {
  const [templateId, setTemplateId] = useState('');
  const [templatePreview, setTemplatePreview] = useState(false);
  const { updateResumeData } = useContext(ResumeContext);

  const handleTemplateChange = async () => {
    updateResumeData((prevState) => {
      return {
        ...prevState,
        templateId,
        toggleTemplatesPopover: false
      };
    });
  };

  const handlePreview = () => {
    setTemplatePreview(!templatePreview);
  }

  return (
    <TemplateSwitcher
      templateId={templateId}
      setTemplateId={setTemplateId}
      handlePreview={handlePreview}
      templatePreview={templatePreview}
      handleTemplateChange={handleTemplateChange}
    />
  );
};

export default TemplateSwitcherContainer;
