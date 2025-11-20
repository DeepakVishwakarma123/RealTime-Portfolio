import { Users ,Sun,Moon,Zap,Check} from "lucide-react";
import React from "react";

function WrappedHome()
{
    return (
        <>
        <div className="grid gap-4 p-2">
        <div className="grid place-content-center">
        <div className="flex gap-2 bg-base-200 justify-center items-center rounded-full p-4">
            <Users/>
            <div className="size-8 rounded-[50%] bg-blue-400  animate-pulse flex justify-center items-center">
                <div className="size-4 rounded-[50%] bg-purple-800 animate-pulse"></div>
            </div>
            <p>5 people viewing this page</p>
        </div>
        </div>
        {/* big heading  */}
        <div className="grid place-content-center p-2">
            <div>
           <h1 class="text-5xl text-center sm:text-7xl  bg-linear-to-r from-black to-purple-600 bg-clip-text text-transparent">Welcome to the Future</h1>
            </div>
        </div>

        {/* sub heading  */}
        <div className="grid place-content-center">
            <div>
           <h2 className="text-center text-xl  max-w-dvh  text-gray-400">
            This isn't just a portfolio. It's a real-time multiplayer experience.
               Every cursor you see is a real person exploring right now.
            </h2> 
            </div>
        </div>

        {/* real time reaction */}
        <div className="grid place-content-center p-2">
            {/* center div with a three sub rows */}
            <div className="grid border border-gray-200 rounded-2xl gap-10 p-4 w-dvh">
                <div className="flex justify-center items-center p-2">
                    <h2 className="text-2xl font-medium">
                        Real-time Emoji Reactions
                    </h2>
                </div>
                <div className="flex justify-center items-center">
                    <p>Click an emoji and watch it appear on everyone's screen</p>
                </div>
                <div className="flex justify-center items-center gap-6 p-2">
                            <div className="bg-green-500 size-12"></div>
                             <div className="bg-red-500 size-12"></div>
                            <div className="bg-blue-500 size-12"></div>
                            <div className="bg-orange-500 size-12"></div>
                            <div className="bg-pink-500 size-12"></div>
                </div>
            </div>
        </div>

        {/* live vote theme count */}

          <div className="grid place-content-center p-2">
            {/* center div with a three sub rows */}
            <div className="grid border border-gray-200 rounded-2xl gap-10 p-4 w-dvh">
                <div className="flex justify-center items-center p-2">
                    <h2 className="text-2xl font-medium">
                       Theme Flash Voting
                    </h2>
                </div>
                <div className="flex justify-center items-center">
                    <p>Vote for your preferred theme — everyone sees a flash!</p>
                </div>
                <div className="grid gap-2">
                           <div className="grid grid-cols-2 gap-2">
                               <div className="grid gap-2 border border-gray-200 p-1 rounded-2xl">
                                   <div className="flex justify-center"><Sun/></div>
                                   <div className="flex justify-center">light</div>
                                   <div className="flex justify-center">14 votes</div>
                               </div>
                                <div className="grid gap-2 border border-gray-200 p-1 rounded-2xl">
                                   <div className="flex justify-center"><Moon/></div>
                                   <div className="flex justify-center">Dark</div>
                                   <div className="flex justify-center">14 votes</div>
                               </div>
                           </div>
                           <div className="bg-gray-400">
                            <div className="bg-orange-700 w-40">
                                2
                             </div>
                           </div>
                </div>
            </div>
        </div>
       
       {/* last section  of home */}

       <div className="grid  place-content-center p-2">
           <div className="w-dvh flex flex-col  gap-3 bg-[#EDE9F2] rounded-2xl p-4">
              <div className="p-2">
            <h2 className="flex gap-2 text-2xl">
                {/* electric icon */}
                <Zap/> 
                What makes this different?
                </h2>
          </div>
          <div>
            <p className="flex gap-2"> 
                <Check/>
                See live cursors of everyone browsing
            </p>
          </div>
           <div>
            <p className="flex gap-2"> 
                <Check/>
                See live cursors of everyone browsing
            </p>
          </div>
           <div>
            <p className="flex gap-2"> 
                <Check/>
                See live cursors of everyone browsing
            </p>
          </div>
           <div>
            <p className="flex gap-2"> 
                <Check/>
                See live cursors of everyone browsing
            </p>
          </div>
           <div>
            <p className="flex gap-2"> 
                <Check/>
                See live cursors of everyone browsing
            </p>
          </div>
           </div>
        </div>
        </div>
        </>
    )
}


// Export the main component (use WrappedHome to include responsive class)
export default WrappedHome;