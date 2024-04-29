import React, {
 useContext
} from 'react'
import styled from 'styled-components';
import {
 Martel
} from 'next/font/google'

import {
    ResumeContext
} from '@/context/ResumeContext';
import {
 BarSmallIcon,
 EmailIcon,
 ExternalLinkIcon,
 GithubIcon,
 LeetcodeIcon,
 LinkedinIcon,
 LocationIcon,
 PhoneIcon
} from './assets';
import Image from 'next/image';

const Prism = () => {
  let {resumeData} = useContext(ResumeContext);
  resumeData = resumeData?.templateData;
  console.log(resumeData, "<--resumeData")

  return (
    <Wrapper>
        <HeaderLinks>
            {
                resumeData?.additionalLinks?.personalWebsite ? (
                    <ActionLink href={resumeData?.additionalLinks?.personalWebsite}>
                        <Image src={ExternalLinkIcon} />
                        <span>Portfolio</span>
                    </ActionLink>
                ) : ('')
            }
            {
                resumeData?.additionalLinks?.github ? (
                    <ActionLink href={resumeData?.additionalLinks?.github}>
                        <Image src={GithubIcon} />
                        <span>Github</span>
                    </ActionLink>
                ) : ('')
            }
            {
                resumeData?.additionalLinks?.linkedin ? (
                    <ActionLink href={resumeData?.additionalLinks?.linkedin}>
                        <Image src={LinkedinIcon} />
                        <span>LinkedIn</span>
                    </ActionLink>
                ) : ('')
            }
            {
                resumeData?.additionalLinks?.leetcode ? (
                    <ActionLink href={resumeData?.additionalLinks?.leetcode}>
                        <Image src={LeetcodeIcon} />
                        <span>Leetcode</span>
                    </ActionLink>
                ) : ('')
            }
        </HeaderLinks>
        <ContentSection>
            <LeftSide>
                <UserName>
                    {resumeData?.basics?.name}
                </UserName>
                <Designation className='f-13'>
                    {resumeData?.basics?.title}
                </Designation>
                <ShortBio className='f-12'>{resumeData?.basics?.summary}</ShortBio>
                <SectionTitle>
                    Work Experience
                </SectionTitle>
                {resumeData?.work?.map((work, idx) => (
                    <WorkItem key={idx}>
                        <WorkItemTitle>
                            <span className='f-16'>{work?.company}</span>
                            <span className='f-13'>{work?.position}</span>
                        </WorkItemTitle>
                        <ExperienceItem className='f-12'>{work?.startDate} - {work?.endDate}</ExperienceItem>
                        <BulletPoints className='f-10'>{work?.summary}</BulletPoints>
                        {
                        work?.highlights && work?.highlights.map((highlight, hIdx) => (
                            <BulletPoints className='f-10' key={hIdx}>{highlight}</BulletPoints>
                        ))
                        }
                    </WorkItem>
                ))}
                <SectionTitle>Projects</SectionTitle>
                {resumeData?.projects?.map((project, idx) => (
                    <WorkItem key={idx}>
                        <WorkItemTitle>
                            <span className='f-16 pb-10'>{project.name}</span>
                        </WorkItemTitle>
                        {
                            project.highlights && project.highlights.map((highlight, hIdx) => (
                                <BulletPoints className='f-10' key={hIdx}>{highlight}</BulletPoints>
                            ))
                        }
                    </WorkItem>
                ))}
            </LeftSide>
            <RightSide>
                <SectionTitle className="pt-12">Contact</SectionTitle>
                <KeyList>
                    {resumeData?.basics?.city ? (
                        <Item>
                            <Image src={LocationIcon} />
                            <span>{resumeData?.basics?.city}</span>
                        </Item>
                    ) : ('')}
                    {resumeData?.basics?.phone ? (
                        <Item>
                            <Image src={PhoneIcon} />
                            <span><a target="_blank" href={`tel:${resumeData?.basics?.phone}`} rel="noreferrer">{resumeData?.basics?.phone}</a></span>
                        </Item>
                    ) : ('')}
                    {resumeData?.basics?.email ? (
                        <Item>
                            <Image src={EmailIcon} />
                            <span><a target="_blank" href={`mailto:${resumeData?.basics?.email}`} rel="noreferrer">{resumeData?.basics?.email}</a></span>
                        </Item>
                    ) : ('')}
                </KeyList>
                <SectionTitle>Skills</SectionTitle>
                <KeyList>
                    {resumeData?.skills && resumeData?.skills.map((skill, idx) => (
                        skill?.keywords && skill.keywords.map((skill) => (
                            <Item key={idx}>
                                <Image src={BarSmallIcon} />
                                <span>{skill}</span>
                            </Item>
                          ))
                    ))}
                </KeyList>
                <SectionTitle>Education</SectionTitle>
                {resumeData?.education?.map((education, idx) => (
                    <WorkItem className='circle-small' key={idx}>
                        <WorkItemTitle>
                            <span className='f-16'>{education?.institution}</span>
                            <span className='f-13'>{education?.position}</span>
                        </WorkItemTitle>
                        <ExperienceItem className='f-12'>
                            <span className='pr-16'>{education?.studyType}</span>
                            {education?.startDate} - {education?.endDate}
                        </ExperienceItem>
                        <ExperienceItem className='pt-0 f-12'>
                            {education?.area}
                        </ExperienceItem>
                    </WorkItem>
                ))}
                {/* <SectionTitle>Other Links</SectionTitle> */}
            </RightSide>
        </ContentSection>
    </Wrapper>
  )
}

const templateColors = {
    primaryText: '#302749',
    secondaryText: '#6D6978',
    tertiaryText: '#4200FF'
} 

const Wrapper = styled.div`
    min-height: 296mm;
    background: #fff;
    padding: 20px 23px;

    * {
        color: ${templateColors?.primaryText};
        font-weight: 500;
        transform: unset!important;
    }

    h1, h2 {
        font-family: Martel;
        font-weight: 700;
    }

    .pt-0 {
        padding-top: 0;
    }

    .pb-5 {
        padding-bottom: 5px;
    }

    .pb-10 {
        padding-bottom: 10px;
    }

    .pr-16 {
        padding-right: 16px;
    }

    .f-10 {
        font-size: 10px;
    }
    .f-12 {
        font-size: 12px;
    }
    .f-13 {
        font-size: 13px;
    }
    .f-14 {
        font-size: 14px;
    }
    .f-15 {
        font-size: 15px;
    }
    .f-16 {
        font-size: 16px;
    }
`;

const HeaderLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 27px;
`;

const ActionLink = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    font-weight: 500;
`;

const ContentSection = styled.div`
    display: flex;
    gap: 35px;
`;

const LeftSide = styled.div`
    width: 444px;
`;

const RightSide = styled.div`
    flex: 1;
`;

const UserName = styled.h1`
    font-size: 32px;
    font-weight: 700;
`;

const Designation = styled.p`

`;

const ShortBio = styled.p`
    padding-top: 15px;
    text-align: justify;
`;

const SectionTitle = styled.h2`
    padding-top: 30px;
    font-size: 22px;

    &.pt-12 {
        padding-top: 12px;
    }
`;

const WorkItem = styled.div`
    padding-top: 12px;
    padding-left: 23px;
    position: relative;

    &.circle-small {
        &::after {
            width: 8px;
            height: 8px;
            top: 17px;
        }
        &::before { 
            left: 6px;
            top: 17px;
        }
    }

    &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 16.5px;
        width: 10px;
        height: 10px;
        border-radius: 100%;
        border: 3px solid ${templateColors.tertiaryText};
        background-color: #fff;
    }

    &::before {
        content: "";
        position: absolute;
        left: 7.5px;
        top: 16.5px;
        width: 1px;
        height: 100%;
        opacity: 0.2;
        background-color: ${templateColors.tertiaryText};
    }
`;

const WorkItemTitle = styled.h3`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;

const ExperienceItem = styled.p`
    padding: 4px 0 7px;
    color: ${templateColors.secondaryText};

    span {
        color: ${templateColors.secondaryText};
    }
`;

const BulletPoints = styled.p`
    padding-bottom: 10px;
    text-align: justify;

    &:last-child {
        padding-bottom: 0;
    }
`;

const KeyList = styled.div`

`;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;

    img {
        width: 16px;
    }

    &:first-child {
        padding-top: 10px;
    }

    &:not(:first-child) {
        padding-top: 7px;
    }
`;

export default Prism