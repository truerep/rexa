import React from 'react';
import styled from 'styled-components';
import {
  AddBtn,
  AddNewBtn,
  AddNewSkillSection,
  CloseIcon,
  DeleteBtn,
  InputGroup,
  Item, ItemContent, ItemIcon, ItemSection, ItemTitle
} from '@/components/common/UiElements';

const Project = ({
  templateData,
  addNewProjectSection,
  handleDeleteProjectSection,
  handleInputChange,
  handleHighlightsChange,
  handleAddHighlight,
  handleDeleteHighlight,
  handleClose
}) => (
  templateData ? (
    <Item>
      <ItemTitle>
        <CloseIcon onClick={handleClose} src="/assets/icons/close-icon-dark.svg" />
        <ItemIcon src="/assets/icons/experience-icon.svg" />
        <span>Project</span>
        <AddNewBtn
          type="button"
          className="btn-primary btn-outlined"
          onClick={addNewProjectSection}
        >
          <img src="/assets/icons/plus-icon-dark.svg" alt="add" />
        </AddNewBtn>
      </ItemTitle>
      <ItemContent>
        {
          templateData.length ? templateData.map((templateItem, idx) => (
            <ItemSection key={idx}>
              <ItemWrapper>
                <InputGroup className="highlighted">
                  <input
                    value={templateItem?.name}
                    placeholder="Name"
                    onChange={(e) => handleInputChange(idx, 'name', e.target.value)}
                  />
                  <DeleteBtn
                    type="button"
                    onClick={() => handleDeleteProjectSection(idx)}
                  >
                    <img src="/assets/icons/trash-icon-red.svg" alt="delete" />
                  </DeleteBtn>
                </InputGroup>
              </ItemWrapper>
              <ItemWrapper>
                <InputGroup>
                  <input
                    value={templateItem?.url}
                    placeholder="http://mycompany.com"
                    onChange={(e) => handleInputChange(idx, 'url', e.target.value)}
                  />
                </InputGroup>
              </ItemWrapper>
              <div className="d-grid grid-2 col-gap-2">
                <ItemWrapper>
                  <InputGroup>
                    <input
                      value={templateItem?.startDate}
                      placeholder="Start Date"
                      onChange={(e) => handleInputChange(idx, 'startDate', e.target.value)}
                    />
                  </InputGroup>
                </ItemWrapper>
                <ItemWrapper>
                  <InputGroup>
                    <input
                      value={templateItem?.endDate}
                      placeholder="End Date"
                      onChange={(e) => handleInputChange(idx, 'endDate', e.target.value)}
                    />
                  </InputGroup>
                </ItemWrapper>
              </div>
              {
                templateItem?.highlights && templateItem?.highlights?.map((highlight, hIdx) => (
                  <ItemWrapper key={hIdx}>
                    <InputGroup>
                      <textarea
                        className="highlight-item"
                        value={highlight}
                        placeholder="Add Work Highlight"
                        onChange={(e) => handleHighlightsChange(idx, hIdx, e.target.value)}
                      />
                      <DeleteBtn
                        type="button"
                        onClick={() => handleDeleteHighlight(idx, hIdx)}
                      >
                        <img src="/assets/icons/remove-icon-red.svg" alt="delete" />
                      </DeleteBtn>
                    </InputGroup>
                  </ItemWrapper>
                ))
              }
              <AddBtn
                className="sub-type-add-btn"
                type="button"
                onClick={() => handleAddHighlight(idx)}
              >
                <img src="/assets/icons/plus-icon-round.svg" alt="add-section" />
              </AddBtn>
            </ItemSection>
          )) : ('')
        }
      </ItemContent>
      <AddNewSkillSection>
        <button
          type="button"
          className="btn-primary btn-outlined"
          onClick={addNewProjectSection}
        >
          <img src="/assets/icons/plus-icon-dark.svg" alt="add" />
          <span>Project</span>
        </button>
      </AddNewSkillSection>
    </Item>
  ) : ('')
);

const ItemWrapper = styled.div`
  &:not(:last-child) {
    // margin-bottom: 10px;
  }

  .highlight-item {
    min-height: 50px;
  }
`;

export default Project;
