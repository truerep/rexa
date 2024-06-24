import React from 'react';
import {
  InputGroup,
  Item, ItemContent, ItemIcon, ItemSection, ItemTitle, ReMatchBtn
} from '@/components/common/UiElements';

const showTextarea = ['summary'];

const BasicInfo = ({
  templateData,
  handleInputChange
}) => (
  templateData ? (
    <Item>
      <ItemTitle>
        <ItemIcon src="/assets/icons/basic-details-icon.svg" />
        <span>Basic Details</span>
        <ReMatchBtn
          type="button"
          className="btn-primary btn-outlined"
        >
          <img src="/assets/icons/sync-icon-purple.svg" alt="re-match" />
        </ReMatchBtn>
      </ItemTitle>
      <ItemContent>
        <ItemSection>
          {
          Object.entries(templateData).map((item) => (
            <InputGroup className="d-block">
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

export default BasicInfo;
