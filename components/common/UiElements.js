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
    height: 100%;
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;

export const ItemSection = styled.div`
    border-bottom: 1px solid ${colors.LightLavender};
    padding: 15px 20px 0;

    &:last-child {
        border-bottom: 0;
    }

    @media (max-width: 576px) {
        padding: 15px;
    }
`;

export const ItemTitle = styled.h3`
    background: #fff;
    border-bottom: 1px solid ${colors.LightLavender};
    padding: 20px;
    font-size: 16px;
    gap: 10px;
    text-transform: capitalize;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;

    span {
        flex: 1;
    }

    @media (max-width: 576px) {
        padding: 15px;
        font-size: 14px;
    }
`;

export const ItemIcon = styled.img`
    width: 24px;
    height: 24px;
    object-fit: cover;
    flex-shrink: 0;

    @media (max-width: 768px) {
        display: none;
    }

    @media (max-width: 576px) {
        height: 14px!important;
        width: 14px!important;
    }
`;

export const CloseIcon = styled(ItemIcon)`
    display: none;
    width: 16px;
    height: 16px;
    filter: invert(24%) sepia(96%) saturate(7492%) hue-rotate(357deg) brightness(103%) contrast(104%);

    @media (max-width: 768px) {
        display: block;
    }
`;

export const ItemContent = styled.div`
    flex: 1;
    overflow: auto;
`;

export const InputGroup = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 18px;

    &.highlighted {
        // background: ${colors.Magnolia};

        input {
            background: ${colors.GhostWhite};
            border: 1px solid ${colors.LightLavender};
        }

        img {
            width: 14px;
            height: auto;
        }
    }
    img {
        width: 16px;
    }
    label {
        display: block;
        padding-bottom: 3px;
        text-transform: capitalize;
        font-size: 13px;
    }
    input, textarea {
        padding: 6px 8px;
        border-radius: 3px;
        outline: none;
        border: 1px solid #EEEEEE;
        width: 100%;
        font-size: 14px;
        line-height: 1.4;

        &::placeholder {
            text-transform: capitalize;
        }
    }
    textarea {
        resize: none;
        min-height: 100px;
        font-family: inherit;
    }

    @media (max-width: 576px) {
        margin-bottom: 14px;

        input, textarea {
            padding: 5px 7px;
        }
    }
`;

export const InfoLine = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: ${colors.ErrieBlack}
`;

export const AddBtn = styled.button`
    margin-left: 10px;
    transform: unset!important;

    img {
        width: 16px;
    }

    &.sub-type-add-btn {
        display: grid;
        place-items: center;
        margin: 0 auto 19px;
    }
`;

export const DeleteBtn = styled.button`
  margin-left: 10px;
  transform: unset!important;
  display: grid;
  place-items: center;
`;

export const AddNewSkillSection = styled.div`
  padding: 9px 0;
  border-top: 1px solid ${colors.LightLavender};
  background: ${colors.GhostWhite};
  text-align: center;
  margin-top: auto;

  button {
    transform: unset!important;
    background: #fff;
    border-color: ${colors.ErrieBlack};
    color: #000;
    font-size: 14px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    gap: 10px;
    padding: 8px 20px;

    img {
        width: 13px;
    }
  }
`;

export const AddNewBtn = styled.button`
  margin-left: 5px;
  transform: unset!important;
  display: grid;
  place-items: center;
  background: ${colors.GhostWhite};
  border-color: ${colors.LightLavender};
  padding: 0px 7px;
  height: 100%;

  img {
    height: 12px;
  }
`;

export const ReMatchBtn = styled(AddNewBtn)`

`;

export const SyncBtn = styled(AddNewBtn)`
  margin-left: 0;
  margin-right: 10px;
  border: 0;
  background: transparent;
  padding: 0;
  flex-shrink: 0;
`;

export const DarkBtn = styled.button`
  background: black;
  color: #fff;
  padding: 15px 35px;
  border-radius: 100px;
`;

export const SectionTitleLight = styled.h2`
    font-size: 56px;
    line-height: 64px;
    font-weight: 700;
    letter-spacing: -0.02em;
    font-family: Martel;

    span {
        opacity: 0.7;
        font-style: italic;
    }

    @media (max-width: 576px) {
        font-size: 30px;
    }
`;