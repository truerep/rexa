import React from 'react';
import styled from 'styled-components';

const DropdownToggle = ({setDropdownOpen, dropdownOpen}) => (
  <DropDownBtn type="button" onClick={() => setDropdownOpen(!dropdownOpen)}>
    <img src="/assets/icons/down-arrow.png" alt="user" />
  </DropDownBtn>
);


const DropDownBtn = styled.button`
    transform: unset!important;

    img {
        height: 25px;
    }

    &.sub-type-add-btn {
        display: block;
        margin: 10px auto 20px;
    }
`

export default DropdownToggle;
