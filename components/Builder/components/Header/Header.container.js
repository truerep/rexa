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
  createResume, updateResume
} from '@/api';
import {
  useOnClickOutside
} from '@/hooks';
import { checkAuthenticated, removeDataFromSession } from '@/helpers';
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
        removeDataFromSession('resumeString');
      } else {
        toast.error('Something went wrong!');
      }
    } catch (err) {
      toast.error(err?.response?.data?.error ?? 'Something went wrong!');
      if (err?.response?.data?.status === HttpStatusCode.Unauthorized) {
        await handleRouteToAuth();
      }
    }
  };

  const modifyResume = async (resumeId, payload, route) => {
    try {
      const res = await updateResume(resumeId, payload);
      if (res?.status === HttpStatusCode.Ok) {
        toast.success('Resume Updated!');
        route === routeNames.dashboard && router.push(`/${route}`);
        removeDataFromSession('resumeString');
      } else {
        toast.error('Something went wrong!');
      }
    } catch (err) {
      toast.error(err?.response?.data?.error ?? 'Something went wrong!');
      if (err?.response?.data?.status === HttpStatusCode.Unauthorized) {
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
    const saveResume = sessionStorage.getItem('saveResume');
    console.log(router, "<---router")
    if (saveResume === "true" || router.pathname === "/builder") {
      sessionStorage.removeItem('saveResume');
      await handleSaveResume(routeNames.dashboard);
    } else {
      router.push(`/${routeNames.dashboard}`)
    }
  };

  const handleSaveResumeOnBuilderPage = async () => {
    await handleSaveResume(routeNames.builder);
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
      name: 'Change Template',
      iconUrl: '/assets/icons/template-icon.svg',
      tooltip: 'Change Resume Template'
    },
    {
      handleClick: () => setShowJdModal(true),
      name: 'Match Resume',
      iconUrl: '/assets/icons/sync-icon.svg',
      tooltip: 'Sync Resume with Job Description'
    },
    {
      handleClick: () => handlePreview(),
      name: 'Preview',
      iconUrl: '/assets/icons/preview-icon.svg',
      tooltip: 'Preview '
    },
    {
      handleClick: () => handleSaveResumeOnBuilderPage(),
      name: 'Save',
      iconUrl: '/assets/icons/save-icon.svg',
      tooltip: 'Save Template'
    },
    {
      handleClick: () => window.print(),
      name: 'Download',
      iconUrl: '/assets/icons/download-icon.svg'
    }
  ];

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    router.push('/');
  };

  useEffect(() => {
    const checkAuthenticatedUser = async () => {
      const isAuthenticated = await checkAuthenticated();

      if (!!isAuthenticated) {
        // if user is authenticated, get user data
        setUserData(isAuthenticated);
      }
    }

    checkAuthenticatedUser();
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
      resumeDataDoesNotExist={!resumeData?.templateData}
      handleSaveResumeOnBuilderPage={handleSaveResumeOnBuilderPage}
    />
  );
};

export default HeaderContainer;
