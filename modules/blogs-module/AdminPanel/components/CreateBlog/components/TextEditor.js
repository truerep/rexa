import { uploadImage } from "@/api/Blogs";
import React, { useMemo, useRef } from "react";
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

export default function TextEditor({ content, setContent, setImageUrls }) {
    const reactQuillRef = useRef(null);
    const [uploading, setUploading] = React.useState(false);

    const handleImageUpload = async (quill) => {
        setUploading(true);
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
            const file = input.files ? input.files[0] : null;
            const range = quill.getSelection();

            if (file) {
                try {
                    const imageUrl = await uploadImage(file);
                    setImageUrls((prev) => [...prev, imageUrl]);
                    quill.insertEmbed(range.index, 'image', imageUrl);
                    setUploading(false);
                } catch (error) {
                    console.error('Image upload failed:', error);
                    setUploading(false);
                }
            }
        };
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
                    image: () => handleImageUpload(reactQuillRef.current.getEditor())
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
            ref={reactQuillRef}
            modules={modules}
            theme="snow"
            value={content}
            placeholder="Write something amazing..."
            onChange={handleTextChange}
            readOnly={uploading}
        />
    );
}