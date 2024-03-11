import React, {
  useContext
} from 'react';
import styled from 'styled-components';
import {
  ResumeContext
} from '@/context/ResumeContext';

const TemplateStarter = () => {
  let {resumeData} = useContext(ResumeContext);
  resumeData = resumeData?.templateData;

  return (
    <Wrapper>
      {console.log(resumeData, '<---resumeJson')}
      <BasicInfoWrapper>
        <h1>{resumeData?.basics?.name}</h1>
        <p>
          {resumeData?.basics?.email}
          {' '}
          |
          {' '}
          {resumeData?.basics?.phone}
        </p>
      </BasicInfoWrapper>
      <ShortBio>{resumeData?.basics?.summary}</ShortBio>
      <SectionTitle>WORK EXPERIENCE</SectionTitle>
      <SectionContent>
        <Item>
          <ItemTitle>Job Profile</ItemTitle>
          <ItemSubline>Job Profile</ItemSubline>
          <BulletPoints>1</BulletPoints>
        </Item>
      </SectionContent>
      <SectionTitle>SKILLS</SectionTitle>
      <SkillItemWrapper>
        <SkillTitle>Hard Skills: </SkillTitle>
        <SkillItem>Java</SkillItem>
      </SkillItemWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  // background: #000; 
  font-size: 1.3rem;
  min-height: 296mm;
`;

const BasicInfoWrapper = styled.div`
  text-align: center;
  padding: 20px 20px 20px;
  color: red;
`;

const ShortBio = styled.p`
  padding: 20px;
  padding-top: 0;
`;

const SectionTitle = styled.h2`
  background: #eee;
  padding: 5px 20px;
  font-size: 18px;
`;

const SectionContent = styled.div`
`;

const Item = styled.div``;

const ItemTitle = styled.h3`
`;

const ItemSubline = styled.p``;

const BulletPoints = styled.p``;

const SkillItemWrapper = styled.div``;

const SkillTitle = styled.span`
  display: inline-block;
  font-weight: bold;
`;

const SkillItem = styled.span`
  display: inline-block;
`;

export default TemplateStarter;
