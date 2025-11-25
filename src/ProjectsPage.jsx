import { RoomProvider } from "@liveblocks/react";
import ProjectsPage from "./Components/ProjectsPage";

const Projects = () => {
    return (
        <RoomProvider id="projects-room3">
            <ProjectsPage/>
        </RoomProvider>
    )
};

export default Projects;