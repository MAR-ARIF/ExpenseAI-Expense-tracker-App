function Card({
    header,
    body,
    footer,
    className,
    ...props
}){
    return (
        <div className={`bg-white w-80 p-5  border border-gray-200 rounded-xl`}>
            <p className="text-gray-600">{header}</p>
            <p className="text-2xl font-bold pt-1 pb-1">{body}</p>
            <p className="text-gray-600">{footer}</p>
    
        </div>
    )
}
export default Card