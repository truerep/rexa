import React, { useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

const StyledReactQuill = styled(ReactQuill)`
    .ql-toolbar {
        position: sticky;
        top: 0;
        z-index: 1;
        background: white;
    }
    .ql-container {
        height: 500px;
        overflow-y: scroll;
    }
`;

export default function TextEditor({ content, setContent }) {

    const handleImageUpload = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
            const file = input.files[0];
            const formData = new FormData();
            formData.append('file', file);

            // Replace with your cloud upload URL
            const response = await fetch('YOUR_CLOUD_UPLOAD_URL', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            const imageUrl = data.url; // Adjust based on your response structure

            const quill = this.quill;
            const range = quill.getSelection();
            quill.insertEmbed(range.index, 'image', imageUrl);
        };
    };

    const handleImageRemove = (delta, oldDelta, source) => {
        if (source === 'user') {
            const ops = delta.ops;
            ops.forEach(op => {
                if (op.delete) {
                    const oldOps = oldDelta.ops;
                    oldOps.forEach(oldOp => {
                        if (oldOp.insert && oldOp.insert.image) {
                            const imageUrl = oldOp.insert.image;
                            // Replace with your cloud delete URL
                            fetch('YOUR_CLOUD_DELETE_URL', {
                                method: 'POST',
                                body: JSON.stringify({ url: imageUrl }),
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            });
                        }
                    });
                }
            });
        }
    };

    const modules = useMemo(() => {
        return {
            toolbar: {
                container: [
                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [{ align: ["right", "center", "justify"] }],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["link", "image"],
                ],
                handlers: {
                    image: handleImageUpload
                },
                clipboard: {
                    // toggle to add extra line breaks when pasting HTML:
                    matchVisual: false,
                }
            },
            history: {
                delay: 2000,
                maxStack: 500,
                userOnly: true
            }
        }
    }, []);

    const handleTextChange = (e) => {
        setContent(e);
    };

    return (
        <StyledReactQuill
            modules={modules}
            theme="snow"
            value={content}
            placeholder="Write something amazing..."
            onChange={handleTextChange}
            onChangeSelection={handleImageRemove}
        />
    );
}