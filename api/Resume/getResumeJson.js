import axios from 'axios';

import {
  appEnv
} from '@/helpers';

const dummy = {
  basics: {
    name: 'Sahil Dhingra',
    email: 'sahildhingra221@gmail.com',
    title: 'Frontend Developer and Software Engineer',
    phone: '7347648126',
    summary: 'A versatile Frontend Developer and Software Engineer with a passion for crafting innovative solutions in Fintech. Bringing a wealth of experience in architecting Progressive Web Applications, designing cutting-edge Stock Trading Terminal, and optimizing Mutual Funds transaction systems.',
    picture: 'https://media.licdn.com/dms/image/C5603AQFRI9_sNI_qkA/profile-displayphoto-shrink_800_800/0/1641565675119?e=1717027200&v=beta&t=bTXIxZID56IWOs7xWE2Ek4xCCPgO2cIfZm7_haIhPDY'
  },
  contact: {
    email: 'dipanchhabra@gmial.com',
    phone: '7347648126',
    city: 'Chandigarh, India',
    linkedin: 'https://www.linkedin.com/in/sahil-dhingra-7b0b3b1b4/',
    github: 'https://github.com/dipanc1',
    leetcode: 'https://leetcode.com/dipanc1/'
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
      summary: 'Spearheaded the development of responsive and visually appealing user interfaces using HTML, CSS, and JavaScript.',
      highlights: [
        'Developed a responsive and visually appealing website for a client',
        'Independently managed the project'
      ]
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
        'JavaScript / ES6 / jQuery'
      ]
    },
    {
      name: 'Backend Development',
      level: 'Experienced',
      keywords: [
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
  certifications: [
    {
      title: 'ReactJS',
      date: '2022',
      awarder: 'Udemy',
      summary: 'reactjs certificate'
    },
    {
      title: 'MongoDB',
      date: '2022',
      awarder: 'Udemy',
      summary: 'mongodb certificate'
    }
  ],
  projects: [
    {
      name: 'Stock Trading Terminal',
      startDate: '2023',
      endDate: 'Present',
      url: 'None',
      highlights: [
        'Implemented real-time data updates',
        'Designed intuitive interfaces'
      ]
    },
    {
      name: 'Mutual Funds Transactions System',
      startDate: '2023',
      endDate: 'Present',
      url: 'None',
      highlights: [
        'Implemented secure and efficient transaction processes',
        'Contributed to the development of the system'
      ]
    }
  ],
  languages: [
    {
      language: 'English',
      fluency: 'Native speaker'
    }
  ],
  interests: [
    {
      name: 'Reading',
      keywords: [
        'Science fiction',
        'Fantasy'
      ]
    },
    {
      name: 'Music',
      keywords: [
        'Classical',
        'Rock',
        'Pop'
      ]
    }
  ]
};

const getResumeJson = async (resume) => {
  try {
    const config = {
      method: 'post',
      url: `${appEnv.API_URL}/api/send-resume`,
      data: {resume}
    };

    const res = await axios(config);
    return res?.data;
    // return dummy;
  } catch (err) {
    console.log(err);
  }
};

export default getResumeJson;
