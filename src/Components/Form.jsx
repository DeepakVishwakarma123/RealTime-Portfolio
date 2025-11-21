import { Send } from "lucide-react"

function Form()
{
return (
    <div className="grid  gap-2 border border-base-300 rounded-2xl p-4">

        {/* heading */}
        <div>
            <h1 className="text-3xl"> Send a Message</h1>
        </div>

        <div className="grid gap-2">
      <label className="text-sm font-medium">Name</label>
      <input className="w-full p-3 rounded-lg bg-gray-100" />

         <label className="text-sm font-medium">Email</label>
      <input className="w-full p-3 rounded-lg bg-gray-100" />

      <label className="text-sm font-medium">Message</label>
      <textarea className="w-full p-3 rounded-lg bg-gray-100" rows="4" />

      <button className="w-full py-3 rounded-lg bg-gray-600 text-white">
        Send Message
      </button>
      

        </div>


    </div>
)
}

export default Form