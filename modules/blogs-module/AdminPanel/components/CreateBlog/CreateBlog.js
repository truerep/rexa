import React, { useMemo } from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'

const CreateBlog = ({ value, setValue, handlePublish }) => {

  const TextEditor = useMemo(() => {
    return dynamic(() => import("./components/TextEditor"), {
      loading: () => <p>Loading...</p>,
      ssr: false,
    });
  }, []);


  return (
    <Container>
      <Header>
        <Title>Create New Blog</Title>
        <PublishButton onClick={handlePublish} className='btn-primary btn-outlined'>Publish</PublishButton>
      </Header>
      <BlogTitle placeholder="Blog Title" />
      <BlogThumbnail type="file" placeholder="Blog Thumbnail" />
      <Tags placeholder="Tags" />
      <ContentWrapper>
        <TextEditor value={value} setValue={setValue} />
      </ContentWrapper>
      <PreviewWrapper>
        <PreviewTitle>Preview</PreviewTitle>
        <PreviewContent dangerouslySetInnerHTML={{ __html: value }}></PreviewContent>
        <PreviewHTML>{value}</PreviewHTML>
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

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    margin-bottom: 20px;
`;

const BlogTitle = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    margin-top: 20px;

    &:focus {
        outline: none;
    }
`;

const BlogThumbnail = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    margin-top: 20px;
`;

const Tags = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    margin-top: 20px;

    &:focus {
        outline: none;
    }
`;

const ContentWrapper = styled.div`
    width: 100%;
    margin-top: 20px;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    height: 100%;
`;

const PublishButton = styled.button`
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
    min-height: 500px;
`;

const PreviewTitle = styled.h2`
    margin-bottom: 20px;
`;

const PreviewContent = styled.div`
    margin-top: 20px;
    text-align: left;
`;

const PreviewHTML = styled.div`
    margin-top: 20px;
    text-align: left;
    color: #666;
    font-size: 14px;
`;

export default CreateBlog