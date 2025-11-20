export default function SubDescription({subtext})
{
    return (
        <div className="grid place-content-center p-4">
        <div className="flex justify-center items-center">
          <h1 className="text-xl text-gray-400 flex  gap-2 justify-center items-center"> 
            {subtext}
          </h1>
        </div>
      </div> 
    )
}