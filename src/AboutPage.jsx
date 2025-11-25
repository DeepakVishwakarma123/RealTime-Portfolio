import { RoomProvider } from "@liveblocks/react";
import About from "./Components/About";

const AboutPage = () => {
    return (
        <RoomProvider id="about-room2">
            <About/>
        </RoomProvider>
    )
};

export default AboutPage;