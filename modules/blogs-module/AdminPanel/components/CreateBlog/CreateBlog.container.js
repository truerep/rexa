import React from 'react'
import CreateBlog from './CreateBlog'

const CreateBlogContainer = () => {
  const [state, setState] = React.useState({ title: '', tags: '', thumbnail: null, content: '' });

  const handleChanges = (e) => {
    if (e.target.name === 'tags') {
      const tags = e.target.value.split(',');
      setState({ ...state, tags });
      return;
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  }

  const handleSetThumbnail = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg')) {
      setState({ ...state, thumbnail: URL.createObjectURL(file) });
    } else {
      alert('Please select a valid image file (PNG, JPEG, JPG).');
    }
  };

  const handleSelectThumbnail = () => {
    document.querySelector('.file-input').click();
  };

  const removeThumbnail = () => {
    setState({ ...state, thumbnail: null });
  };

  const handlePublish = () => {
    console.log(state);
    console.log('Publishing...');
  }

  return (
    <CreateBlog
      content={state.content}
      title={state.title}
      tags={state.tags}
      thumbnail={state.thumbnail}
      setContent={(content) => setState({ ...state, content })}
      handleChanges={handleChanges}
      handleSelectThumbnail={handleSelectThumbnail}
      handleSetThumbnail={handleSetThumbnail}
      removeThumbnail={removeThumbnail}
      handlePublish={handlePublish}
    />
  )
}

export default CreateBlogContainer