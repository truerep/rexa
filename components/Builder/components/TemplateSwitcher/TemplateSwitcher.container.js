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

import toast from 'react-hot-toast';

const TemplateSwitcherContainer = () => {
  const [templateId, setTemplateId] = useState('');
  const [initialIndex, setInitialIndex] = useState(0);
  const [getAllTemplates, setGetAllTemplates] = useState([]);
  const [templatePreview, setTemplatePreview] = useState(false);
  const { resumeData, updateResumeData } = useContext(ResumeContext);

  useEffect(() => {
    getAllTemplatesData().then((data) => {
      setGetAllTemplates(data);
    }).catch((error) => {
      toast.error(error?.response?.data?.error || error?.message || 'Error fetching templates data');
      console.error('Error fetching templates data: ', error?.response?.data?.error || error?.message || error);
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
