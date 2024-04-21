import React, {
  useContext
} from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import {
  ResumeContext
} from '@/context/ResumeContext';
import {
  workImage, skillsImage, mailImage, langaugeImage,
  projectImage,
  certificateImage,
  interestsImage,
  mobileImage,
  mapImage,
  linkedinImage,
  gitImage,
  codingImage
} from './assets';
import TitleSectionComponent from './components/TitleSection';
import ContactItemComponent from './components/ContactItem';

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
        <TitleSectionComponent image={skillsImage} title="SKILLS" />
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

        <TitleSectionComponent image={workImage} title="WORK EXPERIENCE" />
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
            <ContactItemComponent image={mailImage} text={resumeData?.contact?.email} />
            <ContactItemComponent image={mobileImage} text={resumeData?.contact?.phone} />
            <ContactItemComponent image={mapImage} text={resumeData?.contact?.city} />
            <ContactItemComponent image={linkedinImage} text={resumeData?.contact?.linkedin} />
            <ContactItemComponent image={gitImage} text={resumeData?.contact?.github} />
            <ContactItemComponent image={codingImage} text={resumeData?.contact?.leetcode} />
          </ContactItems>
        </ContactSection>

        <TitleSectionComponent image={certificateImage} title="CERTIFICATIONS" />
        <CertificationsSection>
          {resumeData?.certifications.map((certification, index) => (
            <Certification key={index}>
              <CertificationTitle>{certification.title} ({certification.date})</CertificationTitle>
              <CertificationSummary>{certification.summary}</CertificationSummary>
            </Certification>
          ))}
        </CertificationsSection>

        <TitleSectionComponent image={projectImage} title="PERSONAL PROJECTS" />
        <ProjectsSection>
          {resumeData?.projects.map((project, index) => (
            <Project key={index}>
              <ProjectTitle>{project.name} ({project.startDate} - {project.endDate})</ProjectTitle>
              {project.highlights && project.highlights.map((highlight, index) => (
                <ProjectHighlight key={index}>{highlight}</ProjectHighlight>
              ))}
            </Project>
          ))}
        </ProjectsSection>

        <TitleSectionComponent image={langaugeImage} title="LANGUAGES" />
        <ProjectsSection>
          {resumeData?.languages.map((language, index) => (
            <Language key={index}>
              <LanguageName>{language.language}</LanguageName>
              <LanguageFluency>{language.fluency}</LanguageFluency>
            </Language>
          ))}
        </ProjectsSection>

        <TitleSectionComponent image={interestsImage} title="INTERESTS" />
        <ProjectsSection>
          {resumeData?.interests.map((interest, index) => (
            <Interest key={index}>
              <InterestName>{interest.name}</InterestName>
              {interest.keywords &&
                <InterestKeyword>{interest.keywords.join(', ')}</InterestKeyword>
              }
            </Interest>
          ))}
        </ProjectsSection>

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

const ProfileSection = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #EBEBEB;
  padding: 3rem 0;
  margin: 1rem;
  border-radius: 1rem;
  height: 20rem;
  align-items: flex-start;
`;

const ProfileImage = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center !important;
`;

const Name = styled.h2`
  color: #1D3344;
  margin: 0;
`;

const Title = styled.h4`
  color: #ECB544;
  margin: 0;
`;

const Summary = styled.p`
  color: #0D0D0D;
  margin: 0;
  font-size: 0.7rem;
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
  background-color: #EBEBEB;
  flex: 1;
  flex-direction: column;
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1D3344;
  padding: 1rem 0;
  margin: 1rem;
  border-radius: 1rem;
  height: 20rem;
  align-items: center;
  justify-content: center;
`;

const ContactItems = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem;
`;

const ContactText = styled.p`
  color: #fff;
  font-size: 0.7rem;
  margin: 0;
`;

const CertificationsSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;

const Certification = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

const CertificationTitle = styled.h3`
  color: #1D3344;
  margin: 0;
  font-weight: 600;
`;

const CertificationSummary = styled.p`
  color: #1D3344;
  margin: 0;
`;

const ProjectsSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

const Project = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const ProjectTitle = styled.h3`
  color: #1D3344;
  margin: 0;
  font-weight: 600;
`;

const ProjectHighlight = styled.li`
  color: #1D3344;
  margin: 0;
  ::marker {
    color: #ECB544;
  }
`;

const LanguagesSection = styled.div`
`;

const Language = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const LanguageName = styled.h3`
  color: #1D3344;
  margin: 0;
  font-weight: 600;
`;

const LanguageFluency = styled.p`
  color: #1D3344;
  margin: 0;
`;

const InterestsSection = styled.div`
 
`;

const Interest = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const InterestName = styled.h3`
  color: #1D3344;
  margin: 0;
  font-weight: 600;
`;

const InterestKeyword = styled.p`
  color: #1D3344;
  margin: 0;
`;


export default TemplateTechStarter;
