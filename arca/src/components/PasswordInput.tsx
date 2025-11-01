'use client'
import React, { useState } from "react";
import { Input } from "@/components/ui/Input";

interface PasswordInputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {}

export const PasswordInput = React.forwardRef<
    HTMLInputElement,
    PasswordInputProps
 >(({ className, ...props }, ref) => {
     const [showPassword, setShowPassword] = useState(false);
     const toggleVisibility = () => {
         setShowPassword((prev) => !prev);
     }
    return (
        <div className="relative">
            <Input ref={ref} type={showPassword ? 'text' : 'password'} className={className}
            {...props} />
            <button type="button" onClick={toggleVisibility} aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
             className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-200 focus:outline-none">
                {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox=" 0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className=" h-5 w-5">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                ): (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox=" 0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className=" h-5 w-5">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.981 18.75A7.981 7.981 0 0112 12c.532 0 1.052.052 1.558.157m-1.558-.157a7.965 7.065 0 00-4.885 2.502m1.077-.707c.075-.246.185-.487.319-.715m-1.442-.403a8.134 8.134 0 01-1.127-1.127ZM12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-1.293 0-2.523-.186-3.664-.52m-2.28-.853l-1.077 1.076M9.254 9.254L3.75 3.75M12 12c-1.357 0-2.507-.618-3.328-1.5M10.748 2.002v2.25m-4.665 1.5H1.5h2.25s.555.087 1.05.281m2.28-.853L2.036 12.322M9 17.25h-.008v.008H9v-.008z"/>
                    </svg>
                )}
            </button>
        </div>
    )
})
PasswordInput.displayName = 'PasswordInput';
