import React from 'react';
import styled from 'styled-components';
import {
  colors
} from '@/helpers';

const TemplateContent = ({
  contentModificationModules,
  activeSection,
  togglePreview,
  resumeDataDoesNotExist
}) => (
  <Wrapper className={`${togglePreview ? 'hide' : ''} ${activeSection === '' ? 'd-none' : ''} print-none`} style={{ opacity: resumeDataDoesNotExist ? 0 : 1 }}>
    <ModulesWrapper>
      {
        contentModificationModules.length ? contentModificationModules.map((module) => (
          <Module className={activeSection === module.id ? 'active' : ''}>
            <ComponentWrapper>
              {module?.component}
            </ComponentWrapper>
          </Module>
        )) : ('')
      }
    </ModulesWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
    background-color: #fff;
    position: sticky;
    top: 0;
    flex-shrink: 0;
    width: 280px;
    overflow: hidden;
    box-sizing: border-box;
    border-left: 1px solid ${colors.LavenderWeb};
    transition: all 0.2s ease-in-out;

    &.hide {
      transform: translateX(101%);
    }

    &.d-none {
      display: none;
    }

    @media print {
      display: none;
    }

    @media (max-width: 768px) {
      position: absolute;
      top: 0;
      right: 0;
      height: calc(100% - 54px);
      border-bottom: 1px solid ${colors.LavenderWeb};
      box-shadow: 0px 0 30px 10px rgba(0,0,0,0.1);
    }

    @media (max-width: 576px) {
      width: 100%;
      height: calc(100% - 37px);
    }
`;

const ModulesWrapper = styled.div``;

const Module = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    transform: translateX(100%);
    // transition: all 0.2s ease-in-out;
    background: #fff;
    display: flex;
    flex-direction: column;

    &.active {
      transform: unset;
    }
`;

const ComponentWrapper = styled.div`
    flex: 1;
    overflow: auto;
    // padding: 0 20px;
`;

export default TemplateContent;
