import React from 'react';
import styled from 'styled-components';
import {
  colors
} from '@/helpers';

const TemplateContent = ({
  contentModificationModules,
  currentModule,
  setCurrentModule
}) => (
  <Wrapper className="print-none">
    <ActionButtonsWrapper>
      <InfoLine>
        *Not all data supported in all templates. Opt for premium templates for more optimizations.
      </InfoLine>
      <BtnList className={currentModule.length > 0 ? 'toggled' : ''}>
        {
          contentModificationModules.length ? contentModificationModules.map((module) => (
            <Button onClick={() => setCurrentModule(module?.id)}>
              <span>
                {module?.name}
              </span>
              <img src="/assets/icons/arrow-right-purple.png" alt="" />
            </Button>
          )) : ('')
        }
      </BtnList>
    </ActionButtonsWrapper>
    <ModulesWrapper>
      {
          contentModificationModules.length ? contentModificationModules.map((module) => (
            <Module className={currentModule === module.id ? 'active' : ''}>
              <BackButton onClick={() => setCurrentModule('')}>
                <img src="/assets/icons/arrow-right-purple.png" alt="" />
                <span>Back</span>
              </BackButton>
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
    max-width: 340px;
    width: 100%;
    overflow: hidden;
`;

const ActionButtonsWrapper = styled.div``;

const InfoLine = styled.p`
  color: ${colors.ErrieBlack};
  font-size: 13px;
  padding: 20px;
  font-weight: 500;
  line-height: 1.5;
  opacity: 0.8;
  background: lightyellow;
`;

const BtnList = styled.div`
  // padding-top: 60px;
  transition: all 0.2s ease-in-out;

  &.toggled {
    opacity: 0;
    transform: translateX(-20%);
  }
`;

const Button = styled.button`
    padding: 15px 30px;
    font-size: 18px;
    position: relative;
    display: block;
    width: 100%;
    text-align: left;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${colors.ErrieBlack};

    img {
      height: 14px;
      filter: brightness(0);
      margin-right: 5px;
    }

    &:hover {
      transform: unset;
      color: ${colors.HanPurple};

      img {
        filter: unset;
        animation: 0.3s move-out ease-in-out;
      }

      @keyframes move-out {
        0%, 100% {
          transform: translateX(0);
        }
        50% {
          transform: translateX(3px);
        }
      }
    }
    
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      margin: 0 auto;
      width: calc(100% - 40px); 
      background-color: ${colors.GhostWhite};
    }
`;

const BackButton = styled(Button)`
    justify-content: flex-start;
    padding-left: 20px;
    gap: 5px;
    font-size: 15px;

    img {
      height: 11px;
      rotate: 180deg;
      transition: all 0.2s ease-in-out;
    }
`;

const ModulesWrapper = styled.div`
`;

const Module = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    transform: translateX(100%);
    transition: all 0.2s ease-in-out;
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
