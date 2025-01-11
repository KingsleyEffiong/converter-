import React, { useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { Button, CircularProgress } from '@mui/material';
import { Document, Packer, Paragraph } from "docx"; // Import necessary docx classes
import ReactTypingEffect from 'react-typing-effect';
import { useProvider } from './PostProvider';

function ConvertingLayout() {
    const [file, setFile] = useState(null);
    const [downloadUrl, setDownloadUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [dragActive, setDragActive] = useState(false);
    const { convertFormat } = useProvider();

    async function convertWithPdfCo() {
        if (!file) {
            alert("Please select a file.");
            return;
        }

        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("file", file);

            const uploadResponse = await fetch("https://api.pdf.co/v1/file/upload", {
                method: "POST",
                headers: {
                    "x-api-key": "keffiong41@gmail.com_wx8Cfg0rE41AbMqFD7oLbXV6rnR9AeiCVIsOsAG0kPUCu6eLGGELR2hX4CcgqxMh", // Replace with your PDF.co API key
                },
                body: formData,
            });

            if (!uploadResponse.ok) throw new Error("File upload failed");

            const uploadData = await uploadResponse.json();
            const uploadedFileUrl = uploadData.url;

            // Step 2: Convert PDF to text
            const conversionResponse = await fetch(
                "https://api.pdf.co/v1/pdf/convert/to/text",
                {
                    method: "POST",
                    headers: {
                        "x-api-key": "keffiong41@gmail.com_wx8Cfg0rE41AbMqFD7oLbXV6rnR9AeiCVIsOsAG0kPUCu6eLGGELR2hX4CcgqxMh", // Replace with your PDF.co API key
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        url: uploadedFileUrl,
                        pages: "", // Convert all pages
                        unwrap: true, // Remove line breaks
                    }),
                }
            );

            const conversionData = await conversionResponse.json();

            if (conversionData.error) throw new Error(conversionData.message);

            const textFileUrl = conversionData.url;

            // Step 3: Fetch the text content
            const textResponse = await fetch(textFileUrl);
            const textContent = await textResponse.text();

            //    / / Step 4: Create a valid.docx file using the docx library
            const doc = new Document({
                sections: [
                    {
                        children: [
                            new Paragraph({
                                text: textContent,
                                spacing: { after: 200 }, // Adjust spacing between paragraphs
                            }),
                        ],
                    },
                ],
            });

            const buffer = await Packer.toBlob(doc);
            const wordDownloadUrl = URL.createObjectURL(buffer);

            setDownloadUrl(wordDownloadUrl);
        } catch (error) {
            alert(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        setDragActive(true);
    };

    const handleDragLeave = () => {
        setDragActive(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setDragActive(false);
        console.log(event)

        if (event.dataTransfer.files && event.dataTransfer.files[0]) {
            setFile(event.dataTransfer.files[0]);
        }
    };

    return (
        <div className="w-[600px] h-[600px] bg-teal-800/70 backdrop-blur-xl shadow-2xl rounded-xl my-10 flex flex-col items-center justify-center cursor-pointer px-5 py-7 relative">
            <div
                className={`w-full h-full flex flex-col px-4 py-2 shadow-[0px_8px_24px_rgba(20,184,166,0.8)] rounded-xl items-center justify-center border-2 ${dragActive ? 'border-dashed border-white' : 'border-dashed border-teal-400'} rounded-lg py-5 px-4`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <Button
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                    sx={{
                        backgroundColor: '#14B8A6',
                        padding: '1rem',
                        fontSize: '1rem',
                        color: '#FFFFFF',
                        '&:hover': {
                            backgroundColor: '#0D9488',
                        },
                    }}
                >
                    Upload file
                    <input
                        type="file"
                        accept="application/pdf"
                        onChange={(event) => setFile(event.target.files[0])}
                        style={{
                            position: 'absolute',
                            width: '1px',
                            height: '1px',
                            opacity: 0,
                            overflow: 'hidden',
                            clip: 'rect(0 0 0 0)',
                            whiteSpace: 'nowrap',
                            border: 0,
                        }}
                    />
                </Button>

                <h1 className="mt-6 text-2xl text-gray-200 font-medium text-center">
                    <ReactTypingEffect
                        text={["Drag and drop files here..."]}
                        speed={100}
                        eraseSpeed={50}
                        typingDelay={500}
                        eraseDelay={2000}
                    />

                </h1>

                {file && (
                    <p className="mt-4 text-gray-200 text-center">
                        Selected file: <strong>{file.name}</strong>
                    </p>
                )}
            </div>

            <Button
                variant="contained"
                startIcon={<CloudDownloadIcon />}
                onClick={convertWithPdfCo}
                disabled={loading || !file}
                sx={{
                    backgroundColor: '#0D9488',
                    color: '#FFFFFF',
                    marginTop: '1rem',
                    '&:hover': {
                        backgroundColor: '#065F46',
                    },
                }}
            >
                {loading ? <CircularProgress size={24} sx={{ color: '#FFFFFF' }} /> : convertFormat !== null ? convertFormat : 'Convert to word'}
            </Button>

            {downloadUrl && (
                <a
                    href={downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-teal-300 underline"
                >
                    Download Converted File
                </a>
            )}
        </div>
    );
}

export default ConvertingLayout;
