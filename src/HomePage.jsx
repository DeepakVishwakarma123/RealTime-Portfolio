import { RoomProvider } from "@liveblocks/react";
import WrappedHome from "./Components/Home";
import { LiveList, LiveObject } from "@liveblocks/client";

export default function HomePage() {
    return (
      <RoomProvider id="home-room1" 

      initialStorage={
        {
          Votes1:new LiveObject(
            {
              light:2,
              dark:0
            }
          )
        }
      }
    
  initialPresence={{reaction:{isAnimate:false,clickedId:null},vote:{hasVote:false}}}>
        <WrappedHome/>
      </RoomProvider>
    )
}
