import React from 'react';
import styled from 'styled-components';
import {
  InputGroup,
  Item, ItemContent, ItemTitle
} from '@/components/common/UiElements';

const showTextarea = ['summary'];

const Experience = ({
  templateData,
  addNewExperienceSection
}) => (
  templateData ? (
    <Item>
      <ItemTitle>
        Experience
        <button
          type="button"
          className="btn-primary btn-outlined"
          onClick={addNewExperienceSection}
        >
          Add New Section
        </button>
      </ItemTitle>
      <ItemContent>
        {
          templateData.length && templateData.map((templateItem) => (
            Object.entries(templateItem).map((item) => (
              <InputGroup>
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
            ))))
        }
        {console.log(templateData, '<---templateData')}
      </ItemContent>
    </Item>
  ) : ('')
);

const ItemWrapper = styled.div`
    
`;

export default Experience;
