import React, { useId } from 'react'

function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {

    const id = useId();
    return (
        <div className='flex align-middle'>
            {
                label && <label htmlFor={id} className='inline-block mt-2 pr-2'> {label} </label>
            }
            <input
                type={type}
                className={` px-1 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration=200
                    border border-gray-200 w-full ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
}

export default React.forwardRef(Input)

// forwardRef hook :- using useRef hook we can bind the element with ref attribute and access the value of given element but we can not passed down this ref to child component ,The forwardRef hook in React is used to pass a ref from a parent component to a child component.