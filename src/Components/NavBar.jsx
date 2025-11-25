import { Users } from "lucide-react"
import { Menu } from "lucide-react"
import "./MenuToggle.css"
import { useRef, useState } from "react"
import {Link,NavLink} from "react-router-dom"
import UseActiveUserOnpage from "../Hooks/UseContext"
import { Loader2 } from "lucide-react"
import { UseRandomName } from "../Hooks/UseContext"

function NavBar()
{

const ref=useRef()
let [activeuserState,setactiveuser]=UseActiveUserOnpage()
let randomName=UseRandomName()
return (
    <>
    <nav className="flex justify-between p-4 sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-2 border-base-300 border-l-0 border-r-0">
    <button className="btn-ghost lg:hidden" onClick={
        () =>
            {ref.current.classList.toggle("menutoggle");
            }}>
            <Menu/>
        </button>
         <ul  className="lg:flex gap-6 hidden  lg:static lg:right-0">
           <li className="hover:bg-base-300 text-center flex justify-center items-center w-28  rounded-2xl h-12"><NavLink to={"/home"}>Home</NavLink></li>
           <li  className="hover:bg-base-300 text-center flex justify-center items-center w-28  rounded-2xl h-12"><NavLink to={"/about"}>About</NavLink></li>
           <li  className="hover:bg-base-300 text-center flex justify-center items-center w-28  rounded-2xl h-12"><NavLink to={"/profile"}>Projects</NavLink></li>
           <li  className="hover:bg-base-300 text-center flex justify-center items-center w-28  rounded-2xl h-12"><NavLink to={"/home"}>Funzone</NavLink></li>
           <li  className="hover:bg-base-300 text-center flex justify-center items-center w-28  rounded-2xl h-12"><NavLink to={"/contact"}>Contact</NavLink></li>
         </ul>
        <div className="flex gap-4  justify-center items-center">
            <div className="flex justify-center items-center gap-2 bg-base-300 w-16 rounded-full p-2">
            <Users col size={18} strokeWidth={1.2}/>
             <p>
                {activeuserState?activeuserState:<Loader2 className="animate animate-spin"/>}
             </p>
            </div>
            <div>
                <p>{randomName}</p>
            </div>
        </div>
    </nav>
     <ul ref={ref}   id="menubar" className="w-full   max-h-0 opacity-0  transition-all duration-700 bg-base-200  lg:hidden">
           <li className="hover:bg-base-300 text-center flex justify-center items-center w-28  rounded-2xl h-12"><a href="">Home</a></li>
           <li  className="hover:bg-base-300 text-center flex justify-center items-center w-28  rounded-2xl h-12"><a href="">About</a></li>
           <li  className="hover:bg-base-300 text-center flex justify-center items-center w-28  rounded-2xl h-12"><a href="">Projects</a></li>
           <li  className="hover:bg-base-300 text-center flex justify-center items-center w-28  rounded-2xl h-12"><a href="">Funzone</a></li>
           <li  className="hover:bg-base-300 text-center flex justify-center items-center w-28  rounded-2xl h-12"><a href="">Contact</a></li>
         </ul>
            </>
)
}

export default NavBar