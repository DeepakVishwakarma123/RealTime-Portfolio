import { useEffect, useState } from "react"
import { UseTheme } from "../Hooks/UseContext";

function ProgressBar({darkVoteCount,lightVoteCount})
{   
  
  let width=50;
  let [defaultTheme,setActiveTheme]=UseTheme()
  if(darkVoteCount===lightVoteCount)0
  {
    width=50
  }
  if(darkVoteCount<lightVoteCount)
  { 
     width=width+10
     console.log(width);
     
     
  }
   if(lightVoteCount>darkVoteCount)
  {
    width=width-0.2
  }

 
  
  useEffect(
    () => {

  if(darkVoteCount>lightVoteCount)
  {  
    setActiveTheme("dark")
  }
  if(lightVoteCount>darkVoteCount)
  { 
    let random=["light","dark"]
    let num=Math.floor(Math.random()*random.length-0)
    if(num>1 || num<0)
    {
     num=0
    }
    setActiveTheme(random[num])
  }
  if(lightVoteCount===darkVoteCount)
  {
    setActiveTheme("light")
  }
    },[darkVoteCount,lightVoteCount]
  )


  return (

    <div  className={`bg-amber-600 h-10 transition-all duration-500`}
    style={{
        width:`${width}%`
    }}
    >
     
    </div>
  )
}

export default ProgressBar