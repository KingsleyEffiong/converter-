import React, { useState } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { IconButton } from '@mui/material';
function ConvertingLayout() {

    return (
        <div className='w-[900px] h-[400px] bg-white rounded-xl  mt-10 flex flex-col items-center justify-center'>
            <IconButton>

                <CloudUploadIcon className='text-teal-950' sx={{
                    fontSize: '6rem',
                    cursor: 'pointer',
                }}
                />
            </IconButton>
        </div>
    )
}

export default ConvertingLayout