import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

import { ResumeContext } from '@/context/ResumeContext';

import SyncJobDescriptionModal from './SyncJobDescriptionModal';

import { getModifiedResume, getResumeText, getUserResumes } from '@/api';
import { HttpStatusCode } from 'axios';

const SyncJobDescriptionModalContainer = () => {
    const [userResumes, setUserResumes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [file, setFile] = useState(null);
    const { updateResumeData } = useContext(ResumeContext);

    const [toggleResumesList, setToggleResumesList] = useState(false);

    const router = useRouter();

    const handleFileUpload = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    useEffect(() => {
        if (file !== null) {
            handleUploadedResume();
        }
    }, [file])

    const handleGeneratingResume = async (index) => {
        const rawData = userResumes[index]?.rawData;
        if (!rawData) return;

        try {
            setToggleResumesList(false);

            const storedJobDescription = window?.sessionStorage?.getItem('jobDescription');
            if (!storedJobDescription) return;

            const res = await getModifiedResume(rawData, storedJobDescription);

            if (res?.basics) {
                toast.success('Resume generated!', { id: 'modifying-resume' });

                const storedResumeString = window?.sessionStorage?.getItem('resumeString');
                const url = JSON.parse(storedResumeString)?.url;

                window.sessionStorage.setItem('resumeString', JSON.stringify({ url, text: res }));

                updateResumeData(prevState => ({
                    ...prevState,
                    templateData: res,
                    resumeString: JSON.stringify(res)
                }));
            }
        } catch (err) {
            toast.error(err?.response?.data?.error ?? 'Something went wrong!');
        }
    };

    const fetchUserResumes = async () => {
        try {
            const res = await getUserResumes();
            if (res?.status === HttpStatusCode.Ok) {
                setUserResumes(res?.data);
            }
        } catch (err) {
            toast.error(err?.response?.data?.error ?? 'Something went wrong!');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (router.query.syncWithJobDescription == '') {
            setToggleResumesList(true);
            setIsLoading(true);
            sessionStorage.removeItem('resumeString');
            fetchUserResumes();
            if (!document.hasFocus()) {
                document.body.focus();
            }
            navigator.clipboard.readText().then((text) => {
                sessionStorage.setItem('jobDescription', text);
            });
        }

    }, [router]);

    const handleUploadedResume = async () => {
        setIsLoading(true);
        try {
            toast.loading('Uploading resume...', {
                id: 'uploading-resume'
            });
            const res = await getResumeText(file);

            if (res) {
                toast.success('Resume uploaded!', {
                    id: 'uploading-resume'
                });
                setToggleResumesList(false)
                let storedJobDescription = typeof window !== 'undefined' && window.sessionStorage.getItem('jobDescription');
                const resumeString = res?.text ? res.text : res;
                sessionStorage.setItem('resumeString', JSON.stringify(resumeString));
                const resModifiedResume = await getModifiedResume(JSON.stringify(resumeString), storedJobDescription)
                if (resModifiedResume?.basics) {
                    toast.success('Resume generated!', {
                        id: 'modifying-resume'
                    });
                    updateResumeData((prevState) => {
                        return {
                            ...prevState,
                            templateData: resModifiedResume
                        };
                    });
                }
            }
        } catch (err) {
            toast.error(err?.response?.data?.error ?? 'Something went wrong uploading resume!', {
                id: 'uploading-resume'
            });
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <SyncJobDescriptionModal
            toggleResumesList={toggleResumesList}
            setToggleResumesList={setToggleResumesList}
            userResumes={userResumes}
            handleFileUpload={handleFileUpload}
            handleGeneratingResume={handleGeneratingResume}
            isLoading={isLoading}
        />
    )
}

export default SyncJobDescriptionModalContainer