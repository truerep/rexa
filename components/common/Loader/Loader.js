import React from 'react';
import styled from 'styled-components';
import {
  colors
} from '@/helpers';

const Loader = () => (
  <Wrapper />
);

const Wrapper = styled.div`
    border: 4px solid ${colors.GhostWhite};
    border-top: 4px solid ${colors.HanPurple};
    border-radius: 50%;
    width: 70px;
    height: 70px;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
}
`;

export default Loader;
