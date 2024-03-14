import React from 'react';
import styled from 'styled-components';
import {
  InputGroup,
  Item, ItemContent, ItemTitle
} from '@/components/common/UiElements';

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
        Skills
        <button
          type="button"
          className="btn-primary btn-outlined"
          onClick={addNewSkillSection}
        >
          Add New Section
        </button>
      </ItemTitle>
      <ItemContent>
        {
          templateData?.length && templateData?.map((template, idx) => (
            <ItemWrapper>
              <InputGroup>
                <label htmlFor="#">Skill Title</label>
                <input
                  type="text"
                  onChange={(e) => handleUpdateSkillSectionTitle(idx, e.target.value)}
                  value={template?.name}
                />
                <button
                  type="button"
                  className="btn-primary btn-outlined"
                  onClick={() => handleDeleteSkillSection(idx)}
                >
                  Delete
                </button>
              </InputGroup>
              {
                template?.keywords && template?.keywords.map((skillItem, sIdx) => (
                  <InputGroup>
                    <input
                      type="text"
                      onChange={(e) => handleUpdateSkill(idx, sIdx, e.target.value)}
                      value={skillItem}
                    />
                    <button
                      type="button"
                      className="btn-primary btn-outlined"
                      onClick={() => handleDeleteSkill(idx, sIdx)}
                    >
                      Delete
                    </button>
                  </InputGroup>
                ))
              }
              <button
                type="button"
                className="btn-primary btn-outlined"
                onClick={() => handleAddSkill(idx)}
              >
                Add Skill
              </button>
            </ItemWrapper>
          ))
        }
      </ItemContent>
    </Item>
  ) : ('')
);

const ItemWrapper = styled.div`
    
`;

export default Skills;
