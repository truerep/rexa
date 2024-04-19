import React, {
  useContext,
  useEffect
} from 'react';
import {
  useRouter
} from 'next/router';
import toast from 'react-hot-toast';
import Builder from './Builder';
import {
  ResumeContext
} from '@/context/ResumeContext';
import {
  getResumeData
} from '@/api';

const BuilderContainer = () => {
  const router = useRouter();
  const {resumeData, updateResumeData} = useContext(ResumeContext);

  const fetchResumeData = async (resumeId) => {
    try {
      const res = await getResumeData(resumeId);
      if (res?.data?.data) {
        updateResumeData((prevState) => {
          return {
            ...prevState,
            resumeId,
            templateName: res?.data?.name ?? 'Unnamed',
            resumeString: res?.data?.rawData,
            templateData: JSON.parse(res.data.data)
          };
        });
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
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
    <Builder handlePreview={handlePreview} togglePreview={resumeData?.togglePreview} />
  );
};

export default BuilderContainer;
