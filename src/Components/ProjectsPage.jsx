import PageBigHeading from "./PageBigHeading";
import SubDescription from "./SubDescripton";
import ProjectCard from "./ProjectCard";

export default function ProjectsPage() {
  return (
   <div className="grid p-2">
    <PageBigHeading bigText={"Projects"}/>
    <SubDescription subtext={"Hover over projects to see what others are viewing. Add reactions and notes!"}/>
    <div className="grid place-content-center">
    <div className="grid grid-cols-2 gap-10">
     <ProjectCard bgImageUrl={"https://images.unsplash.com/photo-1763246169636-4127600060b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"}/>
   <ProjectCard bgImageUrl={"https://images.unsplash.com/photo-1763246169636-4127600060b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"}/>
   <ProjectCard bgImageUrl={"https://images.unsplash.com/photo-1763246169636-4127600060b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"}/>
   <ProjectCard bgImageUrl={"https://images.unsplash.com/photo-1763246169636-4127600060b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"}/>
    </div>
    </div>
   </div>
  );
}
