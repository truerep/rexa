import React from 'react';
import {
  useRouter
} from 'next/router';
import CreateNew from './CreateNew';

const CreateNewContainer = () => {
  const router = useRouter();

  const handleRedirectionToBuilder = () => {
    sessionStorage.setItem('resumeString', JSON.stringify({}));
    router.push('/builder?createNew=true');
  }

  return (
    <CreateNew
      handleRedirectionToBuilder={handleRedirectionToBuilder}
    />
  );
};

export default CreateNewContainer;
