import styled from 'styled-components';
import {
  colors
} from '@/helpers';

export const SectionDark = styled.div`
    position: relative;
    padding: 60px 0 80px;
    background-color: ${colors.HanPurple};
    overflow: hidden;

    &::before, &::after {
        content: "";
        position: absolute;
        display: block;
        top: -70px;
        left: -70px;
        height: 200px;
        width: 200px;
        border-radius: 100%;
        background: transparent;
        border: 50px solid #fff;
        opacity: 0.05;
        pointer-events: none;
    }

    &::after {
        top: unset;
        left: unset;
        bottom: -140px;
        right: -140px;
        height: 300px;
        width: 300px;
    }

    @media (max-width: 1200px) {
        padding-left: 20px;
        padding-right: 20px;
    }

    @media (max-width: 576px) {
        padding: 30px 20px;
    }
`;

export const SectionTitle = styled.h2`
    color: #fff;
    font-size: 42px;
    text-align: center;
    padding-bottom: 10px;
    font-family: 'Martel';

    @media (max-width: 576px) {
        font-size: 32px;
    }
`;

export const SectionSubtitle = styled.h3`
    color: #fff;
    font-size: 16px;
    text-align: center;
    padding-bottom: 40px;
    opacity: 0.9;
`;

export const Item = styled.div`
    border: 1px solid #eeeeee;
    max-height: 400px;
    overflow: auto;

    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;

export const ItemTitle = styled.h3`
    background: ${colors.LightLavender};
    padding: 5px 10px;
    text-transform: capitalize;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ItemContent = styled.div`
    padding: 5px 10px;
    
    &:not(:last-child) {
        border-bottom: 1px solid #ccc;
    }
`;

export const InputGroup = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    &.highlighted {
        padding: 5px;
        border-radius: 5px;
        background: ${colors.Magnolia};
        border: 1px solid ${colors.Lavender};

        input {
            background-color: transparent;
            border-color: transparent;
        }
    }
    img {
        height: 22px;
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

export const InfoLine = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: ${colors.ErrieBlack}
`;
