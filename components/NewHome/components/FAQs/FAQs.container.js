import React from 'react';
import FAQs from './FAQs';

const FAQsContainer = () => {
  const QAsLength = 4;

  const [state, setState] = React.useState(() => {
    const initialState = {};
    for (let i = 1; i <= QAsLength; i++) {
      initialState[`showAnswer${i}`] = false;
    }
    return initialState;
  });

  const toggleAnswer = (index) => {
    setState((prevState) => {
      const updatedState = {};
      for (let i = 1; i <= QAsLength; i++) {
        updatedState[`showAnswer${i}`] = i === index ? !prevState[`showAnswer${i}`] : false;
      }
      return updatedState;
    });
  };

  // change Qas length at the top after adding more questions
  const QAs = [
    {
      question: 'What is AICVPro?',
      answer: 'AICVPro is a platform that provides services help you build your CV with the help of AI. You can upload your CV and we will generate a new CV for you based on the information you provide. You can also choose from a variety of templates and customize your CV to your liking. You can also customuze your CV with job descriptions and we will generate a CV for you based on the job description you provide.',
      showAnswer: state.showAnswer1,
      toggleAnswer: () => toggleAnswer(1)
    },
    {
      question: 'Is AICVPro free to use?',
      answer: 'Yes, AICVPro is free to use. You can upload your CV and generate a new CV for free. You can also choose from a variety of templates and customize your CV to your liking for free. You can also customize your CV with job descriptions and we will generate a CV for you based on the job description you provide for free.',
      showAnswer: state.showAnswer2,
      toggleAnswer: () => toggleAnswer(2)
    },
    {
      question: 'What makes AICVPro different from other CV building platforms?',
      answer: 'AICVPro is different from other CV building platforms because we use AI to generate a new CV for you based on the information you provide. You can also choose from a variety of templates and customize your CV to your liking. You can also customize your CV with job descriptions and we will generate a CV for you based on the job description you provide. AICVPro is also free to use.',
      showAnswer: state.showAnswer3,
      toggleAnswer: () => toggleAnswer(3)
    },
    {
      question: 'Can I save my CV on AICVPro?',
      answer: 'Yes, you can save your CV on AICVPro. You can also download your CV as a PDF file and share it with potential employers. You can also edit your CV and generate a new CV based on the information you provide.',
      showAnswer: state.showAnswer4,
      toggleAnswer: () => toggleAnswer(4)
    }
  ];

  return (
    <FAQs
      QAs={QAs}
    />
  );
};

export default FAQsContainer;