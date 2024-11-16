import React, {
  useContext,
  useEffect,
  useState
} from 'react';

import TemplateZone from './TemplateZone';
import {
  getRandomResumeFactAndAnimation,
  getResumeJson
} from '@/api';
import {
  ResumeContext
} from '@/context/ResumeContext';
import { isString } from '@/helpers';

const TemplateZoneContainer = () => {
  const [showJdModal, setShowJdModal] = useState();
  const [resumeString, setResumeString] = useState('');
  const [animation, setAnimation] = useState();
  const [fact, setFact] = useState();

  const { resumeData, updateResumeData } = useContext(ResumeContext);

  const getResumeData = async () => {
    try {
      const res = await getResumeJson(resumeString);
      if (res?.basics) {
        updateResumeData((prevState) => {
          return {
            ...prevState,
            resumeString,
            templateData: res
          };
        });
      }
    } catch (err) {
    }
  };

  useEffect(() => {
    let storedResumeString = typeof window !== 'undefined' && window.sessionStorage.getItem('resumeString');
    if (storedResumeString) {
      storedResumeString = JSON.parse(storedResumeString);
      if (!resumeString || resumeString?.length === 0) {
        if (isString(storedResumeString) || isString(storedResumeString?.text)) {
          setResumeString(storedResumeString?.text ?? storedResumeString);
        } else {
          setResumeString(JSON.stringify(storedResumeString?.text) ?? JSON.stringify(storedResumeString));
        }
      }
    }
  }, []);

  useEffect(() => {
    setShowJdModal(resumeData.toggleJdModal);
  }, [resumeData]);

  useEffect(() => {
    if (resumeString || resumeString?.length > 0) {
      getResumeData();
    }
  }, [resumeString]);

  useEffect(() => {
    getRandomResumeFactAndAnimation().then((res) => {
      setFact(res.facts);
      setAnimation(res.animations);
    });
  }, []);

  return (
    <TemplateZone
      showJdModal={showJdModal}
      setShowJdModal={setShowJdModal}
      fact={fact}
      animation={animation}
    />
  );
};

export default TemplateZoneContainer;
