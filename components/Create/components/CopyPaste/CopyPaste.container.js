import React, {
  useEffect,
  useRef,
  useState
} from 'react';
import {
  useRouter
} from 'next/router';
import CopyPaste from './CopyPaste';

const CopyPasteContainer = () => {
  const [resumeText, setResumeText] = useState('');
  const textAreaRef = useRef(null);

  const router = useRouter();

  const handleText = async () => {
    try {
      sessionStorage.setItem('resumeString', resumeText);
      router.push('/builder');
    } catch (err) { }
  };

  useEffect(() => {
    if (router.query?.tab === 'copy-paste') {
      textAreaRef && textAreaRef.current?.focus()
      navigator.clipboard.readText().then((text) => {
        setResumeText(text);
      });
    }
  }, [router.query]);

  return (
    <CopyPaste
      resumeText={resumeText}
      setResumeText={setResumeText}
      handleText={handleText}
      ref={textAreaRef}
    />
  );
};

export default CopyPasteContainer;
