import { useContext } from "react";
import ActiveUserOnpage from "../Context/context";
import { ThemeContext } from "../Context/context";

function UseActiveUserOnpage()
{
let ActiveUserOnPageDataArray=useContext(ActiveUserOnpage)
return ActiveUserOnPageDataArray
}

function UseTheme()
{
    let CurrentThemeStatus=useContext(ThemeContext)
    return CurrentThemeStatus
}

export default UseActiveUserOnpage
export {UseTheme}