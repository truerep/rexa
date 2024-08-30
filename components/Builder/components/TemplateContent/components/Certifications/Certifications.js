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

const Certifications = ({
  templateData,
  addNewCertificationsSection,
  handleDeleteCertificationsSection,
  handleInputChange,
  handleClose
}) => (
  templateData ? (
    <Item>
      <ItemTitle>
        <CloseIcon onClick={handleClose} src="/assets/icons/close-icon-dark.svg" />
        <ItemIcon src="/assets/icons/certificate-icon.svg" />
        <span>Certifications</span>
        <AddNewBtn
          type="button"
          className="btn-primary btn-outlined"
          onClick={addNewCertificationsSection}
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
                    value={templateItem?.title}
                    placeholder="Title"
                    onChange={(e) => handleInputChange(idx, 'title', e.target.value)}
                  />
                  <DeleteBtn
                    type="button"
                    onClick={() => handleDeleteCertificationsSection(idx)}
                  >
                    <img src="/assets/icons/trash-icon-red.svg" alt="delete" />
                  </DeleteBtn>
                </InputGroup>
              </ItemWrapper>
              <ItemWrapper>
                <InputGroup>
                  <input
                    value={templateItem?.date}
                    placeholder="Date"
                    onChange={(e) => handleInputChange(idx, 'date', e.target.value)}
                  />
                </InputGroup>
              </ItemWrapper>
              <ItemWrapper>
                <InputGroup>
                  <input
                    value={templateItem?.awarder}
                    placeholder="Awarder"
                    onChange={(e) => handleInputChange(idx, 'awarder', e.target.value)}
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
            </ItemSection>
          )) : ('')
        }
      </ItemContent>
      <AddNewSkillSection>
        <button
          type="button"
          className="btn-primary btn-outlined"
          onClick={addNewCertificationsSection}
        >
          <img src="/assets/icons/plus-icon-dark.svg" alt="add" />
          <span>Certifications</span>
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

export default Certifications;
