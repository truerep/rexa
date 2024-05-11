import React, {
  useEffect, useState
} from 'react';
import toast from 'react-hot-toast';

import {
  createResume,
  deleteResume,
  getUserResumes
} from '@/api';
import ResumeTable from './ResumeTable';
import {
 useRouter
} from 'next/router';

const ResumeTableContainer = () => {
  const [userResumes, setUserResumes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [toggleCreate, setToggleCreate] = useState(false);
  const [toggleCreateOptions, setToggleCreateOptions] = useState(false);
  const [toggleResumesList, setToggleResumesList] = useState(false)
  const [activeMenuIdx, setActiveMenuIdx] = useState(-1)

  const router = useRouter()

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

  useEffect(() => {
    fetchUserResumes();
  }, []);

  const handleDeleteResume = async (resumeId) => {
    try {
      toast.loading('Deleting resume...', {
        id: 'delete-resume'
      });
      const res = await deleteResume(resumeId);
      if (res?.status === 200) {
        fetchUserResumes();
        toast.success('Resume deleted!', {
          id: 'delete-resume'
        });
      }
    } catch (err) {
      toast.dismiss('delete-resume');
      toast.error(err?.response?.data?.message ?? 'Error deleting resume!');
    }
  };

  const handleDuplicatingResume = async (resumeId) => {
    try {
      toast.loading('Creating Copy...', {
        id: 'copying-resume'
      });
      console.log(userResumes, "<---resumesList")
      const getResume = userResumes.find(obj => obj._id === resumeId);
      console.log(getResume, "<---reds")
      const payload = {
        templateId: '66142be639e68974d5d19a02',
        name: `${getResume?.name} copy`,
        resumeUrl: "TODO:UpdateLater",
        rawData: getResume?.rawData,
        data: getResume?.data
      };
      const res = await createResume(payload);
      if (res?.data?._id) {
        toast.success('Resume copied!', {
          id: 'copying-resume'
        });
        router.push(`/builder/${res?.data?._id}`);
      } else {
        toast.error('Something went wrong!');
      }
    } catch (err) {
      toast.dismiss('copying-resume');
      toast.error(err?.response?.data?.message ?? 'Something went wrong!');
    } finally {
      setToggleResumesList(false);
    }
  }

  return (
    <ResumeTable
      userResumes={userResumes}
      handleDeleteResume={handleDeleteResume}
      handleDuplicatingResume={handleDuplicatingResume}
      isLoading={isLoading}
      toggleCreate={toggleCreate}
      setToggleCreate={setToggleCreate}
      toggleCreateOptions={toggleCreateOptions}
      setToggleCreateOptions={setToggleCreateOptions}
      toggleResumesList={toggleResumesList}
      setToggleResumesList={setToggleResumesList}
      activeMenuIdx={activeMenuIdx}
      setActiveMenuIdx={setActiveMenuIdx}
    />
  );
};
export default ResumeTableContainer;
