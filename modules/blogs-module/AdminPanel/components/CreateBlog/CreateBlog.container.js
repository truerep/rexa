import React from 'react'
import CreateBlog from './CreateBlog'

const CreateBlogContainer = () => {
  const [value, setValue] = React.useState("");

  return (
    <CreateBlog value={value} setValue={setValue} />
  )
}

export default CreateBlogContainer