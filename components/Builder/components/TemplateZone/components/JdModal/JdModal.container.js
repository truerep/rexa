import React, {
  useContext,
  useState
} from 'react';
import JdModal from './JdModal';
import {
  ResumeContext
} from '@/context/ResumeContext';
import {
  getModifiedResume
} from '@/api';

const JdModalContainer = () => {
  const [jobDescription, setJobDescription] = useState('');
  const {resumeData, updateResumeData} = useContext(ResumeContext);

  const modifyResume = async () => {
    try {
      if (jobDescription.length > 0 && resumeData?.resumeString) {
        const res = await getModifiedResume(resumeData.resumeString, jobDescription);
        if (res?.basics) {
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
        console.log('<---something went wrong');
      }
    } catch (err) {}
  };

  return (
    <JdModal
      jobDescription={jobDescription}
      setJobDescription={setJobDescription}
      modifyResume={modifyResume}
    />
  );
};

export default JdModalContainer;
