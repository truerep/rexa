import React from 'react';
import styled from 'styled-components';
import {
  AddBtn,
  AddNewSkillSection,
  DeleteBtn,
  InputGroup,
  Item, ItemContent, ItemTitle
} from '@/components/common/UiElements';
import {
  colors
} from '@/helpers';
import DropdownToggle from '@/components/common/DropdownToggle';

const Skills = ({
  templateData,
  handleUpdateSkill,
  handleUpdateSkillSectionTitle,
  handleDeleteSkill,
  handleDeleteSkillSection,
  handleAddSkill,
  addNewSkillSection,
  dropdownOpen,
  setDropdownOpen
}) => (
  templateData ? (
    <Item>
      <ItemTitle>
        <DropdownToggle dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} />
        <span>Skills</span>
        {dropdownOpen && (
          <AddBtn
            type="button"
            onClick={addNewSkillSection}
          >
            <img src="/assets/icons/plus-icon.png" alt="add-section" />
          </AddBtn>
        )}
      </ItemTitle>
      {dropdownOpen && (
        <ItemContent>
          {
            templateData?.length ? templateData?.map((template, idx) => (
              <ItemWrapper>
                <InputGroup className="highlighted">
                  <input
                    type="text"
                    placeholder="Skill Type"
                    onChange={(e) => handleUpdateSkillSectionTitle(idx, e.target.value)}
                    value={template?.name}
                  />
                  <DeleteBtn
                    type="button"
                    onClick={() => handleDeleteSkillSection(idx)}
                  >
                    <img src="/assets/icons/delete-cross-icon.png" alt="delete" />
                  </DeleteBtn>
                </InputGroup>
                <div className="d-grid grid-2 col-gap-2">
                  {
                    template?.keywords && template?.keywords.map((skillItem, sIdx) => (
                      <InputGroup>
                        <input
                          type="text"
                          placeholder="Add Skill"
                          onChange={(e) => handleUpdateSkill(idx, sIdx, e.target.value)}
                          value={skillItem}
                        />
                        <DeleteBtn
                          type="button"
                          onClick={() => handleDeleteSkill(idx, sIdx)}
                        >
                          <img src="/assets/icons/delete-cross-icon.png" alt="delete" />
                        </DeleteBtn>
                      </InputGroup>
                    ))
                  }
                </div>
                <AddBtn
                  className="sub-type-add-btn"
                  type="button"
                  onClick={() => handleAddSkill(idx)}
                >
                  <img src="/assets/icons/plus-icon.png" alt="add-section" />
                </AddBtn>
              </ItemWrapper>
            )) : ('')
          }
          <AddNewSkillSection>
            <button
              type="button"
              className="btn-primary btn-outlined"
              onClick={addNewSkillSection}
            >
              Add new skill section
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
`;

export default Skills;
