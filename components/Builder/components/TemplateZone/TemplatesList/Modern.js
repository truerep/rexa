import React, {
  useContext
} from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import {
  ResumeContext
} from '@/context/ResumeContext';
import userImage from '../../../../assets/templateIcons/modern/user.png';
import educationImage from '../../../../assets/templateIcons/modern/mortarboard.png';
import workImage from '../../../../assets/templateIcons/modern/portfolio.png';
import skillsImage from '../../../../assets/templateIcons/modern/skills.png';
import mailImage from '../../../../assets/templateIcons/modern/mail.png';
import phoneImage from '../../../../assets/templateIcons/modern/phone-call.png';

const TemplateModern = () => {
  let {resumeData} = useContext(ResumeContext);
  resumeData = resumeData?.templateData;

  return (
    <Wrapper>
      <BasicInfoWrapper>
        <Image
          src="https://imgv3.fotor.com/images/slider-image/Female-portrait-picture-enhanced-with-better-clarity-and-higher-quality-using-Fotors-free-online-AI-photo-enhancer.jpg"
          alt="logo"
          width={100}
          height={100}
          style={{
            borderRadius: '50%',
            margin: '0 10px',
            width: '100px',
          }}
        />
        <h1>{resumeData?.basics?.name}</h1>
      </BasicInfoWrapper>
      <ContactSection>
        <ContactSectionImageAndItemDiv>
          <Image
            src={mailImage}
            alt="sectionImage"
            width={5}
            height={20}
            style={{
              width: '18px',
              height: '18px',
              filter: 'invert(1)',
              marginRight: '10px'
            }}
          />
          <ContactItem>
            {resumeData?.basics?.email}
          </ContactItem>
        </ContactSectionImageAndItemDiv>
        <ContactSectionImageAndItemDiv>
          <Image
            src={phoneImage}
            alt="sectionImage"
            width={5}
            height={20}
            style={{
              width: '18px',
              height: '18px',
              filter: 'invert(1)',
              marginRight: '10px'
            }}
          />
          <ContactItem>{resumeData?.basics?.phone}</ContactItem>
        </ContactSectionImageAndItemDiv>
      </ContactSection>
      <SectionImageAndTitleDiv>
        <Image
          src={userImage}
          alt="sectionImage"
          width={5}
          height={20}
          style={{
            width: '18px',
            height: '18px',
            marginRight: '5px'
          }}
        />
        <SectionTitle>SUMMARY</SectionTitle>
      </SectionImageAndTitleDiv>
      <ShortBio>{resumeData?.basics?.summary}</ShortBio>
      <SectionImageAndTitleDiv>
        <Image
          src={skillsImage}
          alt="sectionImage"
          width={5}
          height={20}
          style={{
            width: '18px',
            height: '18px',
            marginRight: '5px'
          }}
        />
        <SectionTitle>SKILLS</SectionTitle>
      </SectionImageAndTitleDiv>
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
      <SectionImageAndTitleDiv>
        <Image
          src={workImage}
          alt="sectionImage"
          width={5}
          height={20}
          style={{
            width: '18px',
            height: '18px',
            marginRight: '5px'
          }}
        />
        <SectionTitle>WORK EXPERIENCE</SectionTitle>
      </SectionImageAndTitleDiv>
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
      <SectionImageAndTitleDiv>
        <Image
          src={educationImage}
          alt="sectionImage"
          width={5}
          height={20}
          style={{
            width: '18px',
            height: '18px',
            marginRight: '5px'
          }}
        />
        <SectionTitle>EDUCATION</SectionTitle>
      </SectionImageAndTitleDiv>
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
`;

const BasicInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 20px 20px;
  p {
    padding-top: 10px;
  }
  color: #eee;
  background-color: #2C2C2C;
`;

const ContactSectionImageAndItemDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
`;

const ContactSection = styled.div`
  padding: 5px 30px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: #101010;
`;

const ContactItem = styled.p`
  padding: 5px 0;
  color: #eee;
`;

const ShortBio = styled.p`
  padding: 10px 20px;
`;

const SectionImageAndTitleDiv = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 4px solid #000;
  padding: 10px 5px;
  margin: 0 20px;
`;

const SectionTitle = styled.h2`
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

export default TemplateModern;
