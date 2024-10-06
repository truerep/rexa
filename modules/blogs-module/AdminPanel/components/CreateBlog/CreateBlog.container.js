import React, { useReducer, useEffect } from 'react';
import CreateBlog from './CreateBlog';
import { useRouter } from 'next/router';
import { getParticularBlog } from '@/api';
import { createBlog, updateBlog, uploadImage } from '@/api/Blogs';
import toast from 'react-hot-toast';

const INITIAL_STATE = {
  title: '',
  tags: '',
  thumbnail: null,
  content: '',
  pageTitle: 'Create New Blog',
  saveButtonTitle: 'Publish'
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_STATE_FROM_DATA':
      return {
        ...state,
        ...action.payload,
        tags: action.payload.tags.join(','),
        pageTitle: 'Edit Blog',
        saveButtonTitle: 'Save Changes'
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
  const router = useRouter();

  useEffect(() => {
    if (router.query?.slug) {
      setStateFromData(router.query.slug);
    }
  }, [router]);

  const setStateFromData = async (slug) => {
    const res = await getParticularBlog(slug);
    if (res?.data) {
      const { title, tags, image, content } = res.data;
      dispatch({
        type: 'SET_STATE_FROM_DATA',
        payload: { title, tags, thumbnail: image, content }
      });
    }
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    if (name === 'tags') {
      dispatch({ type: 'SET_FIELD', field: name, value: value.split(',') });
    } else {
      dispatch({ type: 'SET_FIELD', field: name, value });
    }
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

  const handlePublish = async () => {
    try {
      if (!state.title || !state.tags || !state.thumbnail || !state.content) {
        return toast.error('Please fill all the fields!');
      }

      const imageUri = await uploadImage(state.thumbnail);

      const res = await createBlog({
        title: state.title,
        tags: state.tags,
        image: imageUri,
        content: state.content
      });

      if (res?.data) {
        router.push('/admin-panel/blogs');
      }
    } catch (error) {
      toast.error(error?.response?.data?.error ?? 'Something went wrong!');
    }
  };

  const handleUpdate = async (slug) => {
    try {
      const res = await updateBlog(slug, {
        title: state.title,
        tags: state.tags,
        image: state.thumbnail,
        content: state.content
      });

      if (res?.data) {
        router.push(`/admin-panel/blogs/${slug}`);
      }
    } catch (error) {
      toast.error(error?.response?.data?.error ?? 'Something went wrong!');
    }

  };

  return (
    <CreateBlog
      pageTitle={state.pageTitle}
      saveButtonTitle={state.saveButtonTitle}
      content={state.content}
      title={state.title}
      tags={state.tags}
      thumbnail={state.thumbnail}
      setContent={(content) => dispatch({ type: 'SET_FIELD', field: 'content', value: content })}
      handleChanges={handleChanges}
      handleSelectThumbnail={handleSelectThumbnail}
      handleSetThumbnail={handleSetThumbnail}
      removeThumbnail={removeThumbnail}
      handlePublish={router.query?.slug ? () => handleUpdate(router.query.slug) : handlePublish}
      fileInputKey={fileInputKey}
    />
  );
};

export default CreateBlogContainer;