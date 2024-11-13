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
    if (!jobDescription.length || !resumeData?.resumeString) return;

    try {
      setIsLoading(true);
      toast.loading('Modifying resume...', { id: 'modifying-resume' });

      const textForAI = prompt ? `${prompt} ${jobDescription}` : jobDescription;
      const res = await getModifiedResume(resumeData.resumeString, textForAI);

      if (res?.basics) {
        toast.success('Resume modified!', { id: 'modifying-resume' });

        const storedResumeString = window?.sessionStorage?.getItem('resumeString');
        const url = JSON.parse(storedResumeString)?.url;

        window.sessionStorage.setItem('resumeString', JSON.stringify({ url, text: res }));

        updateResumeData(prevState => ({
          ...prevState,
          toggleJdModal: false,
          resumeString: JSON.stringify(res),
          templateData: res
        }));

        setPrompt('');
        setJobDescription('');
      }
    } catch (err) {
      toast.error(err?.response?.data?.error ?? 'Error modifying resume!', { id: 'modifying-resume' });
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
