import React, {
  useContext,
  useEffect
} from 'react';
import toast from 'react-hot-toast';
import Builder from './Builder';
import {
  ResumeContext
} from '@/context/ResumeContext';
import {
  getResumeData,
  getTempResumeJsonData
} from '@/api';
import { useRouter } from 'next/router';

const BuilderContainer = () => {
  const {resumeData, updateResumeData} = useContext(ResumeContext);
  
  const router = useRouter();

  const getTempResumeData = async () => {
    try {
      const res = await getTempResumeJsonData();
      if (res?.basics) {
        sessionStorage.setItem('resumeString', JSON.stringify(res));
        updateResumeData((prevState) => {
          return {
            ...prevState,
            resumeString: JSON.stringify(res),
            templateData: res
          };
        });
      }
    } catch (err) {
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth > 768) {
        const updatedResumeData = { ...resumeData };
        updatedResumeData.contentSectionName = 'basics';
        updateResumeData(updatedResumeData);
      }
    }
  }, []);

  const fetchResumeData = async (resumeId) => {
    try {
      const res = await getResumeData(resumeId);
      if (res?.data?.data) {
        updateResumeData((prevState) => {
          return {
            ...prevState,
            resumeId,
            templateId: res?.data?.templateId?.slug,
            templateUniqueId: res?.data?.templateId?._id,
            templateName: res?.data?.name ?? 'Unnamed',
            resumeString: res?.data?.rawData,
            templateData: JSON.parse(res.data.data)
          };
        });
      }
    } catch (err) {
      toast.error(err?.response?.data?.error);
      router.push('/create');
    }
  };

  useEffect(() => {
    if (router.query.token) {
      localStorage.removeItem('auth_token');
      localStorage.setItem('auth_token', router.query.token);
      router.push('/builder');
    } else if (router.query.resumeId) {
      fetchResumeData(router.query.resumeId);
    } else if (router.query.fetchLocalData == '') {
      const localResumeData = JSON.parse(localStorage.getItem('resumeDataLocally'))
      localStorage.removeItem('resumeDataLocally');
      updateResumeData(() => localResumeData);
    } else if (router.query.createNew) {
      getTempResumeData();
    }
  }, [router]);

  const handlePreview = () => {
    if (resumeData?.togglePreview === true) {
      const newResumeData = {
        ...resumeData,
        togglePreview: false
      };

      updateResumeData(newResumeData);
    }
  };

  return (
    <Builder 
      handlePreview={handlePreview} 
      togglePreview={resumeData?.togglePreview} 
    />
  );
};

export default BuilderContainer;
