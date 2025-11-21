import {Eye, MessageSquare} from "lucide-react"

export default function ProjectCard({ bgImageUrl, projectHeading, projectDescription, skillArray, onAddReaction, onAddComment, onSendNote }) {
    const customeUrl = `url("${bgImageUrl}")`;

    return (
      <div className="grid  bg-white border-2 rounded-2xl group  hover:shadow-xs transition-all duration-300   shadow-gray-400  border-base-300">
        {/* firt row */}
        <div className="bg-purple-400 rounded-t-2xl h-52 flex justify-center items-center">
            <img src={bgImageUrl} alt="project image" className="rounded-t-2xl   object-cover" style={{width:"100%",height:"100%"}} />
        <Eye color="white" className="hidden  absolute group-hover:block"/>
        </div>
        

        {/* second row as a container */}
        <div className="grid p-4 gap-2">
        <div className="grid gap-3">
            <div className="text-2xl">
                {projectHeading}
            </div>
            <div>
                {projectDescription}
            </div>
            {/* iterate here */}
            <div className="flex gap-2">
<button className="btn btn-ghost bg-base-300">hello</button>
<button className="btn btn-ghost bg-base-300">hello</button>
<button className="btn btn-ghost bg-base-300">hello</button>
            </div>
        </div>
        {/* third row */}
        <div className="grid gap-2">
            {/* first row with a add reactino button and emoji */}
             <div className="flex  gap-2">
                <button className="btn btn-ghost">Add reaction</button>
                <div className="flex justify-center items-center">emoji..add</div>
             </div>
             {/* add second row here next time row of reationed emjies or compnent */}

   

             {/* third row */}
             <div className="flex  gap-2">
                <input type="text" placeholder="Type here" className="input" />
                <button className="btn btn-ghost bg-primary">
                <MessageSquare/>
                </button>
             </div>
        </div>
        </div>

        
      </div>
    );
}