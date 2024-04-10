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
      console.log(res?.data, '<---resumedata - db');
      console.log(resumeData, '<---resumeData - context');
      console.log(res?.data?.id, '<-----resumeID');
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
      console.log(router.query, '<--resumeId');
    }
  }, [router]);

  return (
    <Builder />
  );
};

export default BuilderContainer;
