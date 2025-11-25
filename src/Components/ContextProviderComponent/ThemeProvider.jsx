import { useEffect, useState } from "react"
import  {ThemeContext} from "../../Context/context"

function ThemeProvider({children})
{
 const [ActiveTheme,setActiveTheme]=useState("light")

 useEffect(
    () => {
        if(ActiveTheme==="dark")
            {
            document.querySelector("html").classList.remove("light")
            document.querySelector("html").classList.add(ActiveTheme)
            console.log("dark theme added here");
            
        }
        else{
            document.querySelector("html").classList.remove("dark")
            document.querySelector("html").classList.remove(ActiveTheme)
            
        }
    },[ActiveTheme]
 )
return (
    <ThemeContext.Provider value={[ActiveTheme,setActiveTheme]}>
        {children}
    </ThemeContext.Provider>    
)
}

export {ThemeProvider}