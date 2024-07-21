import React from 'react'
import FAQs from './FAQs'

const FAQsContainer = () => {

  const toggleAnswer1 = () => {
    setShowAnswer1(!showAnswer1);
  }

  const toggleAnswer2 = () => {
    setShowAnswer2(!showAnswer2);
  }

  const toggleAnswer3 = () => {
    setShowAnswer3(!showAnswer3);
  }

  const toggleAnswer4 = () => {
    setShowAnswer4(!showAnswer4);
  }

  const [showAnswer1, setShowAnswer1] = React.useState(false);
  const [showAnswer2, setShowAnswer2] = React.useState(false);
  const [showAnswer3, setShowAnswer3] = React.useState(false);
  const [showAnswer4, setShowAnswer4] = React.useState(false);

  const QAs = [
    {
      question: 'What is AICVPro?',
      answer: 'AICVPro is a platform that provides services help you build your CV with the help of AI. You can upload your CV and we will generate a new CV for you based on the information you provide. You can also choose from a variety of templates and customize your CV to your liking. You can also customuze your CV with job descriptions and we will generate a CV for you based on the job description you provide.',
      showAnswer: showAnswer1,
      toggleAnswer: toggleAnswer1
    },
    {
      question: 'Is AICVPro free to use?',
      answer: 'Yes, AICVPro is free to use. You can upload your CV and generate a new CV for free. You can also choose from a variety of templates and customize your CV to your liking for free. You can also customize your CV with job descriptions and we will generate a CV for you based on the job description you provide for free.',
      showAnswer: showAnswer2,
      toggleAnswer: toggleAnswer2
    },
    {
      question: 'What makes AICVPro different from other CV building platforms?',
      answer: 'AICVPro is different from other CV building platforms because we use AI to generate a new CV for you based on the information you provide. You can also choose from a variety of templates and customize your CV to your liking. You can also customize your CV with job descriptions and we will generate a CV for you based on the job description you provide. AICVPro is also free to use.',
      showAnswer: showAnswer3,
      toggleAnswer: toggleAnswer3
    },
    {
      question: 'Can I save my CV on AICVPro?',
      answer: 'Yes, you can save your CV on AICVPro. You can also download your CV as a PDF file and share it with potential employers. You can also edit your CV and generate a new CV based on the information you provide.',
      showAnswer: showAnswer4,
      toggleAnswer: toggleAnswer4
    }
  ]

  return (
    <FAQs
      QAs={QAs}
    />
  )
}

export default FAQsContainer