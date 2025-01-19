import React, { useContext } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ResumeContext } from '@/context/ResumeContext';
import { linkedinImage, pinImage, webImage, mailImage, phoneImage } from './assets';
import ImageWrapper from './Image';
import { checkOtherLanguagesExist } from '@/helpers';

const TemplateEuroPass1 = () => {
  let { resumeData } = useContext(ResumeContext);
  resumeData = resumeData?.templateData;

  return (
    <Wrapper>
      <RightUpperBorder />
      <LeftUpperBorder />
      <BasicInfoWrapper>
        {resumeData?.basics?.picture && (
          <Image
            src={resumeData?.basics?.picture}
            alt="logo"
            width={120}
            height={120}
            style={{
              borderRadius: '50%',
              margin: '0px 20px 0 0',
              border: '2px solid #c6c6c6',
            }}
          />
        )}
        <BasicInfoDiv>
          <h3 style={{ color: '#214493' }}>{resumeData?.basics?.name}</h3>
          <Horizontal>
            <p>
              <BoldLabel>Nationality:</BoldLabel> {resumeData?.basics?.nationality || 'Indian'}
            </p>
            <p>
              <BoldLabel>Date of birth:</BoldLabel> {resumeData?.basics?.birthDate || '01/01/1990'}
            </p>
            <p>
              <BoldLabel>
                <ImageWrapper image={phoneImage} /> Phone number:
              </BoldLabel> {resumeData?.basics?.phone}
            </p>
          </Horizontal>
          <p>
            <BoldLabel>
              <ImageWrapper image={mailImage} /> Email address:
            </BoldLabel> <a href={`mailto:${resumeData?.basics?.email}`}>{resumeData?.basics?.email}</a>
          </p>
          <p>
            <BoldLabel>
              <ImageWrapper image={linkedinImage} /> LinkedIn:
            </BoldLabel>
            <a href={resumeData?.additionalLinks?.linkedin} target="_blank" rel="noreferrer">
              {resumeData?.additionalLinks?.linkedin}
            </a>
          </p>
          <p>
            <BoldLabel>
              <ImageWrapper image={webImage} /> Website:
            </BoldLabel><a href={resumeData?.additionalLinks?.website} target="_blank" rel="noreferrer">{resumeData?.additionalLinks?.website}</a>
          </p>
          <p>
            <BoldLabel>
              <ImageWrapper image={pinImage} /> Home:
            </BoldLabel> {resumeData?.basics?.city}
          </p>
        </BasicInfoDiv>
      </BasicInfoWrapper>
      <SectionImageAndTitleDiv>
        <SectionTitle>About me</SectionTitle>
      </SectionImageAndTitleDiv>
      <ShortBio>{resumeData?.basics?.summary}</ShortBio>
      <SectionImageAndTitleDiv>
        <SectionTitle>Work experience</SectionTitle>
      </SectionImageAndTitleDiv>
      <SectionContent>
        {resumeData?.work?.map((work, idx) => (
          <Item key={idx}>
            <ItemTitle style={{ color: '#214493' }}>{work?.position}</ItemTitle>
            <ItemSubline>{work?.company} <StartDateEndDate> [ {work?.startDate} - {work?.endDate} ] </StartDateEndDate></ItemSubline>
            <PlaceOfWork>City: {work?.city} <Separator>|</Separator> Country: {work?.country}</PlaceOfWork>
            <Spacer height={10} />
            {work?.highlights && work?.highlights.map((highlight, hIdx) => (
              <BulletPoints key={hIdx}>{highlight}</BulletPoints>
            ))}
          </Item>
        ))}
      </SectionContent>
      <SectionImageAndTitleDiv>
        <SectionTitle>Education and Training</SectionTitle>
      </SectionImageAndTitleDiv>
      <SectionContent>
        {resumeData?.education?.map((education, idx) => (
          <Item key={idx}>
            <ItemTitle style={{ color: '#214493' }}>
              {education?.studyType} in {education?.area}
            </ItemTitle>
            <ItemSubline>
              {education?.institution} [ {education?.startDate} - {education?.endDate} ]
            </ItemSubline>
            <PlaceOfWork>City: {education?.city} <Separator>|</Separator> Country: {education?.country} <Separator>|</Separator> Website: {education?.website}</PlaceOfWork>
          </Item>
        ))}
      </SectionContent>
      <SectionImageAndTitleDiv>
        <SectionTitle>Language skills</SectionTitle>
      </SectionImageAndTitleDiv>
      <SectionContent>
        <LanguageLevels>
          <ItemTitle style={{ fontSize: '14px' }}>Mother tongue(s):</ItemTitle>
          <Separator />
          {resumeData?.languages?.map((language, idx) => (
            language.motherTongue && (
              <React.Fragment key={idx}>
                <p>{language?.language}</p>
                {idx === resumeData?.languages?.filter((e) => e.motherTongue).length - 1 ? '' : <Separator>|</Separator>}
              </React.Fragment>
            )
          ))}
        </LanguageLevels>
        {checkOtherLanguagesExist(resumeData.languages) &&
          <>
            <ItemTitle style={{ fontSize: '14px', margin: '0 0 10px 0' }}>Other language(s): </ItemTitle>
            {resumeData?.languages?.map((language, idx) => (
              !language.motherTongue && (
                <Item key={idx}>
                  <p style={{ color: '#214493', fontSize: '14px', fontWeight: '600' }}>{language?.language}</p>
                  <LanguageLevels>
                    <BoldLabel>Listening: </BoldLabel> <p>{language?.level}</p> <Separator>|</Separator> <BoldLabel>Reading:</BoldLabel> <p>{language?.level}</p> <Separator>|</Separator> <BoldLabel>Spoken interaction:</BoldLabel> <p>{language?.level}</p> <Separator>|</Separator> <BoldLabel>Spoken production: </BoldLabel><p>{language?.level}</p> <Separator>|</Separator> <BoldLabel> Writing:</BoldLabel><p>{language?.level}</p>
                  </LanguageLevels>
                </Item>
              )
            ))}
            <LanguageLevelsDetail>Levels: A1 and A2: Basic user; B1 and B2: Independent user; C1 and C2: Proficient user</LanguageLevelsDetail>
          </>}
      </SectionContent>
      <RightLowerBorder />
      <LeftLowerBorder />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-top: 1.5rem solid #81acd9;
  border-bottom: 1.5rem solid #81acd9;
  min-height: 296mm;
  background: #fff;
  position: relative;
  padding: 0 20px;

  a {
    color: #81acd9;
  }
`;

const RightUpperBorder = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 8vh;
  border: 0.7rem solid #81acd9;
`;

const LeftUpperBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 8vh;
  border: 0.7rem solid #81acd9;
`;

const BasicInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 10px 20px;

  h3 {
    font-size: 24px;
    font-weight: 600;
  }

  p {
    padding-top: 5px;
    font-size: 14px;
    display: flex;
  }
`;

const Horizontal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const BoldLabel = styled.span`
  font-weight: bold;
  font-size: 14px;
  display: flex;
  text-align: center;
  margin-right: 5px;
`;

const BasicInfoDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ShortBio = styled.p`
  padding: 10px 20px;
  font-size: 14px;
`;

const SectionImageAndTitleDiv = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #c6c6c6;
  padding: 5px 0;
  margin: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 14px;
  font-weight: 600;
  color: #214493;
  text-transform: uppercase;
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
  font-size: 14px;
`;

const ItemSubline = styled.p`
  font-weight: 500;
  padding: 2px 0 5px;
  font-size: 14px;
`;

const StartDateEndDate = styled.span`
  font-weight: 400;
  font-size: 14px;
`;

const PlaceOfWork = styled.p`
  font-weight: 400;
  font-size: 14px;
`;

const Separator = styled.span`
  color: #c6c6c6;
  margin: 0 5px;
`;

const Spacer = styled.div`
  height: ${(props) => props.height}px;
`;

const LanguageLevelsDetail = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #c6c6c6;
  font-style: italic;
`;

const LanguageLevels = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  flex-direction: row;

  p {
    font-size: 14px;
  }
`;

const BulletPoints = styled.p`
  padding: 0 3rem;
  position: relative;
  font-size: 14px;

  &:before {
    content: "";
    position: absolute;
    left: 2.3rem;
    top: 0.5rem;
    width: 3px;
    height: 3px;
    border-radius: 100%;
    background-color: #000;
    opacity: 1;
  }
`;

const RightLowerBorder = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 8vh;
  border: 0.7rem solid #81acd9;
`;

const LeftLowerBorder = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 8vh;
  border: 0.7rem solid #81acd9;
`;

export default TemplateEuroPass1;