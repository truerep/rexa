import React, {
  useState
} from 'react';
import Create from './Create';
import {
  CopyPaste,
  DragAndDrop,
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
