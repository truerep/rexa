import React, {
  useContext,
  useEffect,
  useState
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
  getModifiedResume,
  getResumeData, getUserResumes
} from '@/api';

const BuilderContainer = () => {
  const [toggleResumesList, setToggleResumesList] = useState(false);
  const [userResumes, setUserResumes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const {resumeData, updateResumeData} = useContext(ResumeContext);

  const handleGeneratingResume = async (index) => {
    try {
      setToggleResumesList(false)
      let storedJobDescription = typeof window !== 'undefined' && window.sessionStorage.getItem('jobDescription');
      const res = await getModifiedResume(userResumes[index].rawData, storedJobDescription)
      console.log(res);
      if (res?.basics) {
        toast.success('Resume generated!', {
          id: 'modifying-resume'
        });
        updateResumeData((prevState) => {
          return {
            ...prevState,
            templateData: res
          };
        });
      }
    } catch (err) {
      toast.error(err?.response?.data?.message ?? 'Something went wrong!');
    } 
  }

  const fetchUserResumes = async () => {
    try {
      const res = await getUserResumes();
      if (res?.status === 200) {
        setUserResumes(res?.data);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message ?? 'Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  };

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
    } else if (router.query.syncWithJobDescription == '') {
      setToggleResumesList(true);
      setIsLoading(true);
      fetchUserResumes();
      if (!document.hasFocus()) {
        document.body.focus();
      }
      navigator.clipboard.readText().then((text) => {
        sessionStorage.setItem('jobDescription', text);
      });
    } else if (router.query.fetchLocalData == '') {
      const localResumeData = JSON.parse(localStorage.getItem('resumeDataLocally'))
      localStorage.removeItem('resumeDataLocally');
      updateResumeData(() => localResumeData);
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
      userResumes={userResumes}
      toggleResumesList={toggleResumesList}
      setToggleResumesList={setToggleResumesList}
      isLoading={isLoading}
      handleGeneratingResume={handleGeneratingResume}
      handlePreview={handlePreview} 
      togglePreview={resumeData?.togglePreview} 
    />
  );
};

export default BuilderContainer;
