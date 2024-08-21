import React from 'react'

function Button({
    className = '',
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    children,
    ...props }
) {
    return (
        <button className={`w-full px-4 py-2 rounded-full ${type} ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button