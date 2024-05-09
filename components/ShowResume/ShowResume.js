import React from 'react'
import {
 TemplateZone
} from '../Builder/components'
import styled from 'styled-components'

const ShowResume = () => (
    <Wrapper>
        <ResumeContainer>
            <ButtonWrapper className="print-none">
                <button onClick={() => window.print()} className="btn-primary">Download</button>
            </ButtonWrapper>
            <TemplateZone />
        </ResumeContainer>
    </Wrapper>
)

const Wrapper = styled.div`
`;

const ResumeContainer = styled.div`
    width: fit-content;
    margin: 0 auto;
`;

const ButtonWrapper = styled.div`
    padding: 30px 0 0;
    text-align: right;
`;

export default ShowResume