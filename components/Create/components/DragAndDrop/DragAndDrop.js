import React, {
  useState
} from 'react';

const DragAndDrop = ({handleResumeUpload}) => {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const newFile = e.dataTransfer.files[0];
    setFile(newFile);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        border: dragging ? '2px dashed #007bff' : '2px dashed #ccc',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer'
      }}
    >
      {file ? (
        <div>
          <p>
            File Name:
            {file.name}
          </p>
          <p>
            File Size:
            {file.size}
            {' '}
            bytes
          </p>
          <p>
            File Type:
            {file.type}
          </p>
          <button onClick={removeFile}>Remove File</button>
        </div>
      ) : (
        <div>
          <p>Drag & Drop your file here or</p>
          <input type="file" onChange={handleFileChange} />
        </div>
      )}
      <button onClick={() => handleResumeUpload(file)}>Generate</button>
    </div>
  );
};

export default DragAndDrop;
