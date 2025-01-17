import React, { useMemo } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import parse from 'html-react-parser';
import { DeleteBtn } from '@/components/common/UiElements';
import { Loader, Modal } from '@/components/common';

const CreateBlog = ({
  pageTitle,
  saveButtonTitle,
  removeThumbnailText,
  title,
  description,
  thumbnail,
  content,
  draft,
  setContent,
  handleSelectThumbnail,
  removeThumbnail,
  handleSetThumbnail,
  handleChanges,
  handlePublish,
  fileInputKey,
  loading,
  setImageUrls,
  handleDeleteBlog,
  showDeleteModal,
  handleDeleteModal,
  setShowDeleteModal
}) => {

  const TextEditor = useMemo(() => {
    return dynamic(() => import("./components/TextEditor"), {
      loading: () => <p>Loading...</p>,
      ssr: false,
    });
  }, []);

  return (
    loading ?
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper> : <Container>
        <Header>
          <Title>{pageTitle}</Title>
          {handleDeleteBlog && <DeleteBtn onClick={handleDeleteModal} className='btn-secondary'>
            Delete Blog
          </DeleteBtn>}
          <DraftSelect>
            <label>Is Draft</label>
            <select name="draft" value={draft} onChange={handleChanges}>
              <option value="false">no</option>
              <option value="true">yes</option>
            </select>
          </DraftSelect>
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
        {/* 
        Modal for deleting blog
      */}
        <Modal showModal={showDeleteModal} setShowModal={setShowDeleteModal}>
          <DeleteModalBody>
            <DeleteModalTitle>Delete Blog</DeleteModalTitle>
            <DeleteModalParagraph>Are you sure you want to delete the blog?</DeleteModalParagraph>
            <DeleteModalParagraph>This action cannot be undone.</DeleteModalParagraph>
            <DeleteModalButtonWrapper>
              <DeleteModalDeleteButton onClick={handleDeleteBlog}>Delete</DeleteModalDeleteButton>
              <DeleteModalButton className='btn-dark' onClick={handleDeleteModal}>Cancel</DeleteModalButton>
            </DeleteModalButtonWrapper>
          </DeleteModalBody>
        </Modal>
      </Container>
  );
};

const LoaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 90px 0 0;
    height: 80%;
`;

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

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
    }
`;

const DraftSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  select {
    padding: 5px 5px;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const Title = styled.h1`
    margin-bottom: 20px;

    @media (max-width: 768px) {
        text-align: center;
    }
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
  @media (max-width: 768px) {
    padding: 5px 10px !important;
  }
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

    @media (max-width: 768px) {
      img {
        width: 100%;
      }
    }
`;

const PreviewHTML = styled.div`
    margin-top: 20px;
    text-align: left;
    color: #666;
    font-size: 14px;

    @media (max-width: 768px) {
      word-wrap: break-word;
    }
`;

const DeleteModalBody = styled.div`
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

const DeleteModalTitle = styled.h2`
    margin-bottom: 20px;
`;

const DeleteModalParagraph = styled.p`
    margin-bottom: 20px;
`;

const DeleteModalButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const DeleteModalButton = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const DeleteModalDeleteButton = styled(DeleteModalButton)`
    background-color: #fff;
    color: #f00;

    &:hover {
        background-color: #f00;
        color: #fff;
    }
`;

export default CreateBlog;