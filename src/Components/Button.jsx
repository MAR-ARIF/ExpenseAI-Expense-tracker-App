function Button ({
    type="button",
    children,
    className,
    ...props
}){
    return (
        <button className={`px-2 py-2 bg-indigo-500 text-white text-md w-full border-none rounded-xl mt-4 hover:scale-102 active:scale-100 hover:shadow-md transition-all duration-200 font-semibold ${className}`} {...props} type={type}>
            {children}
        </button>
    )
}
export default Button