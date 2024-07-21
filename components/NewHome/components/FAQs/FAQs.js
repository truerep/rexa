import { colors } from '@/helpers';
import React from 'react'
import styled from 'styled-components';

const FAQs = ({
  QAs
}) => {

  return (
    <Wrapper>
      <HeaderWrapper>
        <SectionTitle>
          Frequently Asked Questions
        </SectionTitle>
      </HeaderWrapper>
      <Section>
        {QAs.map((QA) => (
          <>
            <QuestionBox onClick={QA.toggleAnswer} className={QA.showAnswer
              ? 'question-box' : 'question-box-closed'
            }>
              <Question>
                {
                  QA.question
                }
              </Question>
              <IconBox className={
                QA.showAnswer ? 'arrow-down-to-top' : ''
              }>
                <img src="assets/icons/arrow-down.svg" />
              </IconBox>
            </QuestionBox>
            <AnswerBox className={QA.showAnswer ? 'answer-box' : 'answer-box-closed'}>
              <Answer>
                {
                  QA.answer
                }
              </Answer>
            </AnswerBox>
          </>
        ))}
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

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
`;

const SectionTitle = styled.h1`
  color: #000;
  font-size: 2.5rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vw;
  max-height: 60vh;
`;

const QuestionBox = styled.div`

  &:hover {
    & > div {
      background: ${colors.HanPurple};
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