import React, {
  useContext,
  useEffect,
  useState
} from 'react';
import TemplateSwitcher from './TemplateSwitcher';
import {
  ResumeContext
} from '@/context/ResumeContext';
import { getAllTemplatesData } from '@/api/Template';

const TemplateSwitcherContainer = () => {
  const [templateId, setTemplateId] = useState('');
  const [getAllTemplates, setGetAllTemplates] = useState([]);
  const [templatePreview, setTemplatePreview] = useState(false);
  const { updateResumeData } = useContext(ResumeContext);

  useEffect(() => {
    getAllTemplatesData().then((data) => {
      setGetAllTemplates(data);
    });
  }, [])
  

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
      templatesData={getAllTemplates}
    />
  );
};

export default TemplateSwitcherContainer;
