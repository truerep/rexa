import React from 'react'
import CreateBlog from './CreateBlog'

const CreateBlogContainer = () => {
  const [content, setContent] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [tags, setTags] = React.useState("");
  const [thumbnail, setThumbnail] = React.useState(null);

  const handleTags = (e) => {
    setTags(e.target.value);
  }

  return (
    <CreateBlog content={content} setContent={setContent} title={title} setTitle={setTitle} tags={tags} setTags={setTags} thumbnail={thumbnail} setThumbnail={setThumbnail} handleTags={handleTags} />
  )
}

export default CreateBlogContainer