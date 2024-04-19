import React, {
  createContext, useState
} from 'react';

export const ResumeContext = createContext();

const ResumeContextProvider = ({children}) => {
  const [resumeData, setResumeData] = useState({
    templateId: 'starter',
    toggleJdModal: false,
    toggleTemplatesPopover: false,
    togglePreview: false,
    contentSectionName: 'basic'
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
