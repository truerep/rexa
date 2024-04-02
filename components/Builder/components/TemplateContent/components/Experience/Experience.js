import React from 'react';
import styled from 'styled-components';
import {
  AddBtn,
  AddNewBtn,
  AddNewSkillSection,
  DeleteBtn,
  InputGroup,
  Item, ItemContent, ItemIcon, ItemSection, ItemTitle
} from '@/components/common/UiElements';

const Experience = ({
  templateData,
  addNewExperienceSection,
  handleDeleteWorkSection,
  handleInputChange,
  handleHighlightsChange,
  handleAddHighlight,
  handleDeleteHighlight
}) => (
  templateData ? (
    <Item>
      <ItemTitle>
        <ItemIcon src="/assets/icons/experience-icon.svg" />
        <span>Experience</span>
        <AddNewBtn
          type="button"
          className="btn-primary btn-outlined"
          onClick={addNewExperienceSection}
        >
          <img src="/assets/icons/plus-icon-dark.svg" alt="add" />
        </AddNewBtn>
      </ItemTitle>
      <ItemContent>
        {
          templateData.length ? templateData.map((templateItem, idx) => (
            <ItemSection>
              <ItemWrapper>
                <InputGroup className="highlighted">
                  <input
                    value={templateItem?.company}
                    placeholder="Company"
                    onChange={(e) => handleInputChange(idx, 'company', e.target.value)}
                  />
                  <DeleteBtn
                    type="button"
                    onClick={() => handleDeleteWorkSection(idx)}
                  >
                    <img src="/assets/icons/trash-icon-red.svg" alt="delete" />
                  </DeleteBtn>
                </InputGroup>
              </ItemWrapper>
              <ItemWrapper>
                <InputGroup>
                  <input
                    value={templateItem?.website}
                    placeholder="http://mycompany.com"
                    onChange={(e) => handleInputChange(idx, 'website', e.target.value)}
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
              <ItemWrapper>
                <InputGroup>
                  <textarea
                    value={templateItem?.summary}
                    placeholder="Work Summary"
                    onChange={(e) => handleInputChange(idx, 'summary', e.target.value)}
                  />
                </InputGroup>
              </ItemWrapper>

              {
                templateItem?.highlights && templateItem?.highlights?.map((highlight, hIdx) => (
                  <ItemWrapper>
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
          onClick={addNewExperienceSection}
        >
          <img src="/assets/icons/plus-icon-dark.svg" alt="add" />
          <span>Experience</span>
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

export default Experience;
