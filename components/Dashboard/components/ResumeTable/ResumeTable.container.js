import React, {
  useEffect, useState
} from 'react';
import toast from 'react-hot-toast';

import {
  deleteResume,
  getUserResumes
} from '@/api';
import ResumeTable from './ResumeTable';

const ResumeTableContainer = () => {
  const [userResumes, setUserResumes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [toggleCreate, setToggleCreate] = useState(false);

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

  return (
    <ResumeTable
      userResumes={userResumes}
      handleDeleteResume={handleDeleteResume}
      isLoading={isLoading}
      toggleCreate={toggleCreate}
      setToggleCreate={setToggleCreate}
    />
  );
};
export default ResumeTableContainer;
