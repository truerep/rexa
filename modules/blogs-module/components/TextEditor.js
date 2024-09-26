import React, { useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function TextEditor({ value, setValue }) {

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
        setValue(e)
    }

    return (
        <>
            <ReactQuill
                modules={modules}
                theme="snow"
                value={value}
                placeholder="Write something amazing..."
                onChange={handleTextChange}
                onChangeSelection={handleImageRemove}
            ></ReactQuill>
        </>
    );
}