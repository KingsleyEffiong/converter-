import React, { useState } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { Button, IconButton, styled } from '@mui/material';
function ConvertingLayout() {
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    return (

        <div className="w-[600px] h-[1000px] bg-teal-800/70 backdrop-blur-xl shadow-2xl rounded-xl my-10 flex flex-col items-center justify-center cursor-pointer">
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                sx={{
                    backgroundColor: '#14B8A6', // Cyan accent
                    padding: '1rem',
                    fontSize: '1rem',
                    color: '#FFFFFF',
                    '&:hover': {
                        backgroundColor: '#0D9488', // Darker cyan
                    },
                }}
            >
                Upload files
                <input
                    type="file"
                    onChange={(event) => console.log(event.target.files)}
                    multiple
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
                Drag and drop files here...
            </h1>
        </div>

    )
}

export default ConvertingLayout