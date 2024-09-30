import styled from "styled-components";

export const PageHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;

    h1 {
        font-size: 28px;
    }

    button {
        font-size: 16px;
        border-radius: 8px;

        &:hover {
            transform: unset;
        }
    }
`;