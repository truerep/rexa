// Used to get the temporary resume data for the user
const temp = {
  basics: {
    name: 'john doe',
    email: 'john.doe@email.com',
    nationality: 'American',
    birthDate: '01/01/1990',
    title: 'Software Engineer',
    phone: '+1 (912) 555-4321',
    summary: 'A summary of John Doe...',
    picture: 'https://picsum.photos/200',
    city: 'Atlanta',
  },
  additionalLinks: {
    linkedin: 'https://www.linkedin.com/in/some-linkedin-profile',
    github: 'https://github.com/some-github-profile',
    leetcode: 'https://leetcode.com/some-leetcode-profile',
    website: 'https://www.johndoe.com'
  },
  work: [
    {
      company: 'ABC Company',
      position: 'Software Engineer',
      website: 'abc-company.com',
      city: 'Atlanta',
      country: 'USA',
      startDate: 'April 2023',
      endDate: 'Present',
      highlights: [
        'Developed a stock trading terminal with real-time data updates',
        'Engineered a mutual funds transactions system with secure and efficient transaction processes',
        'Designed intuitive interfaces for both systems'
      ]
    },
    {
      company: 'XYZ Company',
      position: 'Web Developer',
      website: 'xyz-company.com',
      city: 'Atlanta',
      country: 'USA',
      startDate: 'January 2023',
      endDate: 'March 2023',
      highlights: [
        'Developed a responsive and visually appealing website for a client',
        'Independently managed the project'
      ]
    },
    {
      company: 'PQR Company',
      position: 'Software Developer Internship',
      website: 'pqr-company.com',
      city: 'Atlanta',
      country: 'USA',
      startDate: 'June 2022',
      endDate: 'December 2022',
      highlights: [
        'Developed a web application for internal use',
        'Collaborated with the team to meet project deadlines and requirements'
      ]
    }
  ],
  skills: [
    {
      name: 'Software Development',
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
      name: 'Web Development',
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
      institution: 'XYZ University',
      area: 'Computer Science and Engineering',
      studyType: 'B.Tech',
      startDate: '2012',
      endDate: '2016',
      city: 'Atlanta',
      country: 'USA',
      website: 'https://www.xyz-university.com',
      gpa: 'None',
      courses: [
        'None'
      ]
    },
    {
      institution: 'ABC College',
      area: 'Computer Science and Engineering',
      studyType: 'Diploma',
      startDate: '2009',
      endDate: '2012',
      city: 'Atlanta',
      country: 'USA',
      website: 'https://www.xyz-university.com',
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
      name: 'Real-Time Stock Trading Terminal',
      startDate: '2023',
      endDate: 'Present',
      url: 'None',
      highlights: [
        'Developed a stock trading terminal with real-time data updates',
        'Designed intuitive interfaces for the system'
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
      fluency: 'Native speaker',
      motherTongue: true
    },
    {
      language: 'Hindi',
      fluency: 'Native speaker',
      motherTongue: true
    },
    {
      language: 'Spanish',
      fluency: 'Professional working proficiency',
      motherTongue: false,
      level: 'B2'
    },
    {
      language: 'Punjabi',
      fluency: 'Professional working proficiency',
      motherTongue: false,
      level: 'B2'
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

const getTempResumeJsonData = async () => {
  try {
    return temp; // This is the data that will be returned
  } catch (err) {
    console.log(err);
  }
};

export default getTempResumeJsonData;
