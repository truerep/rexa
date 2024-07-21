import React from 'react'
import FAQs from './FAQs'

const FAQsContainer = () => {
  const [showAnswer, setShowAnswer] = React.useState(false);

  const QAs = [
    {
      id: 0,
      question: 'What is a hackathon?',
      answer: 'A hackathon is a design sprint-like event in which computer programmers and others involved in software development, including graphic designers, interface designers, project managers, and others, often including domain experts, collaborate intensively on software projects.'
    },
    {
      id: 1,
      question: 'How long is a hackathon?',
      answer: 'A hackathon can last anywhere from 24 hours to a week.'
    },
    {
      id: 2,
      question: 'What is the purpose of a hackathon?',
      answer: 'The purpose of a hackathon is to create a working prototype or a proof of concept for a new product or service.'
    }
  ];

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  }

  return (
    <FAQs showAnswer={showAnswer} setShowAnswer={setShowAnswer} QAs={QAs} toggleAnswer={toggleAnswer} />
  )
}

export default FAQsContainer