import React, { useState } from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    name: string;
    type: 'button' | 'submit' | 'reset';
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export function Button({ name, type, onMouseEnter, onMouseLeave, ...rest }: ButtonProps) {
    return (
        <>
            <button
                {...rest}
                type={type}
                className="w-44 py-2 px-1 border-2 rounded-lg text-white text-lg inter-regular transition-all
                hover:shadow-md hover:text-black hover:bg-white hover:font-bold hover:w-48"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {name}
            </button>
        </>
    );
}
