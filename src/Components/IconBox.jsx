function IconBoxWithText({Icon,text,number,color=
    "black",bgEnabled=false
})
{
    return (
        <div className="flex gap-2 rounded-2xl hover:bg-base-300  transition-all duration-300 cursor-pointer p-2">
            <div>
            <Icon color={color}/>
            </div>
             <div className="flex">
                <p>
                {text}:
                </p>
                <p className={`${color!="black"?"text-green-700":"text-black"}`}>{number}</p>
             </div>
        </div>
    )
}

export default IconBoxWithText