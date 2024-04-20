import React, {
  useContext
} from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import {
  ResumeContext
} from '@/context/ResumeContext';
import {
  userImage, educationImage, workImage, skillsImage, mailImage, phoneImage
} from './assets';

const TemplateTechStarter = () => {
  let { resumeData } = useContext(ResumeContext);
  resumeData = resumeData?.templateData;

  return (
    <Wrapper>

      <LeftSection>

        <ProfileSection>
          <ProfileImage>
            <Image
              src={resumeData?.basics?.picture}
              alt="logo"
              width={150}
              height={150}
              style={{
                borderRadius: '10%',
                border: '0.3rem solid #ECB544',
                margin: '0 10px',
              }}
            />
          </ProfileImage>
          <ProfileInfo>
            <Name>{resumeData?.basics?.name}</Name>
            <Title>{resumeData?.basics?.title}</Title>
            <Summary>{resumeData?.basics?.summary}</Summary>
          </ProfileInfo>
        </ProfileSection>

        <TitleSection>
          <Image
            src={skillsImage}
            alt="sectionImage"
            width={20}
            height={20}
            style={{
              marginRight: '10px'
            }}
          />
          <SectionTitle>SKILLS</SectionTitle>
        </TitleSection>
        <SkillsSection>
          <SkillNamesSection>
            {resumeData?.skills.map((skill, index) => (
              <SkillName key={index}>{skill.name}</SkillName>
            ))}
          </SkillNamesSection>

          <SkillKeywordsSection>
            {resumeData?.skills.map((skill, index) => (
              <SkillKeywords key={index}>{skill.keywords.join(', ')}</SkillKeywords>
            ))}
          </SkillKeywordsSection>

        </SkillsSection>

        <TitleSection>
          <Image
            src={workImage}
            alt="sectionImage"
            width={20}
            height={20}
            style={{
              marginRight: '10px'
            }}
          />
          <SectionTitle>WORK EXPERIENCE</SectionTitle>
        </TitleSection>
        <WorkSection>
          {resumeData?.work.map((work, index) => (
            <WorkExperience key={index}>
              <WorkTitle>{work.position}</WorkTitle>
              <WorkCompany>{work.company}</WorkCompany>
              <WorkDate>{work.startDate} - {work.endDate}</WorkDate>
              <WorkHighlights>
                <WorkHighlightsTitle>Achievements</WorkHighlightsTitle>
                {work.highlights && work.highlights.map((highlight, index) => (
                  <WorkHighlight key={index}>{highlight}</WorkHighlight>
                ))}
              </WorkHighlights>
            </WorkExperience>
          ))}
        </WorkSection>

      </LeftSection>


      <RightSection>

        <ContactSection>
          <ContactItems>
            <ContactText>{resumeData?.contact?.email}</ContactText>
            <ContactText>{resumeData?.contact?.phone}</ContactText>
            <ContactText>{resumeData?.contact?.city}</ContactText>
            <ContactText>{resumeData?.contact?.linkedin}</ContactText>
            <ContactText>{resumeData?.contact?.github}</ContactText>
            <ContactText>{resumeData?.contact?.leetcode}</ContactText>
          </ContactItems>
        </ContactSection>
        <CertificationsSection>

        </CertificationsSection>

        <ProjectsSection>

        </ProjectsSection>

        <LanguagesSection>

        </LanguagesSection>

        <InterestsSection>

        </InterestsSection>

      </RightSection>

    </Wrapper>
  );
};
const Wrapper = styled.div` 
  min-height: 296mm;
  background: #fff;
  display: flex;
  flex-direction: row;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`;

// TODO: set height
const ProfileSection = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #EBEBEB;
  padding: 1rem;
  margin: 1rem;
  border-radius: 1rem; 
`;

const ProfileImage = styled.div`
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center !important;
`;

const Name = styled.h1`
  color: #1D3344;
  margin: 0;
`;

const Title = styled.h3`
  color: #ECB544;
  margin: 0;
`;

const Summary = styled.p`
  color: #0D0D0D;
  margin: 0;
  font-size: 0.8rem;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  color: #1D3344;
  margin: 0;
`;

const SkillsSection = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 1rem;
`;

const SkillNamesSection = styled.div`
  display: flex;
  margin: 1rem;
  flex-direction: column;
`;

const SkillName = styled.p`
  color: #1D3344;
  font-weight: 600;
  font-size: 0.9rem;
  margin: 1rem 0;
`;

const SkillKeywordsSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const SkillKeywords = styled.p`
  color: #1D3344;
  margin: 1rem 0;
  font-size: 0.8rem;
`;

const WorkSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  margin: 0 0 2rem 0;
`;

const WorkExperience = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

const WorkTitle = styled.h3`
  color: #1D3344;
  margin: 0;
  font-weight: 600;
`;

const WorkCompany = styled.p`
  color: #1D3344;
  margin: 0;
  font-weight: 400;
`;

const WorkDate = styled.p`
  color: #ECB544;
  margin: 0;
`;

const WorkHighlights = styled.ul`
  display: flex;
  flex-direction: column;
`;

const WorkHighlightsTitle = styled.h4`
  color: #ECB544;
  margin: 0;
  font-weight: 600;
`;

const WorkHighlight = styled.li`
  color: #1D3344;
  margin: 0;
  ::marker {
    color: #ECB544;
  }
`;


const RightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rebeccapurple;
  flex: 1;
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactItems = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactText = styled.p`
  color: #1D3344;
  margin: 0;
`;

const CertificationsSection = styled.div`
`;

const ProjectsSection = styled.div`
 
`;

const LanguagesSection = styled.div`
`;

const InterestsSection = styled.div`
 
`;
  

export default TemplateTechStarter;
