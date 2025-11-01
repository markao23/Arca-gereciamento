import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                ref={ref}
                className={`
                 appearance-none block w-full px-3 py-2 border border-gray-600 
                 rounded-md shadow-sm placeholder-gray-400 
                 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                 sm:text-sm bg-gray-700 text-white
                 ${className}
                `}
                {...props}
            />
        )
    });
Input.displayName = 'Input'