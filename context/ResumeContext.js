import { templateKeys } from '@/helpers';

import React, {
  createContext, useState
} from 'react';

export const ResumeContext = createContext();

const ResumeContextProvider = ({children}) => {
  const [resumeData, setResumeData] = useState({
    templateId: templateKeys.MODERN_PRISM,
    toggleJdModal: false,
    toggleTemplatesPopover: false,
    togglePreview: false,
    contentSectionName: '',
    templateUniqueId: '66eafc870f641ea8a1472414'
  });

  const updateResumeData = (newResumeData) => {
    setResumeData(newResumeData);
  };

  return (
    <ResumeContext.Provider value={{resumeData, updateResumeData}}>
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeContextProvider;
