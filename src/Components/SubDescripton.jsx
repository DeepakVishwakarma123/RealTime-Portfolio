import { Eye } from "lucide-react";

export default function SubDescription({subtext,isIcon=false})
{
    return (
        <div className="grid place-content-center p-4">
        <div className="flex justify-center items-center">
          <h1 className="text-xl text-center text-gray-400 flex  gap-2 justify-center items-center"> 
       {isIcon && <Eye/>} {subtext}
          </h1>
        </div>
      </div> 
    )
}