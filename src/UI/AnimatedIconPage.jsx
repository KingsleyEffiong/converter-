import React from "react";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import SortByAlphaRoundedIcon from "@mui/icons-material/SortByAlphaRounded";
import InsertChartRoundedIcon from "@mui/icons-material/InsertChartRounded";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";
import AttachEmailRoundedIcon from "@mui/icons-material/AttachEmailRounded";
import ReactTypingEffect from "react-typing-effect";
import { useProvider } from "../component/PostProvider";

const AnimatedIcon = ({ Icon }) => {
    return (
        <div className="relative">
            <Icon
                className="text-white animate-bounce-scale-rotate"
                sx={{ fontSize: 40 }}
            />
            <div className="absolute inset-0 rounded-full bg-white blur-md opacity-50"></div>
        </div>
    );
};

const AnimatedIconPage = () => {
    const { res } = useProvider()
    return (
        <>
            {!res && (
                <div
                    className={`bg-teal-950 h-screen ${res ? "w-full" : "w-1/2"
                        } text-white relative overflow-hidden flex flex-col justify-center items-center`}
                >
                    <h1 className="sm:text-4xl font-bold flex items-center space-x-4">
                        <ReactTypingEffect
                            text={["LET'S CONVERT ALL YOUR DOCUMENT"]}
                            speed={100}
                            eraseSpeed={50}
                            typingDelay={500}
                            eraseDelay={2000}
                            className="text-shadow-md"
                        />
                    </h1>
                    <div className="flex space-x-11 mt-7">
                        <AnimatedIcon Icon={SortByAlphaRoundedIcon} />
                        <AnimatedIcon Icon={InsertChartRoundedIcon} />
                        <AnimatedIcon Icon={ImageRoundedIcon} />
                        <AnimatedIcon Icon={AttachEmailRoundedIcon} />
                    </div>
                </div>
            )}
        </>
    );
};

export default AnimatedIconPage;
