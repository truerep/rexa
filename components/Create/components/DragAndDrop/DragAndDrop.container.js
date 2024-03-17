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
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState(null);

  const router = useRouter();

  const handleResumeUpload = async (resumeFile) => {
    try {
      const res = await getResumeText(resumeFile);
      if (res) {
        sessionStorage.setItem('resumeString', res);
        router.push('/builder');
      }
    } catch (err) {
      toast.error(err?.response?.data?.message ?? 'Something went wrong uploading resume!');
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
