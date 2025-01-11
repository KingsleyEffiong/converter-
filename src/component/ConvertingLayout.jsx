import React, { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { Button, CircularProgress, Select, MenuItem } from "@mui/material";
import { Document, Packer, Paragraph } from "docx";
import ReactTypingEffect from "react-typing-effect";
import FETCHEDAPI from "../FETCHEDAPI";
import { useProvider } from "./PostProvider";

function ConvertingLayout() {
    const [file, setFile] = useState(null);
    const [downloadUrl, setDownloadUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [dragActive, setDragActive] = useState(false);

    const { convertFormat, dispatch } = useProvider();

    const uploadFile = async (file) => {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("https://api.pdf.co/v1/file/upload", {
            method: "POST",
            headers: {
                "x-api-key": "keffiong41@gmail.com_wx8Cfg0rE41AbMqFD7oLbXV6rnR9AeiCVIsOsAG0kPUCu6eLGGELR2hX4CcgqxMh", // Replace with actual API key
            },
            body: formData,
        });

        if (!response.ok) throw new Error("File upload failed");
        const data = await response.json();
        return data.url;
    };

    const convertFile = async (fileUrl, conversionType) => {
        const endpoint = FETCHEDAPI[conversionType];
        if (!endpoint) throw new Error("Unsupported conversion type");

        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "x-api-key": "keffiong41@gmail.com_wx8Cfg0rE41AbMqFD7oLbXV6rnR9AeiCVIsOsAG0kPUCu6eLGGELR2hX4CcgqxMh", // Replace with actual API key
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url: fileUrl }),
        });

        if (!response.ok) throw new Error("Conversion failed");
        const data = await response.json();
        if (data.error) throw new Error(data.message);
        return data.url;
    };

    const convertDocument = async () => {
        if (!file) {
            alert("Please select a file.");
            return;
        }

        setLoading(true);
        try {
            const uploadedFileUrl = await uploadFile(file);
            const convertedFileUrl = await convertFile(uploadedFileUrl, convertFormat);

            // Fetch the converted file content
            const response = await fetch(convertedFileUrl);
            const content = await response.text();

            // Create a .docx file (for example, when converting to Word)
            if (convertFormat === "pdf-to-word") {
                const doc = new Document({
                    sections: [
                        {
                            children: [new Paragraph(content)],
                        },
                    ],
                });
                const buffer = await Packer.toBlob(doc);
                setDownloadUrl(URL.createObjectURL(buffer));
            } else {
                // For other formats, set the download URL directly
                setDownloadUrl(convertedFileUrl);
            }
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

        if (event.dataTransfer.files && event.dataTransfer.files[0]) {
            setFile(event.dataTransfer.files[0]);
        }
    };

    return (
        <div className="w-[600px] h-[600px] bg-teal-800/70 backdrop-blur-xl shadow-2xl rounded-xl my-10 flex flex-col items-center justify-center px-5 py-7 relative">
            <div
                className={`w-full h-full flex flex-col px-4 py-2 shadow-[0px_8px_24px_rgba(20,184,166,0.8)] rounded-xl items-center justify-center border-2 ${dragActive ? "border-dashed border-white" : "border-dashed border-teal-400"
                    }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <Button
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                    sx={{
                        backgroundColor: "#14B8A6",
                        padding: "1rem",
                        fontSize: "1rem",
                        color: "#FFFFFF",
                        "&:hover": {
                            backgroundColor: "#0D9488",
                        },
                    }}
                >
                    Upload file
                    <input
                        type="file"
                        accept="application/pdf"
                        onChange={(event) => setFile(event.target.files[0])}
                        hidden
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
                onClick={convertDocument}
                disabled={loading || !file}
                sx={{
                    backgroundColor: "#0D9488",
                    color: "#FFFFFF",
                    marginTop: "1rem",
                    "&:hover": {
                        backgroundColor: "#065F46",
                    },
                }}
            >
                {loading ? <CircularProgress size={24} sx={{ color: "#FFFFFF" }} /> : "Convert"}
            </Button>

            {downloadUrl && (
                <a
                    href={downloadUrl}
                    download
                    className="mt-4 text-teal-300 underline"
                >
                    Download Converted File
                </a>
            )}
        </div>
    );
}

export default ConvertingLayout;
