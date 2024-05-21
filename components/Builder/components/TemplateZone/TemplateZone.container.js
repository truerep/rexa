import React, {
  useContext,
  useEffect,
  useState
} from 'react';

import TemplateZone from './TemplateZone';
import {
  getResumeJson
} from '@/api';
import {
  ResumeContext
} from '@/context/ResumeContext';

const TemplateZoneContainer = () => {
  const [showJdModal, setShowJdModal] = useState();
  const [resumeString, setResumeString] = useState('');
  const {resumeData, updateResumeData} = useContext(ResumeContext);

  const getResumeData = async () => {
    try {
      const res = await getResumeJson(resumeString);
      if (res?.basics) {
        updateResumeData((prevState) => {
          return {
            ...prevState,
            resumeString,
            templateData: res
          };
        });
      }
    } catch (err) {
    }
  };

  useEffect(() => {
    let storedResumeString = typeof window !== 'undefined' && window.sessionStorage.getItem('resumeString');
    if (storedResumeString) {
      storedResumeString = JSON.parse(storedResumeString);
      if (resumeString?.length === 0) {
        setResumeString(storedResumeString?.text);
      }
    }
  }, []);

  useEffect(() => {
    setShowJdModal(resumeData.toggleJdModal);
  }, [resumeData]);

  useEffect(() => {
    if (resumeString?.length > 0) {
      getResumeData();
    }
  }, [resumeString]);

  return (
    <TemplateZone
      showJdModal={showJdModal}
      setShowJdModal={setShowJdModal}
    />
  );
};

export default TemplateZoneContainer;
