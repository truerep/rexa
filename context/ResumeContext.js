import { MODERN_PRISM } from '@/helpers/templateKeys';
import React, {
  createContext, useState
} from 'react';

export const ResumeContext = createContext();

const ResumeContextProvider = ({children}) => {
  const [resumeData, setResumeData] = useState({
    templateId: MODERN_PRISM,
    toggleJdModal: false,
    toggleTemplatesPopover: false,
    togglePreview: false,
    contentSectionName: 'basics',
    templateUniqueId: '663e402cd805993f9b9b98e1' // TODO: Update this later with dynamic data
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
