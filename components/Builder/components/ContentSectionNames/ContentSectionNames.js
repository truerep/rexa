import React from 'react';
import styled from 'styled-components';

import {
  colors
} from '@/helpers';

const ContentSectionNames = ({ sectionNamesList, activeSection, togglePreview }) => (
  <Wrapper className={togglePreview ? 'hide' : ''}>
    {sectionNamesList?.map((sectionName) => (
      sectionName &&
      <ActionButton
        className={activeSection === sectionName?.id ? 'active' : ''}
        onClick={sectionName?.handleClick}
      >
        <Icon src={sectionName?.iconUrl} />
        <span>{sectionName?.name}</span>
        <Icon className="arrow" src="/assets/icons/arrow-right-dark.svg" />
      </ActionButton>
    ))}
    <InfoLine>
      *Not all data supported in all templates. Opt for premium templates for more optimizations.
    </InfoLine>
  </Wrapper>
);

const Wrapper = styled.div`
    background: #fff;
    padding-top: 37px;
    width: 240px;
    flex-shrink: 0;
    border-right: 1px solid ${colors.LavenderWeb};
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;  
    transition: all 0.2s ease-in-out;

    &.hide {
      transform: translateX(-101%);
    }
    
    @media print {
      display: none;
    }
`;

const ActionButton = styled.button`
    padding: 14px 22px;
    transform: unset!important;
    transition: none!important;
    display: flex;
    align-items: center;
    gap: 18px;
    width: 100%;
    font-size: 16px;

    &.active, &:hover {
        background-color: ${colors.GhostWhite};

        .arrow {
            opacity: 1;
        }
    }
`;

const Icon = styled.img`
    width: 24px;
    height: 24px;
    object-fit: cover;
    flex-shrink: 0;

    &.arrow {
        height: 11px;
        width: unset;
        margin-left: auto;
        opacity: 0;
    }
`;

const InfoLine = styled.p`
  color: ${colors.ErrieBlack};
  font-size: 10px;
  padding: 10px;
  font-weight: 500;
  line-height: 1.5;
  font-weight: 500;
  background: lightyellow;
  margin-top: auto;
`;

export default ContentSectionNames;
