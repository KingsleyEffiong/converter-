import { useState } from "react";
import Button from "@mui/material/Button";
import { LinearProgress } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function PdfToWord() {
    const [file, setFile] = useState(null);
    const [downloadUrl, setDownloadUrl] = useState("");
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const convertPDFToText = async () => {
        if (!file) {
            alert("Please select a file.");
            return;
        }

        setLoading(true);

        try {
            // Step 1: Upload the file to PDF.co
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

            // Step 4: Create a Word document
            const blob = new Blob([textContent], {
                type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            });
            const wordDownloadUrl = URL.createObjectURL(blob);

            setDownloadUrl(wordDownloadUrl);
        } catch (error) {
            alert(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <Button
                variant="contained"
                startIcon={<CloudUploadIcon />}
                component="label"
                disabled={loading}
            >
                Upload PDF
                <input
                    type="file"
                    accept="application/pdf"
                    hidden
                    onChange={handleFileChange}
                />
            </Button>

            <Button
                variant="contained"
                color="primary"
                onClick={convertPDFToText}
                disabled={loading || !file}
                style={{ marginLeft: "10px" }}
            >
                Convert to Word Document
            </Button>

            {loading && <LinearProgress style={{ marginTop: "20px" }} />}

            {downloadUrl && (
                <a
                    href={downloadUrl}
                    download="converted-document.docx"
                    style={{
                        marginTop: "20px",
                        display: "block",
                        textDecoration: "none",
                        color: "blue",
                    }}
                >
                    Download Converted Word Document
                </a>
            )}
        </div>
    );
}

export default PdfToWord;
