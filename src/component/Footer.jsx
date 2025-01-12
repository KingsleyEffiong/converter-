import React from "react";

function Footer() {
    return (
        <footer className="bg-teal-700 text-white py-6 w-full  fixed bottom-0">
            <div className="px-4 flex flex-row justify-between items-center space-y-4 md:space-y-0">
                {/* Logo and Name */}
                <div className="flex items-center space-x-2">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="h-10 w-10 rounded-full"
                    />
                    <span className="text-lg font-semibold">
                        MY CONVERTER
                    </span>
                </div>

                {/* Social Media */}
                <div className="flex space-x-4">
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-200 transition"
                    >
                        <i className="fab fa-twitter"></i> Twitter
                    </a>
                    <a
                        href="https://github.com"
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
