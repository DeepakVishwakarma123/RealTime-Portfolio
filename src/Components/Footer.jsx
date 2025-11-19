import IconBoxWithText from "./IconBox"
import { Eye, TrendingUp, Users } from "lucide-react"
export default function Footer()
{
return (
    <div className="flex md:flex-row flex-col justify-between  p-1  border-l-0 border-r-0 border-b-2 border-black">
        <div className="flex gap-2 flex-wrap lg:flex-nowrap lg:gap-10 p-2">
           <IconBoxWithText Icon={TrendingUp} text="Total Today" number={255}/>
           <IconBoxWithText Icon={Users} color={"#32CD32"} text="Active" number={5}/>
        </div>
        <div></div>
        <div className="flex  lg:gap-16 flex-wrap lg:flex-nowrap p-2">
           <IconBoxWithText Icon={Eye}  text="Home" number={5} bgEnabled={true}/>
           <IconBoxWithText Icon={Eye}  text="Project" number={3} bgEnabled={true}/>
           <IconBoxWithText Icon={Eye}  text="Contact" number={2} bgEnabled={true}/>
        </div>
    </div>
)
}

