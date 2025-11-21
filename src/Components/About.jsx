import { Eye } from "lucide-react"
import InfoIndicator from "./InfoIndicator"
import SectionCard from "./SectionCard"
import PageBigHeading from "./PageBigHeading"
import SubDescription from "./SubDescripton"


export default function About() {
  return (
    <div className="grid p-2 gap-6">
       <PageBigHeading bigText={"About"}/>
       <SubDescription isIcon={true} subtext={"2 people are reading this page right now"}/>
      <SectionCard title={"Introduction"} description={"Hi! I'm a developer who loves pushing the boundaries of what's possible on the web. This portfolio is a testament to that — it's not just static content, it's a living, breathing multiplayer experience."}
        />
      <SectionCard title={"Experience"}
        description={"With years of experience in building real-time applications, I've worked on everything from collaborative tools to interactive dashboards. I believe the web should be dynamic, social, and fun."}/>
       <SectionCard title={"Skills"} 
       description={"Real-time systems • React & TypeScript • WebSockets • Collaborative editing • UI/UX design • Performance optimization • Creative coding"}/>

     <SectionCard title={"Philosophy"} 
     description={"I believe technology should create connections, not isolate. Every project I build aims to bring people together in unexpected ways. This portfolio is proof of that vision."}/>
    <InfoIndicator/>
     </div>
 )
      }
