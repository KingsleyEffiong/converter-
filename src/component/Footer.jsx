import React from "react";

function Footer() {
    return (
        <footer className="bg-teal-700 text-white py-2 w-full  fixed bottom-0">
            <div className="px-4 flex flex-row justify-between items-center space-y-2 h-auto md:space-y-0">
                {/*Name */}
                <div className="flex items-center space-x-2">
                    <span className="text-lg font-semibold">
                        MY CONVERTER
                    </span>
                </div>

                {/* Social Media */}
                <div className="flex space-x-4">
                    <a
                        href="https://x.com/your_developerr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-200 transition"
                    >
                        <i className="fab fa-twitter"></i> Twitter
                    </a>
                    <a
                        href="https://github.com/KingsleyEffiong"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-200 transition"
                    >
                        <i className="fab fa-github"></i> GitHub
                    </a>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-6 text-center text-sm border-t border-teal-500 pt-4">
                &copy; {new Date().getFullYear()} MY CONVERTER
                . All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
