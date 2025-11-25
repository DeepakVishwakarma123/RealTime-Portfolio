import { useRoom } from "@liveblocks/react"
import { useEffect } from "react";
import toast from "react-hot-toast";

function usePageRoom()
{
let roomObj=useRoom()
useEffect(
    ()  =>
        {   
            let unsub=roomObj.subscribe("others",(
                others,event
            ) => {    
       if(event.type==="reset")
        {        
        toast.success("you joined the room")
        }
       
        
        if(event.type==="enter")
          {  
           toast.success("someone joined")
           
          }

      
      if(event.type=="leave")
        {
             console.log("why i invoked");
            toast.error("user leaved")
        }
     })

     return () => {unsub()}
    },[roomObj]
)
}

export default usePageRoom
