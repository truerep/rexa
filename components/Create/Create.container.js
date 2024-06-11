import React, {
  useEffect,
  useState
} from 'react';
import Create from './Create';
import {
  CopyPaste,
  DragAndDrop,
} from './components';
import { useRouter } from 'next/router';

const CreateContainer = () => {
  const [activeTab, setActiveTab] = useState(2);
  const router = useRouter();

  useEffect(() => {
    if (router.query?.tab === 'copy-paste') {
      setActiveTab(3);
    }
  }, [router.query]);


  const tabData = [
    {
      title: 'Create'
    },
    {
      title: 'Upload',
      component: <DragAndDrop />
    },
    {
      title: 'Copy Paste',
      component: <CopyPaste />
    }
  ];

  return (
    <Create
      tabData={tabData}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />
  );
};

export default CreateContainer;
