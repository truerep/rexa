import React, {
  useState
} from 'react';
import Create from './Create';
import {
  CopyPaste,
  DragAndDrop,
  LinkedIn
} from './components';

const CreateContainer = () => {
  const [activeTab, setActiveTab] = useState(2);

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
      component: <LinkedIn />
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
