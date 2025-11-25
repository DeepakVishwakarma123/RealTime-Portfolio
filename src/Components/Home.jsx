import { Users ,Sun,Moon,Zap,Check, AlertOctagon, Loader, Vote} from "lucide-react";
import SubDescription from "./SubDescripton";
import HomeCardHeading from "./HomeCardHeading";
import HomecardSubDescription from "./HomecardSubDescription";
import UseActiveUserOnpage, { UseTheme } from "../Hooks/UseContext";
// import GetCurretnTotalActiveUser from "../Hooks/GetCurrentTotalActiveUser";
import { useEffect, useState } from "react";
import { useOthers } from "@liveblocks/react";
import usePageRoom from "../Hooks/UseRoom";
import { useUpdateMyPresence } from "@liveblocks/react";
import { useStorage } from "@liveblocks/react";
import { useMutation } from "@liveblocks/react";
import { useSelf } from "@liveblocks/react";
import ProgressBar from "./ProgressBar";
import toast from "react-hot-toast";


function WrappedHome()
{   

    let [activeuserState,setactiveuser]=UseActiveUserOnpage()
    let [defaultTheme,setActiveTheme]=UseTheme()
    let [animate,setAnimate]=useState(false)
    const [floatingEmojis, setFloatingEmojis] = useState([

          { clickedId: "hot", emoji: "😃" },
  { clickedId: "got", emoji: "❤️‍🔥" },
  { clickedId: "test", emoji: "🔥" },
  { clickedId: "hello", emoji: "🥵" },
  { clickedId: "play", emoji: "🌶️" }
    ]);
    let others=useOthers()
    let updatePresence=useUpdateMyPresence()
    let Votes=useStorage((root) => root.Votes1 )
    let UserVoted=useStorage((root) => root.userList)
    let self=useSelf()
 

    
    //when i print this it showing me null why! if everythin is write 


    console.log("user voted array is",UserVoted);
    
    useEffect(
        () => {
            if(Votes)
            {   
                console.log("vots objec tnow is ",Votes);
                
                console.log(Votes.VotedBy);
                
            }
        },[Votes]
    )
    

     useEffect(
        () => {
        let TotalActiveUser=others.length
        setactiveuser(TotalActiveUser)
    },[others]
     )


      useEffect(() => {
        others.forEach(other => {
            const presence = other.presence;

            if (presence?.isAnimate && presence?.clickedId) {

                // play animation
                setFloatingEmojis(prev =>
                    prev.map(e =>
                        e.clickedId === presence.clickedId
                            ? { ...e, isAnimate: true }
                            : e
                    )
                );

                // ⭐ RESET after animation
                setTimeout(() => {
                    setFloatingEmojis(prev =>
                        prev.map(e =>
                            e.clickedId === presence.clickedId
                                ? { ...e, isAnimate: false }
                                : e
                        )
                    );
                }, 800);
            }
        });
    }, [others]);


   const mutateVotes = useMutation(({ storage }, clickedId,selfId) => {
  const Votes = storage.get("Votes1");
      let UserVotedArray=storage.get("userList")
  console.log("the cliekd id is insie usemuttion funcin",clickedId);
  
  if (clickedId === "light") {
    let getLightVal=Votes.get("light")
    if(getLightVal>=10)
    {
        Votes.set("light",2)
        toast.error("max limit reached 10")
        return
    }
    Votes.set("light", getLightVal+1);
    UserVotedArray.push(selfId)
    // setisLightClicked(true)


  } else {
    let getDarkVal=Votes.get("dark")
    if(getDarkVal>=10)
    {
        Votes.set("dark",0)
        toast.error("max limit reached 10")
        return
    }
    Votes.set("dark",getDarkVal+1);
     UserVotedArray.push(selfId)
    //  setisDarkClicked(true)

  }
}, []);




     function handleClick(clickedId) {  
        updatePresence({ isAnimate: true, clickedId });

        setFloatingEmojis(prev =>
            prev.map(e =>
                e.clickedId === clickedId ? { ...e, isAnimate: true } : e
            )
        );

        // ⭐ RESET
        setTimeout(() => {
            setFloatingEmojis(prev =>
                prev.map(e =>
                    e.clickedId === clickedId ? { ...e, isAnimate: false } : e
                )
            );
        }, 800);
    }

   async function mutateShareState(clickedId)
    {   
        
       
        let selfId=await self.connectionId
        console.log("my self id is",selfId);
        
        
        if(UserVoted.length===0)
         {
            mutateVotes(clickedId,selfId)
         }
         else
         {
            if(UserVoted.includes(selfId))
            {   
                toast.error("you already voted")
                return
            }
            else{
                mutateVotes(clickedId,selfId)
            }
         }
              

    }


    
      usePageRoom()

    return (
        <>
        <div className="grid gap-4 p-2 dark:bg-green-950 dark:text-orange-600">

            {/* make this component later */}
        <div className="grid place-content-center">
        <div className="flex gap-2 bg-base-200 justify-center items-center rounded-full p-4">
            <Users/>
            <div className="size-8 rounded-[50%] bg-blue-400  animate-pulse flex justify-center items-center">
                <div className="size-4 rounded-[50%] bg-purple-800 animate-pulse"></div>
            </div>
            <p>{activeuserState} people viewing this page</p>
        </div>
        </div>
        {/* big heading  */}
        <div className="grid place-content-center p-2">
            <div>
           <h1 class="text-5xl text-center sm:text-7xl  bg-linear-to-r from-black to-purple-600 bg-clip-text text-transparent">Welcome to the Future</h1>
            </div>
        </div>

        {/* sub heading  */}
       <SubDescription 
       subtext={"This isn't just a portfolio. It's a real-time multiplayer experience. Every cursor you see is a real person exploring right now."}/>

        {/* real time reaction */}
        <div className="grid place-content-center p-2">
            {/* center div with a three sub rows */}
            <div className="grid border border-gray-200 rounded-2xl gap-10 p-4 w-dvh">
                <HomeCardHeading HeadingCard={"Real-time Emoji Reactions"}/>
                <HomecardSubDescription subTextOfcard={"Click an emoji and watch it appear on everyone's screen"}/>

               <div className="flex justify-center items-center gap-6 p-2">
  {floatingEmojis.map((emojiObj, index) => (
    <div
      key={index}
      className="bg-green-500 size-12 text-3xl flex justify-center items-center rounded-2xl cursor-pointer"
      id={emojiObj.clickedId}
      onClick={() => handleClick(emojiObj.clickedId)}
    >
      <h1 className={`${emojiObj.isAnimate ? "animate-bounce" : ""}`}>
        {emojiObj.emoji}
      </h1>
    </div>
  ))}
</div>

            </div>
        </div>

        {/* live vote theme count */}

          <div className="grid place-content-center p-2">
            {/* center div with a three sub rows */}
            <div className="grid border border-gray-200 rounded-2xl gap-10 p-4 w-dvh">
                 <HomeCardHeading 
                 HeadingCard={"Theme Flash Voting"}/>
                 <HomecardSubDescription 
                 subTextOfcard={"Vote for your preferred theme — everyone sees a flash!"}/>
                <div className="grid gap-2">
                           <div className="grid grid-cols-2 gap-2">
                               <div className="grid gap-2 border border-gray-200 p-1 rounded-2xl" id="light"
                               onClick={
                                
                                
                                (e) =>
                                    
                                    {

                                        mutateShareState(e.currentTarget.id)

                                    }
                            
                            
                            }
                               >
                                   <div className="flex justify-center"><Sun/></div>
                                   <div className="flex justify-center">light</div>
                                   <div className="flex justify-center"> {Votes?Votes.light:<Loader className="animate-spin"/>}  votes</div>
                               </div>
                                <div className="grid gap-2 border border-gray-200 p-1 rounded-2xl" id="dark"
                                   onClick={(e) =>

                                    {
                                
                                      

                                        mutateShareState(e.currentTarget.id)
                                    }
                                    
                                    
                                }
                                >
                                   <div className="flex justify-center"><Moon/></div>
                                   <div className="flex justify-center">Dark</div>
                                   <div className="flex justify-center"> {Votes?Votes.dark:<Loader className="animate-spin"/>} votes</div>
                               </div>
                           </div>
                           <div className="bg-gray-400 h-10">
                            
                            {
                                
                                Votes?<ProgressBar darkVoteCount={Votes.dark} lightVoteCount={Votes.light}/>:"loading"
                            }
                             
                            

    
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