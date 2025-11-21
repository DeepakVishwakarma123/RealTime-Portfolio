import PageBigHeading from "./PageBigHeading";
import SubDescription from "./SubDescripton";
import ProjectCard from "./ProjectCard";

export default function ProjectsPage() {
  return (
   <div className="grid p-2 gap-2.5">
    <PageBigHeading bigText={"Projects"}/>
    <SubDescription subtext={"Hover over projects to see what others are viewing. Add reactions and notes!"}/>
    <div className="grid place-content-center">
    <div className="grid sm:grid-cols-2 gap-10">
      <ProjectCard 
      bgImageUrl={"https://images.unsplash.com/photo-1763386840769-8484a2a02442?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"}
      projectHeading={"Real-time Collaboration Tool"}
      projectDescription={"A multiplayer whiteboard with live cursors, drawing sync, and chat"}
      />
       <ProjectCard 
      bgImageUrl={"https://images.unsplash.com/photo-1762559046700-eb451387e1ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"}
      projectHeading={"Real-time Collaboration Tool"}
      projectDescription={"A multiplayer whiteboard with live cursors, drawing sync, and chat"}
      />
       <ProjectCard 
      bgImageUrl={"https://images.unsplash.com/photo-1763284098096-85d5d31e55dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D"}
      projectHeading={"Real-time Collaboration Tool"}
      projectDescription={"A multiplayer whiteboard with live cursors, drawing sync, and chat"}
      />
       <ProjectCard 
      bgImageUrl={"https://media.istockphoto.com/id/1916736269/photo/fern-leaves.webp?a=1&b=1&s=612x612&w=0&k=20&c=lhIXNy-L948IV7B_4Y04a9j-nGp6eNGsctGlxTLGnvQ="}
      projectHeading={"Real-time Collaboration Tool"}
      projectDescription={"A multiplayer whiteboard with live cursors, drawing sync, and chat"}
      />
    </div>
    </div>
   </div>
  );
}
