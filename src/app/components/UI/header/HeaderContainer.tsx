import React from 'react';

const HeaderContainer: React.FC = () => {
    return (
        <header className="w-full absolute top-0 flex items-center justify-between p-4 text-white">
            <h1 className="text-2xl"><strong>HABIT</strong>AT</h1>
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
            </div>
        </header>
    );
};

export default HeaderContainer;