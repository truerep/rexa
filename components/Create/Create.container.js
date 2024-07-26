import React, {
  useEffect,
  useState
} from 'react';
import Create from './Create';
import {
  CopyPaste,
  DragAndDrop,
  ImportFromLinkedIn,
} from './components';
import { useRouter } from 'next/router';

const CreateContainer = () => {
  const tabs = {
    CREATE: 1,
    UPLOAD: 2,
    LINKEDIN: 3,
    COPY_PASTE: 4
  }

  const [activeTab, setActiveTab] = useState(tabs.UPLOAD);
  const router = useRouter();

  useEffect(() => {
    if (router.query?.tab === 'copy-paste') {
      setActiveTab(tabs.COPY_PASTE);
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
      title: 'Linked In',
      component: <ImportFromLinkedIn />
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
