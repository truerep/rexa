import { colors } from '@/helpers';
import React from 'react'
import styled from 'styled-components';

const FAQs = ({ showAnswer, setShowAnswer, QAs, toggleAnswer }) => {
  return (
    <Wrapper>
      <SectionTitle>
        Frequently Asked Questions
      </SectionTitle>
      <Section>
        {QAs.map((QA, index) => (
          <>
            <QuestionBox onClick={toggleAnswer} className={showAnswer
              ? 'question-box-' + index : 'question-box-closed'}>
              <Question>
                {QA.question}
              </Question>
              <IconBox className={
                showAnswer ? 'arrow-down-to-top' : ''
              }>
                <img src="assets/icons/arrow-down.svg" />
              </IconBox>
            </QuestionBox>
            <AnswerBox className={showAnswer ? 'answer-box' : 'answer-box-closed'}>
              <Answer>
                {QA.answer}
              </Answer>
            </AnswerBox>
          </>
        ))}

        <QuestionBox onClick={() => setShowAnswer(!showAnswer)} className={showAnswer ? 'question-box' : 'question-box-closed'}>
          <Question>
            hajnfrjnife
          </Question>
          <IconBox className={
            showAnswer ? 'arrow-down-to-top' : ''
          }>
            <img src="assets/icons/arrow-down.svg" />
          </IconBox>
        </QuestionBox>
        <AnswerBox className={showAnswer ? 'answer-box' : 'answer-box-closed'}>
          <Answer>
            jndjnjenfjn
          </Answer>
        </AnswerBox>

      </Section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #FFFFFF;
  color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;

const SectionTitle = styled.h1`
  color: #000;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vw;
  height: 50vh;
`;

const QuestionBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background: #F5F6F7;
  color: #000;
  border-radius: 10px;
  height: 20vh;
  margin: 10px 0 0 0;

  &:hover {
    cursor: pointer;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    & > div {
      background: ${colors.HanPurple};
      cursor: pointer;
    }
  }
`;

const Question = styled.h2`
  color: #000;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(11, 13, 1, 0.12);
  border-radius: 30%;
  padding: 10px;
  transition: 0.3s;

  img {
    width: 25px;
  }

`;

const AnswerBox = styled.div`
  
`;

const Answer = styled.p`
  color: #000;
`;


export default FAQs