import React, { useReducer, useEffect } from 'react';
import CreateBlog from './CreateBlog';

import { useRouter } from 'next/router';
import { HttpStatusCode } from 'axios';

import { getParticularBlogAdmin, createBlog, deleteBlog, deleteImage, updateBlog, uploadImage } from '@/api';

import toast from 'react-hot-toast';

const INITIAL_STATE = {
  title: '',
  description: '',
  thumbnail: null,
  content: '',
  draft: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_STATE_FROM_DATA':
      return {
        ...state,
        ...action.payload
      };
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value
      };
    case 'SET_THUMBNAIL':
      return {
        ...state,
        thumbnail: action.thumbnail
      };
    case 'REMOVE_THUMBNAIL':
      return {
        ...state,
        thumbnail: null
      };
    default:
      return state;
  }
};

const CreateBlogContainer = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [fileInputKey, setFileInputKey] = React.useState(Date.now());
  const [loading, setLoading] = React.useState(false);
  const [imageUrls, setImageUrls] = React.useState([]);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);

  const router = useRouter();

  useEffect(() => {
    if (router.query?.slug) {
      setStateFromData(router.query.slug);
    }
  }, [router]);

  const setStateFromData = async (slug) => {
    try {
      const res = await getParticularBlogAdmin(slug);
      if (res?.data) {
        const { title, description, image, content, draft } = res.data;
        dispatch({
          type: 'SET_STATE_FROM_DATA',
          payload: { title, description, thumbnail: image, content, draft }
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.error ?? 'Something went wrong!');
    }
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_FIELD', field: name, value });
  };

  const handleSetThumbnail = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg')) {
      dispatch({ type: 'SET_THUMBNAIL', thumbnail: file });
    } else {
      toast.error('Please select a valid image file (PNG, JPEG, JPG).');
    }
  };

  const handleSelectThumbnail = () => {
    document.querySelector('.file-input').click();
  };

  const removeThumbnail = () => {
    dispatch({ type: 'REMOVE_THUMBNAIL' });
    setFileInputKey(Date.now());
  };

  const checkImagesInContentAndDelete = async (content) => {
    // check if the content has any image tags
    const imageTags = content.match(/<img[^>]*>/g);

    const imageUrlsFromContent = [];

    // get the image URLs from the content
    imageTags?.forEach((tag) => {
      const src = tag.match(/src="([^"]*)"/)[1];
      imageUrlsFromContent.push(src);
    });

    // get the images that are not in the content
    const deleteImages = imageUrls.filter((url) => !imageUrlsFromContent.includes(url));

    // delete the images that are not in the content
    deleteImages.forEach(async (url) => {
      try {
        const segments = url.split('/');
        const imageId = segments[segments.length - 2];
        await deleteImage(imageId);
      } catch (error) {
        toast.error(error?.response?.data?.error ?? 'Something went wrong!');
      }
    });
  };

  const getImageIdsFromContent = async (content) => {
    const imageTags = content.match(/<img[^>]*>/g);

    const imageIds = [];

    imageTags?.forEach((tag) => {
      const src = tag.match(/src="([^"]*)"/)[1];
      const segments = src.split('/');
      const imageId = segments[segments.length - 2];
      imageIds.push(imageId);
    });

    return imageIds;
  };

  const handlePublish = async () => {
    try {
      if (!state.title || !state.description || !state.thumbnail || !state.content) {
        return toast.error('Please fill all the fields!');
      }
      setLoading(true);

      const imageUri = await uploadImage(state.thumbnail);

      await checkImagesInContentAndDelete(state.content);

      const imageIds = await getImageIdsFromContent(state.content);

      const res = await createBlog({
        title: state.title,
        description: state.description,
        image: imageUri,
        content: state.content,
        draft: state.draft === 'true',
        imageIds
      });

      if (res?.data) {
        setLoading(false);
        router.push('/admin-panel/blogs');
      }
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data?.error ?? 'Something went wrong!');
    }
  };

  const handleUpdate = async (slug) => {
    try {
      if (!state.title || !state.description || !state.thumbnail || !state.content) {
        return toast.error('Please fill all the fields!');
      }
      setLoading(true);

      await checkImagesInContentAndDelete(state.content);

      const imageIds = await getImageIdsFromContent(state.content);

      const res = await updateBlog(slug, {
        title: state.title,
        description: state.description,
        image: state.thumbnail,
        content: state.content,
        draft: state.draft === 'true',
        imageIds
      });

      if (res?.data) {
        setLoading(false);
        router.push(`/admin-panel/blogs`);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data?.error ?? 'Something went wrong!');
    }
  };

  const handleDeleteBlog = async (slug) => {
    try {
      setLoading(true);
      const segments = state.thumbnail.split('/');
      const imageId = segments[segments.length - 2];

      state.thumbnail && await deleteImage(imageId);

      const res = await deleteBlog(slug);

      if (res?.status === HttpStatusCode.NoContent) {
        router.push('/admin-panel/blogs');
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data?.error ?? 'Something went wrong!');
    }
  }

  const handleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  }

  return (
    <CreateBlog
      pageTitle={router.query?.slug ? 'Edit Blog' : 'Create New Blog'}
      saveButtonTitle={router.query?.slug ? 'Save Changes' : 'Publish'}
      removeThumbnailText={router.query?.slug ? null : 'Remove'}
      content={state.content}
      title={state.title}
      description={state.description}
      thumbnail={state.thumbnail}
      draft={state.draft}
      setContent={(content) => dispatch({ type: 'SET_FIELD', field: 'content', value: content })}
      handleChanges={handleChanges}
      handleSelectThumbnail={router.query?.slug ? null : handleSelectThumbnail}
      handleSetThumbnail={handleSetThumbnail}
      removeThumbnail={router.query?.slug ? null : removeThumbnail}
      handlePublish={router.query?.slug ? () => handleUpdate(router.query.slug) : handlePublish}
      fileInputKey={fileInputKey}
      loading={loading}
      setImageUrls={setImageUrls}
      handleDeleteBlog={router.query?.slug ? () => handleDeleteBlog(router.query.slug) : null}
      showDeleteModal={showDeleteModal}
      handleDeleteModal={handleDeleteModal}
      setShowDeleteModal={setShowDeleteModal}
    />
  );
};

export default CreateBlogContainer;