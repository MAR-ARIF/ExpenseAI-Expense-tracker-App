import { forwardRef, useId } from "react"

const Input = forwardRef(function Input({
    label,
    type="text",
    placeholder="",
    className="",
    ...props
},ref){
    const id = useId();
    return(
        <div className="w-full">
            {label && <label
            htmlFor={id}
            className="inline-block mb-1 pl-1 font-semibold text-2xl">
                {label}
                </label>}
            <input
            id={id}
            ref={ref}
            className={`w-full border-2 border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-transparent shadow-sm transition-all duration-200 ${className}` }
            {...props}
            placeholder={placeholder}
            type={type}
            
            />
            
                
        
        </div>
    )
})
export default Input;