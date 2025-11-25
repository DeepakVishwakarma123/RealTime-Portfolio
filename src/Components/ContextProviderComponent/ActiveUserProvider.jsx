import { useState } from "react"
import ActiveUserOnpage from "../../Context/context"

function ActiveUserProvider({children})
{
 const [ActiveUser,SetActiveUserOnpage]=useState(null)
return (
    <ActiveUserOnpage.Provider value={[ActiveUser,SetActiveUserOnpage]}>
        {children}
    </ActiveUserOnpage.Provider>    
)
}

export default ActiveUserProvider