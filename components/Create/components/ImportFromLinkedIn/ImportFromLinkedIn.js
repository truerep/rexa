import { InfoLine } from '@/components/common/UiElements'
import React from 'react'
import styled from 'styled-components'

const ImportFromLinkedIn = () => {
  return (
    <Wrapper>
        <h2>Download Extension</h2>
        <h3>
            1. Click on the download link below to download the extension for your browser:
        </h3>
        <ul>
            <li>Chrome: <a target='_blank' href="https://chromewebstore.google.com/detail/ai-cv-pro/inkipncofmmbnabhkgoahpagmbakhjcb?authuser=1&hl=en">Download for Chrome</a></li>
        </ul>
        <h3>
            2. Use the Extension
        </h3>
        <ol>
            <li>Once installed, open your Linked In profile page</li>
            <li>Click the extension icon from your browser's toolbar to open it.</li>
            <li>Follow any on-screen instructions to set up and start using the extension.</li>
        </ol>
        <ImageWrapper>
            <img src="/assets/images/extension-ss.png" alt="Extension-screenshot" />
        </ImageWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    padding: 0 10px;

    h2 {
        font-size: 26px;
        padding-bottom: 10px;
    }

    h3 {
        font-size: 20px;
        padding-bottom: 10px;
    }

    p {
        line-height: 1.6;
        padding: 4px 0;
    }

    ul, ol {
        padding-left: 30px;
        padding-bottom: 10px;

        li {
            padding: 4px 0;
        }
    }

    img {
        width: 50%;
    }

    @media (max-width: 576px) {
        width: 100%;
    }
`;

const ImageWrapper = styled.div`
    text-align: center;
    margin: 20px 0;
`;

export default ImportFromLinkedIn