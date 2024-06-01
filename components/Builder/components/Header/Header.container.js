import React, {
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import toast from 'react-hot-toast';
import {
  useRouter
} from 'next/router';
import Header from './Header';
import {
  ResumeContext
} from '@/context/ResumeContext';
import {
  createResume, getUserData, updateResume
} from '@/api';
import {
  useOnClickOutside
} from '@/hooks';
import { HttpStatusCode } from 'axios';

const HeaderContainer = () => {
  const routeNames = {
    builder: 'builder',
    dashboard: 'dashboard'
  };

  const [showTemplates, setShowTemplates] = useState(false);
  const [showJdModal, setShowJdModal] = useState();
  const [resumeName, setResumeName] = useState('Unnamed');
  const [userData, setUserData] = useState({});
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const dropdownRef = useRef(null);
  useOnClickOutside(dropdownRef, () => setToggleDropdown(false));

  const router = useRouter();
  const { resumeData, updateResumeData } = useContext(ResumeContext);

  useEffect(() => {
    setShowTemplates(resumeData?.toggleTemplatesPopover);
  }, [resumeData]);

  useEffect(() => {
    setShowJdModal(resumeData.toggleJdModal);
  }, [resumeData]);

  const handleSaveDataLocally = async () => {
    localStorage.setItem('resumeDataLocally', JSON.stringify(resumeData));
    router.push('/authenticate?login&redirectUrl=/builder?fetchLocalData')
  }

  const handleRouteToAuth = async () => {
    await router.push('/authenticate?login&redirectUrl=/builder');
  };

  const createNewResume = async (payload, route) => {
    try {
      const res = await createResume(payload);
      if (res?.data?._id) {
        toast.success('Resume Saved!');
        router.push(route === routeNames.builder ? `/${route}/${res?.data?._id}` : `/${route}`);
      } else {
        toast.error('Something went wrong!');
      }
    } catch (err) {
      toast.error(err?.response?.data?.message ?? 'Something went wrong!');
      if (err?.response?.status === HttpStatusCode.Unauthorized) {
        await handleRouteToAuth();
      }
    }
  };

  const modifyResume = async (resumeId, payload, route) => {
    try {
      const res = await updateResume(resumeId, payload);
      if (res?.status === 200) {
        toast.success('Resume Updated!');
        router.push(route === routeNames.builder ? `/${route}/${res?.data?._id}` : `/${route}`);
      } else {
        toast.error('Something went wrong!');
      }
    } catch (err) {
      toast.error(err?.response?.data?.message ?? 'Something went wrong!');
      if (err?.response?.status === HttpStatusCode.Unauthorized) {
        await handleRouteToAuth();
      }
    }
  };

  const handleSaveResume = async (route) => {
    let resumeLink = "";
    let storedResumeString = typeof window !== 'undefined' && window.sessionStorage.getItem('resumeString');
    if (storedResumeString) {
      storedResumeString = JSON.parse(storedResumeString);
      if (storedResumeString?.url) {
        resumeLink = storedResumeString?.url;
      }
    }

    const payload = {
      templateId: resumeData?.templateUniqueId,
      name: resumeName,
      resumeUrl: resumeData?.resumeUrl ?? resumeLink,
      rawData: resumeData?.resumeString,
      data: JSON.stringify(resumeData?.templateData)
    };
    if (resumeData.resumeId) {
      modifyResume(resumeData.resumeId, payload, route);
    } else {
      createNewResume(payload, route);
    }
  };

  const handleRouteToDashboard = async () => {
    await handleSaveResume(routeNames.dashboard);
  };

  const handlePreview = () => {
    const newResumeData = {
      ...resumeData,
      togglePreview: true
    };

    updateResumeData(newResumeData);
  };

  const builderActionsList = [
    {
      handleClick: () => setShowTemplates(true),
      iconUrl: '/assets/icons/template-icon.svg',
      tooltip: 'Change Resume Template'
    },
    {
      handleClick: () => setShowJdModal(true),
      iconUrl: '/assets/icons/sync-icon.svg',
      tooltip: 'Sync Resume with Job Description'
    },
    {
      handleClick: () => handlePreview(),
      iconUrl: '/assets/icons/preview-icon.svg',
      tooltip: 'Preview '
    },
    {
      handleClick: () => handleSaveResume(routeNames.builder),
      iconUrl: '/assets/icons/save-icon.svg',
      tooltip: 'Save Template'
    },
    {
      handleClick: () => window.print(),
      iconUrl: '/assets/icons/download-icon.svg'
    }
  ];

  const checkUserAuthenticated = async (authToken) => {
    try {
      const res = await getUserData(authToken);
      setUserData(res?.data);
    } catch (err) {
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    router.push('/');
  };

  useEffect(() => {
    const authToken = localStorage.getItem('auth_token');

    if (authToken) {
      checkUserAuthenticated(authToken);
    } else {
      // Token doesn't exist, handle the case accordingly
    }
  }, [router]);

  useEffect(() => {
    if (resumeData?.templateName) {
      setResumeName(resumeData.templateName);
    }
  }, [resumeData]);

  return (
    <Header
      userData={userData}
      handleLogout={handleLogout}
      handleSaveDataLocally={handleSaveDataLocally}
      builderActionsList={builderActionsList}
      toggleDropdown={toggleDropdown}
      setToggleDropdown={setToggleDropdown}
      dropdownRef={dropdownRef}
      resumeName={resumeName}
      setResumeName={setResumeName}
      showTemplates={showTemplates}
      setShowTemplates={setShowTemplates}
      showJdModal={showJdModal}
      setShowJdModal={setShowJdModal}
      togglePreview={resumeData?.togglePreview}
      handleRouteToDashboard={handleRouteToDashboard}
      handleRouteToAuth={handleRouteToAuth}
    />
  );
};

export default HeaderContainer;
