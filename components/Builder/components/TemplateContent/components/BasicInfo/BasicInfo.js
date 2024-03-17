import React from 'react';
import styled from 'styled-components';
import {
  InputGroup,
  Item, ItemContent, ItemTitle
} from '@/components/common/UiElements';

const showTextarea = ['summary'];

const BasicInfo = ({
  templateData,
  handleInputChange
}) => (
  templateData ? (
    <Item>
      <ItemTitle>Basic Info</ItemTitle>
      <ItemContent>
        {
          Object.entries(templateData).map((item) => (
            <InputGroup className="d-block">
              <label htmlFor="#">{item[0]}</label>
              {
                showTextarea.includes(item[0]) ? (
                  <textarea
                    value={item[1]}
                    onChange={(e) => handleInputChange(item[0], e.target.value)}
                  />
                ) : (
                  <input
                    value={item[1]}
                    onChange={(e) => handleInputChange(item[0], e.target.value)}
                  />
                )
              }

            </InputGroup>
          ))
        }
      </ItemContent>
    </Item>
  ) : ('')
);

export default BasicInfo;
