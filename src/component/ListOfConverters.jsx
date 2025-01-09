import { Email, ImageOutlined, PictureAsPdf } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import SortByAlphaRoundedIcon from "@mui/icons-material/SortByAlphaRounded";
import DescriptionIcon from '@mui/icons-material/Description';
import LinkIcon from '@mui/icons-material/Link';
import React from 'react'
import { useProvider } from './PostProvider';


const CONVERTERS = [
    {
        id: 1,
        converter: 'Pdf to Word',
        icon: <IconButton className='flex w-full flex-row justify-between bg-none' sx={{
            color: '#0D9488',
            display: 'flex',
            justifyContent: 'space-between',
            ":hover": {
                background: 'none'
            }
        }}>
            <PictureAsPdf />
            <SortByAlphaRoundedIcon />
        </IconButton>
    },
    {
        id: 2,
        converter: 'Pdf to Excel',
        icon: <IconButton className='flex w-full flex-row justify-between bg-none' sx={{
            color: '#0D9488',
            display: 'flex',
            justifyContent: 'space-between',
            ":hover": {
                background: 'none'
            }
        }}>
            <PictureAsPdf />
            <DescriptionIcon />
        </IconButton>
    },
    {
        id: 3,
        converter: 'Image to Pdf',
        icon: <IconButton className='flex w-full flex-row justify-between bg-none' sx={{
            color: '#0D9488',
            display: 'flex',
            justifyContent: 'space-between',
            ":hover": {
                background: 'none'
            }
        }}>
            <ImageOutlined />
            <PictureAsPdf />
        </IconButton>
    },
    {
        id: 4,
        converter: 'Word to Pdf'
        , icon: <IconButton className='flex w-full flex-row justify-between bg-none' sx={{
            color: '#0D9488',
            display: 'flex',
            justifyContent: 'space-between',
            ":hover": {
                background: 'none'
            }
        }}>
            <SortByAlphaRoundedIcon />
            <PictureAsPdf />
        </IconButton>
    },
    {
        id: 5,
        converter: 'URL to Pdf'
        , icon: <IconButton className='flex w-full flex-row justify-between bg-none' sx={{
            color: '#0D9488',
            display: 'flex',
            justifyContent: 'space-between',
            ":hover": {
                background: 'none'
            }
        }}>
            <LinkIcon />
            <PictureAsPdf />
        </IconButton>
    },
    {
        id: 6,
        converter: 'Email to Pdf',
        icon: <IconButton className='flex w-full flex-row justify-between bg-none' sx={{
            color: '#0D9488',
            display: 'flex',
            justifyContent: 'space-between',
            ":hover": {
                background: 'none'
            }
        }}>
            <Email />
            <PictureAsPdf />
        </IconButton>
    },
]
function ListOfConverters() {
    const { convertFormat, dispatch } = useProvider();
    return (
        <div className='w-full h-[500px] bg-white'>
            <ul className='w-full flex flex-wrap px-4 py-12 gap-5 justify-center '>
                {CONVERTERS.map((converter) => (
                    <li className='relative w-[300px] h-[200px] rounded-lg bg-teal-950 my-8' key={converter.id}>
                        <div className="w-full absolute -top-8 flex justify-center">
                            <div className="absolute bg-white w-fit px-4 py-2 h-fit shadow-[0px_8px_24px_rgba(20,184,166,0.8)] rounded-xl flex flex-col gap-3 animate-bounce-scale-rotate cursor-pointer " onClick={() => dispatch({ type: 'convertFormat', payload: converter.converter })}>
                                <span>{converter.icon}</span>
                                <span className="text-teal-950">{converter.converter}</span>
                            </div>

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListOfConverters