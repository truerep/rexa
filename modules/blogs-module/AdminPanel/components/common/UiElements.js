import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;

    h1 {
        font-size: 28px;

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }

    button {
        font-size: 16px;
        border-radius: 8px;

        &:hover {
            transform: unset;
        }

        @media (max-width: 768px) {
            font-size: 14px;

        }
    }
`;

export const HamBurger = styled.div`
    display: block;
    cursor: pointer;

    img {
        width: 30px;
        height: 30px;
    }

    @media (max-width: 768px) {
        display: block;
        img {
            width: 20px;
            height: 20px;
        }
    }
`;

export const Button = styled.button`
    background-color: #f2f2f2;
    border: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    padding: 10px 10px;
    border-radius: 5px;
    margin: 5px;
    transition: all 0.3s ease;
    width: 100px;
`;