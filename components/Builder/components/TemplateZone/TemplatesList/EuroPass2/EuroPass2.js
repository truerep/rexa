import React, { useContext } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ResumeContext } from '@/context/ResumeContext';

const TemplateEuroPass2 = () => {
  let { resumeData } = useContext(ResumeContext);
  resumeData = resumeData?.templateData;

  return (
    <Wrapper>
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
          <h3>{resumeData?.basics?.name}</h3>
          <Horizontal>
            <p>
              <BoldLabel>Date of birth:</BoldLabel> {resumeData?.basics?.birthDate || '01/01/1990'}
            </p>
            <Separator>|</Separator>
            <p>
              <BoldLabel>Nationality:</BoldLabel> {resumeData?.basics?.nationality || 'Indian'}
            </p>
            <Separator>|</Separator>
            <p>
              <BoldLabel> Phone number:</BoldLabel> {resumeData?.basics?.phone}
            </p>
            <Separator>|</Separator>
            <p>
              <BoldLabel>Email address:</BoldLabel> <a href={`mailto:${resumeData?.basics?.email}`}>{resumeData?.basics?.email}</a>
            </p>
            <Separator>|</Separator>
            <p>
              <BoldLabel>LinkedIn:</BoldLabel>
              <a href={resumeData?.additionalLinks?.linkedin} target="_blank" rel="noreferrer">
                {resumeData?.additionalLinks?.linkedin}
              </a>
            </p>
            <Separator>|</Separator>
            <p>
              <BoldLabel>Website:</BoldLabel><a href={resumeData?.additionalLinks?.website} target="_blank" rel="noreferrer">{resumeData?.additionalLinks?.website}</a>
            </p>
            <Separator>|</Separator>
            <p>
              <BoldLabel>Address:</BoldLabel> {resumeData?.basics?.city}
            </p>
          </Horizontal>
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
            <ItemSubline>
              <StartDateEndDate> {work?.startDate} - {work?.endDate} {work?.city}, {work?.country} </StartDateEndDate>
            </ItemSubline>
            <Horizontal>
              <ItemTitle>{work?.position}</ItemTitle><p style={{
                textTransform: 'uppercase',
                fontSize: '14px',
                margin: '0 0 0 5px',
              }}>{work?.company}</p>
            </Horizontal>
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
            <ItemSubline>
              <StartDateEndDate>{education?.startDate} - {education?.endDate} {education?.city}, {education?.country} </StartDateEndDate>
            </ItemSubline>
            <Horizontal>
              <ItemTitle style={{
                textTransform: 'uppercase',
              }}>
                {education?.studyType} in {education?.area}
              </ItemTitle><p style={{
                textTransform: 'uppercase',
                fontSize: '14px',
                margin: '0 0 0 5px',
              }}>{education?.institution}</p>
            </Horizontal>
            <Spacer height={10} />
            <Horizontal>
              <ItemTitle>Website</ItemTitle> <a style={{
                fontSize: '14px',
                margin: '0 0 0 5px',
              }}
                href={education?.website} target="_blank" rel="noreferrer"
              >
                {education?.website}
              </a>
            </Horizontal>
          </Item>
        ))}
      </SectionContent>
      <SectionImageAndTitleDiv>
        <SectionTitle>Language skills</SectionTitle>
      </SectionImageAndTitleDiv>
      <SectionContent>
        <LanguageLevels>
          <p>Mother tongue(s):</p>
          <Separator />
          {resumeData?.languages?.map((language, idx) => (
            language.motherTongue && (
              <React.Fragment key={idx}>
                <ItemTitle>{language?.language}</ItemTitle>
                {idx === resumeData?.languages?.filter((e) => e.motherTongue).length - 1 ? '' : <Separator>|</Separator>}
              </React.Fragment>
            )
          ))}
        </LanguageLevels>
        <p style={{ fontSize: '14px', margin: '0 0 10px 0' }}>Other language(s): </p>
        <Table>
          <tr>
            <th></th>
            <th>Understanding</th>
            <th></th>
            <th>Speaking</th>
            <th></th>
            <th>Writing</th>
          </tr>
          <tr>
            <td></td>
            <td>Listening</td>
            <td>Reading</td>
            <td>Spoken production</td>
            <td>Spoken interaction</td>
            <td></td>
          </tr>
          {resumeData?.languages?.map((language, idx) => (
            !language.motherTongue && (
              // <Item key={idx}>
              //   <p style={{ color: '#214493', fontSize: '14px', fontWeight: '600' }}>{language?.language}</p>
              //   <LanguageLevels>
              //     <BoldLabel>Listening: </BoldLabel> <p>{language?.level}</p> <Separator>|</Separator> <BoldLabel>Reading:</BoldLabel> <p>{language?.level}</p> <Separator>|</Separator> <BoldLabel>Spoken interaction:</BoldLabel> <p>{language?.level}</p> <Separator>|</Separator> <BoldLabel>Spoken production: </BoldLabel><p>{language?.level}</p> <Separator>|</Separator> <BoldLabel> Writing:</BoldLabel><p>{language?.level}</p>
              //   </LanguageLevels>
              // </Item>
              <tr>
                <td>
                  <ItemTitle style={{
                    textTransform: 'uppercase',
                  }}>{language?.language}</ItemTitle>
                </td>
                <td>{language?.level}</td>
                <td>{language?.level}</td>
                <td>{language?.level}</td>
                <td>{language?.level}</td>
                <td>{language?.level}</td>
              </tr>
            )
          ))}
        </Table>
        <LanguageLevelsDetail>Levels: A1 and A2: Basic user; B1 and B2: Independent user; C1 and C2: Proficient user</LanguageLevelsDetail>
      </SectionContent>
    </Wrapper >
  );
};

const Wrapper = styled.div`
  min-height: 296mm;
  background: #fff;
  position: relative;

  a {
    color: #81acd9;
  }
`;

const BasicInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  background-color: #F5F5F5;

  h3 {
    font-size: 24px;
    font-weight: bolder;
    border-bottom: 2px solid #979797;
    padding: 10px 0;
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
  flex-wrap: wrap;
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
  border-bottom: 2px solid #979797;
  padding: 10px 0 0 0;
  margin: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 14px;
  font-weight: bolder;
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
  padding: 2px 0 0 0;
  font-size: 14px;
`;

const StartDateEndDate = styled.span`
  font-weight: 400;
  font-size: 14px;
`;

const Separator = styled.span`
  color: #c6c6c6;
  margin: 0 5px;
`;

const Spacer = styled.div`
  border-bottom: 2px solid #979797;
  margin: 0 0 ${(props) => props.height}px 0;
`;

const LanguageLevelsDetail = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-style: italic;
  padding: 10px 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr:first-child {
    border-bottom: 1px solid #979797;

    th {
      border-bottom: 1px solid #f2f2f2;
      text-align: right;
    }
    th:last-child {
      text-align: center;
    }
  }

  td:first-child {
    text-align: left;
  }

  td {
    padding: 8px;
    border-bottom: 1px solid #f2f2f2;
    text-align: center;
  }

  tr:nth-child(2) {
    td {
      background-color: #fff;
    }
  }

  tr {
    td {
      background-color: #f2f2f2;
    }
  }
  
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


export default TemplateEuroPass2;