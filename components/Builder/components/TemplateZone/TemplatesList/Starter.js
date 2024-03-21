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
      <SectionTitle>SKILLS</SectionTitle>
      <SkillItemWrapper>
        {
          resumeData?.skills && resumeData?.skills.map((skill) => (
            <SkillSection>
              <SkillTitle>
                {skill?.name}
                :&nbsp;
              </SkillTitle>
              {skill?.keywords && skill.keywords.map((skill) => (
                <SkillItem>
                  {skill}
                  ,&nbsp;
                </SkillItem>
              ))}
            </SkillSection>
          ))
        }
      </SkillItemWrapper>
      <SectionTitle>WORK EXPERIENCE</SectionTitle>
      <SectionContent>
        {resumeData?.work?.map((work, idx) => (
          <Item key={idx}>
            <ItemTitle>{work?.company}</ItemTitle>
            <ItemSubline>{work?.position}</ItemSubline>
            <BulletPoints>{work?.summary}</BulletPoints>
            {
              work?.highlights && work?.highlights.map((highlight, hIdx) => (
                <BulletPoints key={hIdx}>{highlight}</BulletPoints>
              ))
            }
          </Item>
        ))}
      </SectionContent>
      <SectionTitle>EDUCATION</SectionTitle>
      <SectionContent>
        {resumeData?.education?.map((education, idx) => (
          <Item key={idx}>
            <ItemTitle>
              {education?.studyType}
              {' '}
              -
              {' '}
              {education?.area}
            </ItemTitle>
            <ItemSubline>
              (
              {education?.startDate}
              {' '}
              -
              {' '}
              {education?.endDate}
              )&nbsp;
              {education?.institution}
            </ItemSubline>
          </Item>
        ))}
      </SectionContent>
    </Wrapper>
  );
};
const Wrapper = styled.div` 
  min-height: 296mm;
  background: #fff;
`;

const BasicInfoWrapper = styled.div`
  text-align: center;
  padding: 20px 20px 20px;

  p {
    padding-top: 10px;
  }
`;

const ShortBio = styled.p`
  padding: 20px;
  padding-top: 0;
`;

const SectionTitle = styled.h2`
  background: #eee;
  padding: 5px 20px;
  font-size: 18px;
  font-weight: 600;
`;

const SectionContent = styled.div`
  padding: 10px 20px;
`;

const Item = styled.div`
  &:not(:last-child) {
    padding-bottom: 10px;
  }
`;

const ItemTitle = styled.h3`
  font-weight: 600;
`;

const ItemSubline = styled.p`
  font-weight: 500;
  padding: 2px 0 5px;
`;

const BulletPoints = styled.p`
  padding-left: 12px;
  position: relative;
  font-size: 14px;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 5px;
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background-color: #000;
    opacity: 0.4;
  }
`;

const SkillItemWrapper = styled.div`
  padding: 10px 20px;
`;

const SkillSection = styled.div`
  &:not(:last-child) {
    padding-bottom: 10px;
  }
`;

const SkillTitle = styled.span`
  display: inline-block;
  font-weight: bold;
`;

const SkillItem = styled.span`
  display: inline-block;
`;

export default TemplateStarter;
