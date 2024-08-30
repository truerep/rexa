import React from 'react';
import {
  CloseIcon,
  InputGroup,
  Item, ItemContent, ItemIcon, ItemSection, ItemTitle
} from '@/components/common/UiElements';

const showTextarea = ['summary'];

const AdditionalLinks = ({
  templateData,
  handleInputChange,
  handleClose
}) => (
  templateData ? (
    <Item>
      <ItemTitle>
        <CloseIcon onClick={handleClose} src="/assets/icons/close-icon-dark.svg" />
        <ItemIcon src="/assets/icons/link-icon.svg" />
        <span>Additional Links</span>
      </ItemTitle>
      <ItemContent>
        <ItemSection>
          {
          Object.entries(templateData).map((item, index) => (
            <InputGroup className="d-block" key={index}>
              {
                showTextarea.includes(item[0]) ? (
                  <textarea
                    value={item[1]}
                    placeholder={item[0]}
                    onChange={(e) => handleInputChange(item[0], e.target.value)}
                  />
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
  ) : ('')
);

export default AdditionalLinks;
