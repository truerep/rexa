import React from 'react';
import styled from 'styled-components';
import {
  AddBtn,
  AddNewBtn,
  AddNewSkillSection,
  DeleteBtn,
  InputGroup,
  Item, ItemContent, ItemIcon, ItemSection, ItemTitle, SyncBtn
} from '@/components/common/UiElements';
import { Modal } from '@/components/common';
import { colors } from '@/helpers';

const Experience = ({
  templateData,
  experienceRef,
  addNewExperienceSection,
  handleDeleteWorkSection,
  handleInputChange,
  handleHighlightsChange,
  handleAddHighlight,
  handleDeleteHighlight,
  handleModifyHighlights,
  showPromptModal,
  setShowPromptModal,
  isLoading,
  promptText,
  setPromptText,
  setCurrentWorkIndex
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
      <ItemContent ref={experienceRef}>
        {
          templateData.length ? templateData.map((templateItem, idx) => (
            <ItemSection>
              <ItemWrapper>
                <InputGroup className="highlighted">
                  <SyncBtn
                    type="button"
                    className="btn-primary btn-outlined"
                    onClick={() => {
                      setCurrentWorkIndex(idx);
                      setShowPromptModal(true);
                      // handleModifyHighlights(idx)
                    }}
                  >
                    <img src="/assets/icons/sync-icon-purple.svg" alt="add" />
                  </SyncBtn>
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
                    value={templateItem?.position}
                    placeholder="Position"
                    onChange={(e) => handleInputChange(idx, 'position', e.target.value)}
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
      <Modal
        showModal={showPromptModal}
        setShowModal={setShowPromptModal}
      >
        <PromptWrapper>
          <TextArea
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            placeholder="Ex. Modify my work summary according on this Job Description..."
          />
          <HintsWrapper>
            <HintSectionTitle>Sample prompts</HintSectionTitle>
            <HintItem
              onClick={() => setPromptText('Modify my work highlights based on this Job Description... "[Paste Job Description here]"')}
            >
              Modify my work highlights based on this Job Description... "[Paste Job Description here]"
            </HintItem>
            <HintItem
              onClick={() => setPromptText('Enhance my work section based on...')}
            >
              Enhance my work section based on...
            </HintItem>
          </HintsWrapper>
          <Actions>
            <button
              disabled={isLoading}
              type="button"
              onClick={handleModifyHighlights}
              className={`${isLoading || promptText.length < 1 ? 'disabled' : ''} btn-primary`}
            >
              Update Resume
            </button>
          </Actions>
        </PromptWrapper>
      </Modal>
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

const PromptWrapper = styled.div`
    min-width: 450px;
    padding: 20px;
    border-radius: 10px;
    background: #fff;
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 5px 8px;
    box-sizing: border-box;
    resize: none;
    min-height: 200px;
    outline: 0;
    border-radius: 4px;
    font-size: 16px;
    border: 1px solid #cbcbcb;

    &:active {
        border-color: ${colors.HanPurple};
    }
`;

const HintsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 0 10px;
    max-width: 450px;
`;

const HintSectionTitle = styled.h3`
    padding-bottom: 2px;
    font-weight: 500;
`;

const HintItem = styled.div`
    background-color: ${colors.GhostWhite};
    border: 1px solid ${colors.LightLavender};
    cursor: pointer;
    padding: 10px;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    white-space: pre;
    overflow: hidden;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      height: 100%;
      width: 50px;
      background-image: linear-gradient(to left,rgba(255,255,255,1),rgba(255,255,255,0.9),rgba(255,255,255,0.7),rgba(255,255,255,0));
      pointer-events: none;
      right: 0;
      top: 0;
      bottom: 0;
    }

    &:hover {
      background: ${colors.LightLavender};
      color: ${colors.HanPurple};
    }
`;

const Actions = styled.div`
    padding-top: 20px;
    text-align: right;

    button.disabled {
      pointer-events: none;
      opacity: 0.6;
    }
`;

export default Experience;
