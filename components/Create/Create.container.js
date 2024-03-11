import React from 'react';
import {
  useRouter
} from 'next/router';
import Create from './Create';
import {
  getResumeText
} from '@/api';

const CreateContainer = () => {
  const router = useRouter();

  const handleResumeUpload = async (file) => {
    try {
      const res = await getResumeText(file);
      sessionStorage.setItem('resumeString', res);
      if (res) {
        router.push('/builder');
      }
    } catch (err) {}
  };

  return (
    <Create handleResumeUpload={handleResumeUpload} />
  );
};

export default CreateContainer;
