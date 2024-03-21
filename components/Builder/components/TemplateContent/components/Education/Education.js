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

const Education = ({
  templateData,
  addNewEducationSection,
  handleDeleteEducationSection,
  handleInputChange,
  dropdownOpen,
  setDropdownOpen
}) => (
  templateData ? (
    <Item>
      <ItemTitle>
        <DropdownToggle dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} />
        Education
        {dropdownOpen && (
          <AddBtn
            type="button"
            onClick={addNewEducationSection}
          >
            <img src="/assets/icons/plus-icon.png" alt="add-section" />
          </AddBtn>
        )}
      </ItemTitle>
      {dropdownOpen && (
        <ItemContent>
          {
            templateData.length ? templateData.map((templateItem, idx) => (
              <>
                <ItemWrapper>
                  <InputGroup className="highlighted">
                    <input
                      value={templateItem?.institution}
                      placeholder="Name of University | College | Institution"
                      onChange={(e) => handleInputChange(idx, 'institution', e.target.value)}
                    />
                    <DeleteBtn
                      type="button"
                      onClick={() => handleDeleteEducationSection(idx)}
                    >
                      <img src="/assets/icons/delete-cross-icon.png" alt="delete" />
                    </DeleteBtn>
                  </InputGroup>
                </ItemWrapper>
                <ItemWrapper>
                  <InputGroup>
                    <input
                      value={templateItem?.area}
                      placeholder="Area of Study i.e Computer Science & Engineering"
                      onChange={(e) => handleInputChange(idx, 'area', e.target.value)}
                    />
                  </InputGroup>
                </ItemWrapper>

                <div className="d-grid grid-2 col-gap-2">
                  <ItemWrapper>
                    <InputGroup>
                      <input
                        value={templateItem?.studyType}
                        placeholder="Study Type - B.Tech"
                        onChange={(e) => handleInputChange(idx, 'studyType', e.target.value)}
                      />
                    </InputGroup>
                  </ItemWrapper>
                  <ItemWrapper>
                    <InputGroup>
                      <input
                        value={templateItem?.gpa}
                        placeholder="Marks Obtained - 7GPA or 70%"
                        onChange={(e) => handleInputChange(idx, 'gpa', e.target.value)}
                      />
                    </InputGroup>
                  </ItemWrapper>
                </div>
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
              </>
            )) : ('')
          }
          <AddNewSkillSection>
            <button
              type="button"
              className="btn-primary btn-outlined"
              onClick={addNewEducationSection}
            >
              Add new education section
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

export default Education;
