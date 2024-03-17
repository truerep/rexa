import React, {
  useState
} from 'react';
import {
  useRouter
} from 'next/router';
import CopyPaste from './CopyPaste';
import {
  getResumeText
} from '@/api';

const CopyPasteContainer = () => {
  const [resumeText, setResumeText] = useState('');

  const router = useRouter();

  const handleText = async () => {
    try {
      sessionStorage.setItem('resumeString', resumeText);
      router.push('/builder');
    } catch (err) {}
  };

  return (
    <CopyPaste
      resumeText={resumeText}
      setResumeText={setResumeText}
      handleText={handleText}
    />
  );
};

export default CopyPasteContainer;
