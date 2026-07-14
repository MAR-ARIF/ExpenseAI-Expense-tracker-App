function Card({
    header,
    body,
    footer,
    className,
    ...props
}){
    return (
        <div className="bg-white text-center md:text-left p-5 w-full border border-gray-200 rounded-2xl">
            <p className="text-gray-600">{header}</p>
            <p className={`text-2xl font-bold pt-1 pb-1 ${className}`}>{body}</p>
            <p className="text-gray-600">{footer}</p>
    
        </div>
    )
}
export default Card