import React, {
  useState
} from 'react';
import {
  useRouter
} from 'next/router';
import LinkedIn from './LinkedIn';
import {
  getResumeText
} from '@/api';

import { useLinkedIn } from "react-linkedin-login-oauth2";
import { appEnv } from '@/helpers';
import axios from 'axios';

const LinkedInContainer = () => {
  const [resumeText, setResumeText] = useState(null);

  const router = useRouter();

  const { linkedInLogin } = useLinkedIn({
    clientId: appEnv.LINKEDIN_CLIENT_ID,
    redirectUri: `${typeof window === 'object' && window.location.origin}/linkedin`,
    scope: ['openid', 'profile', 'email'],
    onSuccess: async (c) => {
      console.log(c);
      await axios.get('https://api.linkedin.com/v2/userinfo', {
        headers: {
          'Authorization': `Bearer ${c}`
        }
      }).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
      // setResumeText(c.profileData);
      // sessionStorage.setItem('resumeString', resumeText);
      // router.push('/builder');
    },
    onError: (e) => {
      console.log(e);
    }
  })

  return (
    <LinkedIn
      handleLogin={linkedInLogin}
    />
  );
};

export default LinkedInContainer;
