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
  const [initialIndex, setInitialIndex] = useState(0);
  const [getAllTemplates, setGetAllTemplates] = useState([]);
  const [templatePreview, setTemplatePreview] = useState(false);
  const { resumeData, updateResumeData } = useContext(ResumeContext);

  useEffect(() => {
    getAllTemplatesData().then((data) => {
      setGetAllTemplates(data);
    });
  }, []);

  useEffect(() => {
    setInitialIndex(Object.keys(getAllTemplates).indexOf(resumeData.templateId));
  }, [resumeData, getAllTemplates]);

  const handleTemplateChange = async (templateUniqueId) => {
    updateResumeData((prevState) => {
      return {
        ...prevState,
        templateId,
        templateUniqueId,
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
      initialIndex={initialIndex}
    />
  );
};

export default TemplateSwitcherContainer;
