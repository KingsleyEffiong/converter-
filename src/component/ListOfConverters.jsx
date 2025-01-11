import React from 'react';
import {
    Email,
    ImageOutlined,
    PictureAsPdf,
    SortByAlphaRounded,
    Description,
    Link,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useProvider } from './PostProvider';

const CustomIconButton = ({ children }) => (
    <IconButton
        className="flex w-full flex-row justify-between bg-none"
        sx={{
            color: '#0D9488',
            display: 'flex',
            justifyContent: 'space-between',
            ':hover': {
                background: 'none',
            },
        }}
        aria-label="converter icon"
    >
        {children}
    </IconButton>
);

const CONVERTERS = [
    { id: 1, converter: 'Pdf to Word', endpoint: 'pdf-to-word', icon: <CustomIconButton><PictureAsPdf /><SortByAlphaRounded /></CustomIconButton> },
    { id: 2, converter: 'Pdf to Excel', endpoint: 'pdf-to-excel', icon: <CustomIconButton><PictureAsPdf /><Description /></CustomIconButton> },
    { id: 3, converter: 'Image to Pdf', endpoint: 'image-to-pdf', icon: <CustomIconButton><ImageOutlined /><PictureAsPdf /></CustomIconButton> },
    { id: 4, converter: 'Word to Pdf', endpoint: 'word-to-pdf', icon: <CustomIconButton><SortByAlphaRounded /><PictureAsPdf /></CustomIconButton> },
    { id: 5, converter: 'Excel to Pdf', endpoint: 'excel-to-pdf', icon: <CustomIconButton><Description /><PictureAsPdf /></CustomIconButton> },
];

function ListOfConverters() {
    const { convertFormat, dispatch } = useProvider();
    const isSelectedFormat = (format) => convertFormat === format;

    return (
        <div className="w-full h-[500px] bg-white">
            <ul className="w-full flex flex-wrap px-4 pt-12 gap-5 justify-center">
                {CONVERTERS.map((converter) => (
                    <li
                        className="relative w-[280px] h-[140px] rounded-lg bg-teal-950 my-8"
                        key={converter.id}
                    >
                        <div className="w-full absolute -top-8 flex justify-center">
                            <div
                                role="button"
                                tabIndex="0"
                                aria-label={`Select ${converter.converter}`}
                                className={`absolute bg-white w-fit px-4 py-2 h-fit shadow-[0px_8px_24px_rgba(20,184,166,0.8)] rounded-xl flex flex-col gap-3 cursor-pointer ${isSelectedFormat(converter.converter)
                                    ? 'animate-bounce'
                                    : 'animate-bounce-scale-rotate'
                                    }`}
                                onClick={() =>
                                    dispatch({
                                        type: 'convertFormat',
                                        payload: converter.converter, // Single selection logic
                                    })
                                }
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        dispatch({
                                            type: 'convertFormat',
                                            payload: converter.converter,
                                        });
                                    }
                                }}
                            >
                                <span>{converter.icon}</span>
                                <span className="text-teal-950">
                                    {converter.converter}
                                </span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListOfConverters;
