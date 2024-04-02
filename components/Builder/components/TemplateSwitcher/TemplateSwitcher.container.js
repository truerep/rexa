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
  const {updateResumeData} = useContext(ResumeContext);

  const handleTemplateChange = async () => {
    updateResumeData((prevState) => {
      return {
        ...prevState,
        templateId,
        toggleTemplatesPopover: false
      };
    });
  };

  return (
    <TemplateSwitcher
      templateId={templateId}
      setTemplateId={setTemplateId}
      handleTemplateChange={handleTemplateChange}
    />
  );
};

export default TemplateSwitcherContainer;
