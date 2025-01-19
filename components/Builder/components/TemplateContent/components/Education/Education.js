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

const Education = ({
  templateData,
  addNewEducationSection,
  handleDeleteEducationSection,
  handleInputChange,
  handleClose
}) => (
  templateData ? (
    <Item>
      <ItemTitle>
        <CloseIcon onClick={handleClose} src="/assets/icons/close-icon-dark.svg" />
        <ItemIcon src="/assets/icons/education-icon.svg" />
        <span>Education</span>
        <AddNewBtn
          type="button"
          className="btn-primary btn-outlined"
          onClick={addNewEducationSection}
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
                    value={templateItem?.institution}
                    placeholder="Name of University | College | Institution"
                    onChange={(e) => handleInputChange(idx, 'institution', e.target.value)}
                  />
                  <DeleteBtn
                    type="button"
                    onClick={() => handleDeleteEducationSection(idx)}
                  >
                    <img src="/assets/icons/trash-icon-red.svg" alt="delete" />
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
                <InputGroup>
                  <input
                    value={templateItem?.website}
                    placeholder="xyz-university.com"
                    onChange={(e) => handleInputChange(idx, 'website', e.target.value)}
                  />
                </InputGroup>
                <InputGroup>
                  <input
                    value={templateItem?.city}
                    placeholder="City"
                    onChange={(e) => handleInputChange(idx, 'city', e.target.value)}
                  />
                  <input
                    value={templateItem?.country}
                    placeholder="Country"
                    onChange={(e) => handleInputChange(idx, 'country', e.target.value)}
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
            </ItemSection>
          )) : ('')
        }
      </ItemContent>
      <AddNewSkillSection>
        <button
          type="button"
          className="btn-primary btn-outlined"
          onClick={addNewEducationSection}
        >
          <img src="/assets/icons/plus-icon-dark.svg" alt="add" />
          <span>Education</span>
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

export default Education;
