import styled from 'styled-components';
import {
  colors
} from '@/helpers';

export const Item = styled.div`
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid #eeeeee;

    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;

export const ItemTitle = styled.h3`
    background: #f7f7f7;
    padding: 5px 10px;
    text-transform: capitalize;
`;

export const ItemContent = styled.div`
    padding: 5px 10px;
`;

export const InputGroup = styled.div`
    &:not(:last-child) {
        margin-bottom: 8px;
    }
    label {
        display: block;
        padding-bottom: 3px;
        text-transform: capitalize;
        font-size: 13px;
    }
    input, textarea {
        padding: 5px;
        border-radius: 5px;
        outline: none;
        border: 1px solid #ccc;
        width: 100%;
        font-size: 14px;
        line-height: 1.4;
    }
    textarea {
        resize: none;
        min-height: 100px;
        font-family: inherit;
    }
`;
