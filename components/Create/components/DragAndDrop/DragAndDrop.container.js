import React, {
  useState
} from 'react';
import {
  useRouter
} from 'next/router';
import toast from 'react-hot-toast';
import DragAndDrop from './DragAndDrop';
import {
  getResumeText
} from '@/api';

const DragAndDropContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState(null);

  const router = useRouter();

  const handleResumeUpload = async (resumeFile) => {
    setIsLoading(true);
    try {
      toast.loading('Uploading resume...', {
        id: 'uploading-resume'
      });
      const res = await getResumeText(resumeFile);
      if (res) {
        toast.success('Resume uploaded!', {
          id: 'uploading-resume'
        });
        sessionStorage.setItem('resumeString', res);
        router.push('/builder');
      }
    } catch (err) {
      toast.error(err?.response?.data?.message ?? 'Something went wrong uploading resume!', {
        id: 'uploading-resume'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const newFile = e.dataTransfer.files[0];
    setFile(newFile);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <DragAndDrop
      dragging={dragging}
      file={file}
      isLoading={isLoading}
      handleDragLeave={handleDragLeave}
      handleDragOver={handleDragOver}
      handleDrop={handleDrop}
      handleFileChange={handleFileChange}
      removeFile={removeFile}
      handleDragEnter={handleDragEnter}
      handleResumeUpload={handleResumeUpload}
    />
  );
};

export default DragAndDropContainer;
