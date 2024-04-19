import React from 'react';
import styled from 'styled-components';
import {
  colors
} from '@/helpers';

const TemplateContent = ({
  contentModificationModules,
  activeSection,
  togglePreview
}) => (
  <Wrapper className={`${togglePreview ? 'hide' : ''} print-none`}>
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

    @media print {
      display: none;
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
