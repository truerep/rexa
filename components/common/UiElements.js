import styled from 'styled-components';
import {
  colors
} from '@/helpers';

export const Item = styled.div`
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid #eeeeee;
    max-height: 400px;
    overflow: auto;

    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;

export const ItemTitle = styled.h3`
    background: #f7f7f7;
    padding: 5px 10px;
    text-transform: capitalize;
    position: sticky;
    top: 0;
`;

export const ItemContent = styled.div`
    padding: 5px 10px;
    
    &:not(:last-child) {
        border-bottom: 1px solid #ccc;
    }
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
