import { RoomProvider } from "@liveblocks/react";
import ContactPage from "./Components/ContactPage";

const Contact = () => {
    return (
        <RoomProvider id="contact-room4">
            <ContactPage/>
        </RoomProvider>
    )
};

export default Contact;