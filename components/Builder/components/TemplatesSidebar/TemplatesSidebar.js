import React from 'react';
import styled from 'styled-components';
import {
  colors
} from '@/helpers';
import templatesData from './templatesData';

const TemplatesSidebar = ({updateTemplateId}) => (
  <Wrapper className="print-none">
    <ThemeTypes>
      <button className="btn-primary">Basic</button>
      <button className="btn-primary btn-outlined">Premium</button>
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
  width: 280px;
  background: #fff;
  padding: 15px; 
  border-radius: 10px;
`;

const ThemeTypes = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    button {
        flex: 1;
        font-size: 14px;
        font-weight: 500;
    }
`;

const TemplatesList = styled.div`
    padding-top: 20px;
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
    height: 220px;
    object-fit: contain;
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
