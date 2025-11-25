import { useOthers } from "@liveblocks/react/suspense";

function GetCurretnTotalActiveUser()
{   
    let othersArray=useOthers()
    let totalActiveUserOnPage=othersArray.length
    return totalActiveUserOnPage
}

export default GetCurretnTotalActiveUser