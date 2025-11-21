import Link from "./Link";
import { GitBranch,MailIcon,X,HandshakeIcon } from "lucide-react";
export default function PersonalLink()
{
return (
    <div className="grid gap-5  p-2">
    <Link PlatFormIcon={GitBranch} PlatFormLink={"https://github.com/DeepakVishwakarma123"} platFormText={"github"}/>
    <Link PlatFormIcon={MailIcon} PlatFormLink={"https://github.com/DeepakVishwakarma123"} platFormText={"hello@example.com"}/>
    <Link PlatFormIcon={X} PlatFormLink={"https://x.com/deepak__iloosed"} platFormText={"Twitter"}/>
    <Link PlatFormIcon={HandshakeIcon} PlatFormLink={"https://peerlist.io/consistency"} platFormText={"Peerlist"}/>
    </div>
)
}