import React, { useMemo } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import parse from 'html-react-parser';

const CreateBlog = ({
  pageTitle,
  saveButtonTitle,
  removeThumbnailText,
  title,
  description,
  thumbnail,
  content,
  setContent,
  handleSelectThumbnail,
  removeThumbnail,
  handleSetThumbnail,
  handleChanges,
  handlePublish,
  fileInputKey,
  loading,
  setImageUrls
}) => {

  const TextEditor = useMemo(() => {
    return dynamic(() => import("./components/TextEditor"), {
      loading: () => <p>Loading...</p>,
      ssr: false,
    });
  }, []);


  return (
    <Container>
      <Header>
        <Title>{pageTitle}</Title>
        <PublishButton onClick={handlePublish} className='btn-primary btn-outlined'>{saveButtonTitle}</PublishButton>
      </Header>
      <BlogTitle placeholder="Blog Title" value={title} onChange={handleChanges} name="title" />
      <BlogThumbnail onClick={handleSelectThumbnail}>
        <input type="file" style={{ display: 'none' }} className="file-input" key={fileInputKey} onChange={handleSetThumbnail} />
        {thumbnail ? <Thumbnail src={
          thumbnail instanceof File ? URL.createObjectURL(thumbnail) : thumbnail
        } alt="thumbnail" /> : <ThumbnailText>Upload Thumbnail</ThumbnailText>}
      </BlogThumbnail>
      {thumbnail && removeThumbnailText && <RemoveThumbnail onClick={removeThumbnail}>{removeThumbnailText}</RemoveThumbnail>}
      <BlogTitle placeholder="Blog Description" value={description} onChange={handleChanges} name="description" />
      <ContentWrapper>
        <TextEditor content={content} setContent={setContent} setImageUrls={setImageUrls} />
      </ContentWrapper>
      <PreviewWrapper>
        <PreviewTitle>Preview</PreviewTitle>
        <PreviewContent>{parse(content ?? "")}</PreviewContent>
        <PreviewHTML>{content}</PreviewHTML>
      </PreviewWrapper>
    </Container>
  );
};

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

const BlogThumbnail = styled.div`
    width: 100%;
    height: 200px;
    padding: 10px;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;

const Thumbnail = styled.img`
    width: 100%;
    height: 200px;
    object-fit: contain;
`;

const ThumbnailText = styled.p`
    color: #666;
`;

const RemoveThumbnail = styled.button`
    background-color: #f00;
    color: #fff;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
`;

const ContentWrapper = styled.div`
    width: 100%;
    margin-top: 20px;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    height: 500px;
    overflow-y: auto;
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

export default CreateBlog;