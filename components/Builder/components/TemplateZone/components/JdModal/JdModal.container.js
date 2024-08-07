import React, {
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import toast from 'react-hot-toast';
import JdModal from './JdModal';
import {
  ResumeContext
} from '@/context/ResumeContext';
import {
  getModifiedResume
} from '@/api';
import { useRouter } from 'next/router';

const JdModalContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [jobDescription, setJobDescription] = useState('');
  const { resumeData, updateResumeData } = useContext(ResumeContext);

  const textAreaRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    if (router.query?.jobDescription === 'copy-paste') {
      textAreaRef && textAreaRef.current?.focus()
      navigator.clipboard.readText().then((text) => {
        setJobDescription(text);
      });
    }
  }, [router.query]);

  const redirectToCreateResumePage = () => {
    router.push('/create');
  };


  const modifyResume = async () => {
    try {
      if (jobDescription.length && resumeData?.resumeString) {
        setIsLoading(true);
        toast.loading('Modifying resume...', {
          id: 'modifying-resume'
        });
        const res = await getModifiedResume(resumeData.resumeString, jobDescription);
        if (res?.basics) {
          toast.success('Resume modified!', {
            id: 'modifying-resume'
          });
          updateResumeData((prevState) => {
            return {
              ...prevState,
              toggleJdModal: false,
              templateData: res
            };
          });
          setJobDescription('');
        }
      } else { 
        toast.error('Please enter job description and make sure you have a resume!', {
          id: 'modifying-resume'
        });
      }
    } catch (err) {
      toast.error(err?.response?.data?.message ?? 'Error modifying resume!', {
        id: 'modifying-resume'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <JdModal
      isLoading={isLoading}
      jobDescription={jobDescription}
      setJobDescription={setJobDescription}
      ref={textAreaRef}
      modifyResume={modifyResume}
      resumeData={resumeData}
      redirectToCreateResumePage={redirectToCreateResumePage}
    />
  );
};

export default JdModalContainer;
