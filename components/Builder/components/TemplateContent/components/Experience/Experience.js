import React from 'react';
import styled from 'styled-components';
import {
  AddBtn,
  AddNewSkillSection,
  DeleteBtn,
  InputGroup,
  Item, ItemContent, ItemTitle
} from '@/components/common/UiElements';
import DropdownToggle from '@/components/common/DropdownToggle';

const Experience = ({
  templateData,
  addNewExperienceSection,
  handleDeleteWorkSection,
  handleInputChange,
  handleHighlightsChange,
  handleAddHighlight,
  handleDeleteHighlight,
  dropdownOpen,
  setDropdownOpen
}) => (
  templateData ? (
    <Item>
      <ItemTitle>
        <DropdownToggle dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} />
        Experience
        {dropdownOpen
          && (
            <AddBtn
              type="button"
              onClick={addNewExperienceSection}
            >
              <img src="/assets/icons/plus-icon.png" alt="add-section" />
            </AddBtn>
          )}
      </ItemTitle>
      {dropdownOpen
        && (
          <ItemContent>
            {
              templateData.length ? templateData.map((templateItem, idx) => (
                <>
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
                        <img src="/assets/icons/delete-cross-icon.png" alt="delete" />
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
                  <ItemWrapper>
                    <InputGroup>
                      <textarea
                        value={templateItem?.summary}
                        placeholder="Work Summary"
                        onChange={(e) => handleInputChange(idx, 'summary', e.target.value)}
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
                            <img src="/assets/icons/delete-cross-icon.png" alt="delete" />
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
                    <img src="/assets/icons/plus-icon.png" alt="add-section" />
                  </AddBtn>
                </>
              )) : ('')
            }
            <AddNewSkillSection>
              <button
                type="button"
                className="btn-primary btn-outlined"
                onClick={addNewExperienceSection}
              >
                Add new work section
              </button>
            </AddNewSkillSection>
          </ItemContent>
        )}
    </Item>
  ) : ('')
);

const ItemWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  .highlight-item {
    min-height: 50px;
  }
`;

export default Experience;
