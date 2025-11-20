import { Eye, Sparkles } from "lucide-react"
export default function About() {
  return (
    <div className="grid p-2 gap-6">
      {/* heading big started here */}
      <div className="grid place-content-center p-4">
        <div className="flex justify-center items-center p-4">
          <h1 className="text-5xl">About Me</h1>
        </div>
      </div>
      {/* reading coutn heading */}
        <div className="grid place-content-center p-4">
        <div className="flex justify-center items-center">
          <h1 className="text-xl text-gray-400 flex  gap-2 justify-center items-center"> <Eye/> 2 people are reading this page right now</h1>
        </div>
      </div>
{/*  introduction section */}
      <div className="grid place-content-center gap-6">
        <div className="border p-4 gap-5 grid rounded-2xl border-gray-400">
       <div className="grid w-dvh">
        {/* it has three rows */}
        <div className="flex justify-between">
          {/* heading  */}
          <div>
            <h1 className="text-2xl font-semibold">Introduction</h1>
          </div>
          {/* reading indicator */}
          <div>
            <h3 className="flex justify-center items-center  gap-2">
              <Sparkles size={14}/>
              Some one's reading this
            </h3>
          </div>
        </div>
       </div>
       {/* description */}
       <div className="grid place-content-center">
        <div className="grid w-dvh">
          <div className="text-gray-400">
            Hi! I'm a developer who loves pushing the boundaries of what's possible on the web. This portfolio is a testament to that — it's not just static content, it's a living, breathing multiplayer experience.
          </div>
        </div>
       </div>
       {/* emoji button section */}
       <div className="grid place-content-center">
        <div className="grid w-dvh">
          <div className="flex">
          <div>
            <button className="btn btn-ghost">Add emoji mark</button>
          </div>
          {/* add emoji here */}
          <div className="flex justify-center items-center">
           <h1>emoji</h1>
          </div>
          </div>
        </div>
       </div>
       </div>
      </div>

      {/* experience section */}
  <div className="grid place-content-center gap-6">
        <div className="border p-4 gap-5 grid rounded-2xl border-gray-400">
       <div className="grid w-dvh">
        {/* it has three rows */}
        <div className="flex justify-between">
          {/* heading  */}
          <div>
            <h1 className="text-2xl font-semibold">Experience</h1>
          </div>
          {/* reading indicator */}
          <div>
            <h3 className="flex justify-center items-center  gap-2">
              <Sparkles size={14}/>
              Some one's reading this
            </h3>
          </div>
        </div>
       </div>
       {/* description */}
       <div className="grid place-content-center">
        <div className="grid w-dvh">
          <div className="text-gray-400">
            With years of experience in building real-time applications, I've worked on everything from collaborative tools to interactive dashboards. I believe the web should be dynamic, social, and fun.
          </div>
        </div>
       </div>
       {/* emoji button section */}
       <div className="grid place-content-center">
        <div className="grid w-dvh">
          <div className="flex">
          <div>
            <button className="btn btn-ghost">Add emoji mark</button>
          </div>
          {/* add emoji here */}
          <div className="flex justify-center items-center">
           <h1>emoji</h1>
          </div>
          </div>
        </div>
       </div>
       </div>
      </div>

{/* skill section */}
        <div className="grid place-content-center gap-6">
        <div className="border p-4 gap-5 grid rounded-2xl border-gray-400">
       <div className="grid w-dvh">
        {/* it has three rows */}
        <div className="flex justify-between">
          {/* heading  */}
          <div>
            <h1 className="text-2xl font-semibold">Skills</h1>
          </div>
          {/* reading indicator */}
          <div>
            <h3 className="flex justify-center items-center  gap-2">
              <Sparkles size={14}/>
              Some one's reading this
            </h3>
          </div>
        </div>
       </div>
       {/* description */}
       <div className="grid place-content-center">
        <div className="grid w-dvh">
          <div className="text-gray-400">
            Real-time systems • React & TypeScript • WebSockets • Collaborative editing • UI/UX design • Performance optimization • Creative coding
          </div>
        </div>
       </div>
       {/* emoji button section */}
       <div className="grid place-content-center">
        <div className="grid w-dvh">
          <div className="flex">
          <div>
            <button className="btn btn-ghost">Add emoji mark</button>
          </div>
          {/* add emoji here */}
          <div className="flex justify-center items-center">
           <h1>emoji</h1>
          </div>
          </div>
        </div>
       </div>
       </div>
      </div>

{/* philosophy */}

  <div className="grid place-content-center gap-6">
        <div className="border p-4 gap-5 grid rounded-2xl border-gray-400">
       <div className="grid w-dvh">
        {/* it has three rows */}
        <div className="flex justify-between">
          {/* heading  */}
          <div>
            <h1 className="text-2xl font-semibold">Philosophy</h1>
          </div>
          {/* reading indicator */}
          <div>
            <h3 className="flex justify-center items-center  gap-2">
              <Sparkles size={14}/>
              Some one's reading this
            </h3>
          </div>
        </div>
       </div>
       {/* description */}
       <div className="grid place-content-center">
        <div className="grid w-dvh">
          <div className="text-gray-400">
I believe technology should create connections, not isolate. Every project I build aims to bring people together in unexpected ways. This portfolio is proof of that vision.
          </div>
        </div>
       </div>
       {/* emoji button section */}
       <div className="grid place-content-center">
        <div className="grid w-dvh">
          <div className="flex">
          <div>
            <button className="btn btn-ghost">Add emoji mark</button>
          </div>
          {/* add emoji here */}
          <div className="flex justify-center items-center">
           <h1>emoji</h1>
          </div>
          </div>
        </div>
       </div>
       </div>
      </div>
{/* hover over indicatior */}

  <div className="grid place-content-center">
   <div className="w-dvh h-24 flex rounded-2xl justify-center items-center  bg-base-300 text-gray-400">
       💡 Hover over sections to highlight them for all visitors. Add emoji marks to share your reactions!
   </div>
  </div>

     </div>
 )
      }
