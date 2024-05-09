import React, {
    useContext,
 useEffect
} from 'react'
import ShowResume from './ShowResume'
import {
 useRouter
} from 'next/router';
import {
 ResumeContext
} from '@/context/ResumeContext';
import toast from 'react-hot-toast';
import {
 getResumeData
} from '@/api';

const ShowResumeContainer = () => {
    const router = useRouter();
    const {resumeData, updateResumeData} = useContext(ResumeContext);

    const fetchResumeData = async (resumeId) => {
        try {
          const res = await getResumeData(resumeId);
          if (res?.data?.data) {
            updateResumeData((prevState) => {
              return {
                ...prevState,
                resumeId,
                templateName: res?.data?.name ?? 'Unnamed',
                resumeString: res?.data?.rawData,
                templateData: JSON.parse(res.data.data)
              };
            });
            setTimeout(() => {
                const isDownload = router.query.download !== undefined;

                if (isDownload) {
                    window.print()
                }
            }, 500)
          }
        } catch (err) {
          toast.error(err?.response?.data?.message ?? 'Something went wrong!');
          router.push('/dashboard');
        }
      };

    useEffect(() => {
        if (router.query.resumeId) {
            fetchResumeData(router.query.resumeId);
        }
    }, [router]);

    return (
        <ShowResume />
    )
}

export default ShowResumeContainer