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

const Languages = ({
  templateData,
  addNewLanguagesSection,
  handleDeleteLanguagesSection,
  handleInputChange,
  handleClose
}) => (
  templateData ? (
    <Item>
      <ItemTitle>
        <CloseIcon onClick={handleClose} src="/assets/icons/close-icon-dark.svg" />
        <ItemIcon src="/assets/icons/translate-icon.svg" />
        <span>Languages</span>
        <AddNewBtn
          type="button"
          className="btn-primary btn-outlined"
          onClick={addNewLanguagesSection}
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
                    value={templateItem?.language}
                    placeholder="Language"
                    onChange={(e) => handleInputChange(idx, 'language', e.target.value)}
                  />
                  <DeleteBtn
                    type="button"
                    onClick={() => handleDeleteLanguagesSection(idx)}
                  >
                    <img src="/assets/icons/trash-icon-red.svg" alt="delete" />
                  </DeleteBtn>
                </InputGroup>
              </ItemWrapper>
              <ItemWrapper>
                <InputGroup>
                  <input
                    value={templateItem?.fluency}
                    placeholder="Fluency"
                    onChange={(e) => handleInputChange(idx, 'fluency', e.target.value)}
                  />
                  <input
                    value={templateItem?.level}
                    placeholder="Level"
                    onChange={(e) => handleInputChange(idx, 'level', e.target.value)}
                  />
                  <MotherTongueToggle>
                    <input
                      type="checkbox"
                      id={`motherTongue-${idx}`}
                      checked={templateItem?.motherTongue}
                      onChange={(e) => handleInputChange(idx, 'motherTongue', e.target.checked)}
                    />
                    <label htmlFor={`motherTongue-${idx}`} />
                  </MotherTongueToggle>
                </InputGroup>
              </ItemWrapper>
            </ItemSection>
          )) : ('')
        }
      </ItemContent>
      <AddNewSkillSection>
        <button
          type="button"
          className="btn-primary btn-outlined"
          onClick={addNewLanguagesSection}
        >
          <img src="/assets/icons/plus-icon-dark.svg" alt="add" />
          <span>Languages</span>
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

const MotherTongueToggle = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 10px;
`;

export default Languages;
