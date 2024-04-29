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
import {
  colors
} from '@/helpers';

const Interests = ({
  templateData,
  handleUpdateInterest,
  handleUpdateInterestsectionTitle,
  handleDeleteInterest,
  handleDeleteInterestsection,
  handleAddInterest,
  addNewInterestsection
}) => (
  templateData ? (
    <Item>
      <ItemTitle>
        <ItemIcon src="/assets/icons/basketball-icon.svg" />
        <span>Interests</span>
        <AddNewBtn
          type="button"
          className="btn-primary btn-outlined"
          onClick={addNewInterestsection}
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
                    placeholder="Interest Type"
                    onChange={(e) => handleUpdateInterestsectionTitle(idx, e.target.value)}
                    value={template?.name}
                  />
                  <DeleteBtn
                    type="button"
                    onClick={() => handleDeleteInterestsection(idx)}
                  >
                    <img src="/assets/icons/trash-icon-red.svg" alt="delete" />
                  </DeleteBtn>
                </InputGroup>
                <div className="d-grid grid-2 col-gap-2">
                  {
                template?.keywords && template?.keywords.map((InterestItem, sIdx) => (
                  <InputGroup>
                    <input
                      type="text"
                      placeholder="Add Interest"
                      onChange={(e) => handleUpdateInterest(idx, sIdx, e.target.value)}
                      value={InterestItem}
                    />
                    <DeleteBtn
                      type="button"
                      onClick={() => handleDeleteInterest(idx, sIdx)}
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
                  onClick={() => handleAddInterest(idx)}
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
          onClick={addNewInterestsection}
        >
          <img src="/assets/icons/plus-icon-dark.svg" alt="add" />
          <span>Interest</span>
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

export default Interests;
