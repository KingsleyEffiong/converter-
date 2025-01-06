import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
import SortByAlphaRoundedIcon from '@mui/icons-material/SortByAlphaRounded';
import InsertChartRoundedIcon from '@mui/icons-material/InsertChartRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import AttachEmailRoundedIcon from '@mui/icons-material/AttachEmailRounded';
import { PostProvider, useProvider } from '../component/PostProvider';
function AnimatedIconPage() {
    const { res } = useProvider();
    const getRandomPosition = () => {
        const x = Math.floor(Math.random() * 93); // Random position on x-axis (93% width)
        const y = Math.floor(Math.random() * 93); // Random position on y-axis (93% height)
        return { left: `${x}%`, top: `${y}%` };
    };
    const renderIcons = (icon, count) => {
        return Array.from({ length: count }).map((_, index) => (
            <div key={index} style={{ ...getRandomPosition() }} className="absolute">
                {icon}
            </div>
        ));
    };
    return (
        <>
            {!res && <div className={`bg-teal-950 h-screen ${res ? 'w-[100%]' : 'w-[50%]'} text-white relative overflow-hidden`}>
                {/* Duplicate icons and position them randomly */}
                {renderIcons(<PictureAsPdfRoundedIcon sx={{ fontSize: 40 }} />, 2)}
                {renderIcons(<SortByAlphaRoundedIcon sx={{ fontSize: 40 }} />, 2)}
                {renderIcons(<InsertChartRoundedIcon sx={{ fontSize: 40 }} />, 2)}
                {renderIcons(<ImageRoundedIcon sx={{ fontSize: 40 }} />, 2)}
                {renderIcons(<AttachEmailRoundedIcon sx={{ fontSize: 40 }} />, 2)}
            </div>}
        </>
    )
}

export default AnimatedIconPage