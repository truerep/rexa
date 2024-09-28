import React, { useMemo } from 'react'
import dynamic from "next/dynamic";
import styled from 'styled-components';


export default function Admin({ value, setValue }) {

    const TextEditor = useMemo(() => {
        return dynamic(() => import("../components/TextEditor"), {
            loading: () => <p>loading...</p>,
            ssr: false,
        });
    }, []);


    return (
        <Container>
            <TextEditor value={value} setValue={setValue} />
            <PreviewWrapper>
                <PreviewTitle>Preview</PreviewTitle>
                <PreviewContent dangerouslySetInnerHTML={{ __html: value }}></PreviewContent>
            </PreviewWrapper>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;

const PreviewWrapper = styled.div`
    margin-top: 20px;
    width: 100%;
    border: 1px solid #e1e1e1;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
    text-align: center;
`;

const PreviewTitle = styled.h2`
    margin-bottom: 20px;
`;

const PreviewContent = styled.div`
    margin-top: 20px;
    text-align: left;
`;

