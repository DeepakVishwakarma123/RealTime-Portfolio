import {Eye, MessageSquare} from "lucide-react"

export default function ProjectCard({bgImageUrl,projectHeading,projectDescription,skillArray})
{   
    let customeUrl=`url("${bgImageUrl}")`
    return (
        <div className="grid  bg-base-300 w-dvh gap-5">
            {/* use skill array to iterate over the skills and show case in button component */}
         <div className="bg-cover rounded-t-2xl  h-40 flex justify-center items-center" style={
            {
                backgroundImage:customeUrl
            }
         }>
            <Eye/>
         </div>
            {/* second row starts here */}
         <div>
            <div>
                {projectHeading}
            </div>
            <div>
                {projectDescription}
            </div>
            {/* technology used itenrate over the skill array*/}
            <div className="flex">
                {/* here used an component instead of these repeated terms and iterate on it */}
                <button className="btn btn-ghost">WebGl</button>
                <button className="btn btn-ghost">Canvas</button>
                <button className="btn btn-ghost">Multiplayer</button>
            </div>
            {/* project reaction section  */}
            <div>
                <div>
                    <button className="btn btn-ghost"> Add reaction</button>
                </div>
            </div>
        </div>  
        {/* third row starts here acts as todo for user comments */}
        <div className="flex gap-2">
            {/* text box with button icon msg */}
         <div className="bg-amber-400">
            <input type="text" placeholder="Leve note.."></input>
         </div>
         <div>
            <MessageSquare/>
         </div>
        </div>
        </div>
    )
}