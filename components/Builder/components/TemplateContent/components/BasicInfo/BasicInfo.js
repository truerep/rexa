import React from 'react';
import {
  CloseIcon,
  InputGroup,
  Item, ItemContent, ItemIcon, ItemSection, ItemTitle, ReMatchBtn, SyncBtn
} from '@/components/common/UiElements';
import { Modal } from '@/components/common';
import styled from 'styled-components';
import { colors } from '@/helpers';

const showTextarea = ['summary'];

const BasicInfo = ({
  showPromptModal,
  setShowPromptModal,
  promptText,
  setPromptText,
  isLoading,
  handleModifySummary,
  templateData,
  handleInputChange,
  handleClose
}) => (
  templateData ? (
    <>
      <Item>
        <ItemTitle>
          <CloseIcon onClick={handleClose} src="/assets/icons/close-icon-dark.svg" />
          <ItemIcon src="/assets/icons/basic-details-icon.svg" />
          <span>Basic Details</span>
          {/* <ReMatchBtn
            type="button"
            className="btn-primary btn-outlined"
          >
            <img src="/assets/icons/sync-icon-purple.svg" alt="re-match" />
          </ReMatchBtn> */}
        </ItemTitle>
        <ItemContent>
          <ItemSection>
            {
            Object.entries(templateData).map((item) => (
              <InputGroup className="d-block">
                {
                  showTextarea.includes(item[0]) ? (
                    <InputGroup>
                      <SyncBtn
                        type="button"
                        className="btn-primary btn-outlined"
                        onClick={() => setShowPromptModal(true)}
                      >
                        <img src="/assets/icons/sync-icon-purple.svg" alt="add" />
                      </SyncBtn>
                      <textarea
                        value={item[1]}
                        placeholder={item[0]}
                        onChange={(e) => handleInputChange(item[0], e.target.value)}
                      />
                    </InputGroup>
                  ) : (
                    <input
                      value={item[1]}
                      placeholder={item[0]}
                      onChange={(e) => handleInputChange(item[0], e.target.value)}
                    />
                  )
                }
              </InputGroup>
            ))
          }
          </ItemSection>
        </ItemContent>
      </Item>
      <Modal
        showModal={showPromptModal}
        setShowModal={setShowPromptModal}
      >
        <PromptWrapper>
          <TextArea
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            placeholder="Ex. Modify my summary according on this Job Description..."
          />
          <HintsWrapper>
            <HintSectionTitle>Sample prompts</HintSectionTitle>
            <HintItem
              onClick={() => setPromptText('Modify my summary based on this Job Description... "[Paste Job Description here]"')}
            >
              Modify my summary based on this Job Description... "[Paste Job Description here]"
            </HintItem>
            <HintItem
              onClick={() => setPromptText('Enhance my summary section based on...')}
            >
              Enhance my summary section based on...
            </HintItem>
          </HintsWrapper>
          <Actions>
            <button
              disabled={isLoading}
              type="button"
              onClick={handleModifySummary}
              className={`${isLoading || promptText.length < 1 ? 'disabled' : ''} btn-primary`}
            >
              Update Resume
            </button>
          </Actions>
        </PromptWrapper>
      </Modal>
    </>
  ) : ('')
);

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

export default BasicInfo;
