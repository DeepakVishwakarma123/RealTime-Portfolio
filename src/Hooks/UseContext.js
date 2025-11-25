import { useContext } from "react";
import ActiveUserOnpage from "../Context/context";
import { ThemeContext } from "../Context/context";
import { RandomNameContext } from "../Context/context";

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

function UseRandomName()
{
    const [randomName]=useContext(RandomNameContext)
    return randomName
}

export default UseActiveUserOnpage
export {UseTheme,UseRandomName}