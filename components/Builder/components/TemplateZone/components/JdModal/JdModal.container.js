import React, {
  useContext,
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

const JdModalContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const { resumeData, updateResumeData } = useContext(ResumeContext);

  const modifyResume = async () => {
    try {
      setIsLoading(true);
      toast.loading('Modifying resume...', {
        id: 'modifying-resume'
      });
      if (jobDescription.length > 0 && resumeData?.resumeString) {
        const textForAI = prompt ? prompt + " " + jobDescription : jobDescription;
        
        const res = await getModifiedResume(resumeData.resumeString, textForAI);
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
          setPrompt('');
          setJobDescription('');
        }
      } else { }
    } catch (err) {
      toast.error(err?.response?.data?.error ?? 'Error modifying resume!', {
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
      prompt={prompt}
      setPrompt={setPrompt}
      modifyResume={modifyResume}
    />
  );
};

export default JdModalContainer;
