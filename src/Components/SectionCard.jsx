import { Sparkles } from "lucide-react"

function SectionCard(
    { title,description,isSomeoneReading }
)
{
 return (
          <div className="grid place-content-center gap-6">
        <div className="border p-4 gap-5 grid rounded-2xl border-gray-400">
       <div className="grid w-dvh">
        {/* it has three rows */}
        <div className="flex justify-between">
          {/* heading  */}
          <div>
            <h1 className="text-2xl font-semibold">{title}</h1>
          </div>
          {/* reading indicator */}
          <div>
            <h3 className="flex justify-center items-center  gap-2">
              <Sparkles size={14}/>
              Some one's reading this
            </h3>
          </div>
        </div>
       </div>
       {/* description */}
       <div className="grid place-content-center">
        <div className="grid w-dvh">
          <div className="text-gray-400">
           {description}
          </div>
        </div>
       </div>
       {/* emoji button section */}
       <div className="grid place-content-center">
        <div className="grid w-dvh">
          <div className="flex">
          <div>
            <button className="btn btn-ghost">Add emoji mark</button>
          </div>
          {/* add emoji here */}
          <div className="flex justify-center items-center">
           <h1>emoji</h1>
          </div>
          </div>
        </div>
       </div>
       </div>
      </div>
 )
}

export default SectionCard