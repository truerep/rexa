import axios from 'axios';

import {
  appEnv
} from '@/helpers';

const dummy = {
  basics: {
    name: 'Sahil Dhingra',
    email: 'sahildhingra221@gmail.com',
    phone: '7347648126',
    summary: 'A versatile Frontend Developer and Software Engineer with a passion for crafting innovative solutions in Fintech. Bringing a wealth of experience in architecting Progressive Web Applications, designing cutting-edge Stock Trading Terminal, and optimizing Mutual Funds transaction systems.'
  },
  work: [
    {
      company: 'Wealthy',
      position: 'Software Development Engineer',
      website: 'None',
      startDate: 'April 2023',
      endDate: 'Present',
      summary: 'Developed robust Progressive Web Applications (PWAs) for insurance systems, designed and implemented a cutting-edge stock trading terminal, and contributed to the development of a mutual funds transactions system.',
      highlights: [
        'Implemented responsive and user-friendly interfaces for insurance systems',
        'Engineered intuitive interfaces with real-time data updates for stock trading terminal',
        'Implemented secure and efficient transaction processes for mutual funds system'
      ]
    },
    {
      company: 'Wealthy',
      position: 'Software Engineer Internship',
      website: 'None',
      startDate: 'December 2022',
      endDate: 'February 2023',
      summary: 'Led the design and development of a stock screener project, achieving seamless integration of user-friendly interfaces with robust functionality.',
      highlights: [
        'Successfully implemented responsive design principles and real-time data updates',
        'Independently managed the project'
      ]
    },
    {
      company: 'ToXSL Technologies Pvt Ltd',
      position: 'Web Designer Internship',
      website: 'None',
      startDate: 'May 2022',
      endDate: 'December 2022',
      summary: 'Spearheaded the development of responsive and visually appealing user interfaces using HTML, CSS, and JavaScript.'
    }
  ],
  skills: [
    {
      name: 'Frontend Development',
      level: 'Experienced',
      keywords: [
        'ReactJS',
        'Redux',
        'Next.js',
        'Css',
        'JavaScript / ES6 / jQuery',
        'TypeScript',
        'Node.js',
        'Express.js',
        'UX/UI',
        'MongoDB',
        'Figma',
        'Selenium',
        'CI/CD',
        'Product Design',
        'Bootstrap',
        'Chakra UI',
        'Git',
        'MERN Stack'
      ]
    }
  ],
  education: [
    {
      institution: 'RAYAT BAHRA UNIVERSITY',
      area: 'Computer Science and Engineering',
      studyType: 'B.Tech',
      startDate: '2019',
      endDate: '2022',
      gpa: 'None',
      courses: [
        'None'
      ]
    },
    {
      institution: 'Lovely Professional University',
      area: 'Computer Science and Engineering',
      studyType: 'Diploma',
      startDate: '2016',
      endDate: '2019',
      gpa: 'None',
      courses: [
        'None'
      ]
    }
  ],
  projectUrls: [],
  additionalUrls: [
    {
      url: 'None',
      name: 'LinkedIn Profile'
    },
    {
      url: 'Portfolio',
      name: 'Portfolio'
    }
  ]
};

const getModifiedResume = async (resumeString, jobDescription) => {
  const payload = {
    resume: resumeString,
    jobDescription
  };

  try {
    const config = {
      method: 'post',
      url: `${appEnv.API_URL}/api/send-resume`,
      data: payload
    };

    const res = await axios(config);
    return res?.data;
    // return dummy;
  } catch (err) {
    console.log(err);
  }
};

export default getModifiedResume;
