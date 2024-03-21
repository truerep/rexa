import React from 'react';
import styled from 'styled-components';
import {
  InputGroup,
  Item, ItemContent, ItemTitle
} from '@/components/common/UiElements';
import DropdownToggle from '@/components/common/DropdownToggle';

const showTextarea = ['summary'];

const BasicInfo = ({
  templateData,
  handleInputChange,
  dropdownOpen,
  setDropdownOpen
}) => (
  templateData ? (
    <Item>
      <ItemTitle>
        <DropdownToggle dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} />
        Basic Info
      </ItemTitle>
      {dropdownOpen && (
      <ItemContent>
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
      </ItemContent>
      )}
    </Item>
  ) : ('')
);

export default BasicInfo;
