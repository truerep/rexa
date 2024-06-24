import React from 'react';
import styled from 'styled-components';
import {
  AddBtn,
  AddNewBtn,
  AddNewSkillSection,
  DeleteBtn,
  InputGroup,
  Item, ItemContent, ItemIcon, ItemSection, ItemTitle, ReMatchBtn
} from '@/components/common/UiElements';
import {
  colors
} from '@/helpers';

const Skills = ({
  templateData,
  handleUpdateSkill,
  handleUpdateSkillSectionTitle,
  handleDeleteSkill,
  handleDeleteSkillSection,
  handleAddSkill,
  addNewSkillSection
}) => (
  templateData ? (
    <Item>
      <ItemTitle>
        <ItemIcon src="/assets/icons/skills-icon.svg" />
        <span>Skills</span>
        <ReMatchBtn
          type="button"
          className="btn-primary btn-outlined"
        >
          <img src="/assets/icons/sync-icon-purple.svg" alt="re-match" />
        </ReMatchBtn>
        <AddNewBtn
          type="button"
          className="btn-primary btn-outlined"
          onClick={addNewSkillSection}
        >
          <img src="/assets/icons/plus-icon-dark.svg" alt="add" />
        </AddNewBtn>
      </ItemTitle>
      <ItemContent>
        {
          templateData?.length ? templateData?.map((template, idx) => (
            <ItemSection>
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
                    <img src="/assets/icons/trash-icon-red.svg" alt="delete" />
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
                      <img src="/assets/icons/remove-icon-red.svg" alt="delete" />
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
                  <img src="/assets/icons/plus-icon-round.svg" alt="add-section" />
                </AddBtn>
              </ItemWrapper>
            </ItemSection>
          )) : ('')
        }
      </ItemContent>
      <AddNewSkillSection>
        <button
          type="button"
          className="btn-primary btn-outlined"
          onClick={addNewSkillSection}
        >
          <img src="/assets/icons/plus-icon-dark.svg" alt="add" />
          <span>Skill</span>
        </button>
      </AddNewSkillSection>
    </Item>
  ) : ('')
);

const ItemWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export default Skills;
