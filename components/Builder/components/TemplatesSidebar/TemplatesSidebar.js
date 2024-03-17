import React from 'react';
import styled from 'styled-components';
import {
  colors
} from '@/helpers';
import templatesData from './templatesData';

const TemplatesSidebar = ({updateTemplateId}) => (
  <Wrapper className="print-none">
    <ThemeTypes>
      <button
        type="button"
        className="active"
      >
        <img src="/assets/icons/basic-template-icon.png" alt="" />
        <span>Starter</span>
      </button>
      <button
        type="button"
      >
        <img src="/assets/icons/premium-template-icon.png" alt="" />
        <span>Premium</span>
      </button>
    </ThemeTypes>
    <TemplatesList>
      {templatesData.length && templatesData.map((template, idx) => (
        <TemplateItem onClick={() => updateTemplateId(template?.id)} key={idx}>
          <TemplateFigure src={template.thumbnail} />
          <TemplateInfo>
            <p>{template.name}</p>
            <p>
              <span>Used by </span>
              {template.usedBy}
            </p>
          </TemplateInfo>
        </TemplateItem>
      ))}
    </TemplatesList>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 260px;
  background: #fff;
  border-radius: 10px;
`;

const ThemeTypes = styled.div`
    display: flex;
    align-items: center;

    button {
        flex: 1;
        font-size: 14px;
        font-weight: 500;
        border-bottom: 2px solid #ededed;
        padding: 12px 0;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        img {
          height: 20px;
        }

        &.active, &:hover {
          color: ${colors.HanPurple};
          border-color: ${colors.HanPurple};
        }
    }
`;

const TemplatesList = styled.div`
    padding: 20px 15px; 
`;

const TemplateItem = styled.div`
    box-shadow: 0 0 10px 0 rgba(103, 37, 244, 0.2);
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;

    &:not(:last-child) {
        margin-bottom: 20px;
    }
`;

const TemplateFigure = styled.img`
    width: 100%;
    height: 210px;
    object-fit: cover;
    object-position: top;
`;

const TemplateInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    padding: 10px;
    border-top: 1px solid lightgray;

    p {
      font-size: 15px;
    }

    span {
      color: ${colors.Gray};
    }
`;

export default TemplatesSidebar;
