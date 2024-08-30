import { colors } from '@/helpers';
import React from 'react'
import styled from 'styled-components';

const FAQs = ({
  QAs
}) => {

  return (
    <Wrapper>
      <HeaderWrapper data-aos="fade-up" data-aos-duration="500">
        <img src="assets/icons/faq.gif" />
        <SectionTitle>
          Frequently Asked Questions
        </SectionTitle>
      </HeaderWrapper>
      <Section data-aos="fade-up" data-aos-duration="500">
        {QAs.map((QA) => (
          <>
            <QuestionBox onClick={QA.toggleAnswer} className={QA.showAnswer
              ? 'question-box' : 'question-box-closed'
            } key={QA.id}>
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
            <AnswerBox className={QA.showAnswer ? 'answer-box' : 'answer-box-closed'} key={QA.id}>
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
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 20vh;
`;

const SectionTitle = styled.h1`
  color: #000;
  font-size: 2.5rem;
  font-weight: 600;
  text-transform: uppercase;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 80vh;
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
  height: 10vh;
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
  font-size: 1.5rem;
  font-weight: 600;

  @media (max-width: 576px) {
    font-size: 0.7rem;
  }
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

  @media (max-width: 576px) {
    padding: 5px;

    img {
      width: 10px;
    }
  }

`;

const AnswerBox = styled.div`
  
`;

const Answer = styled.p`
  color: #000;
  
  @media (max-width: 576px) {
    font-size: 0.5rem;
  }
`;


export default FAQs