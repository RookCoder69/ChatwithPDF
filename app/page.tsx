
import { Button } from "@/components/ui/button";
import{

  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
}from "lucide-react"
import Link from "next/link";


const feature = [{
name :"Store your pdf",
desciption: "Keep all your important PDF file securely and easily accesseble anytime anywhere",
icon:GlobeIcon

}]

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600  transition-all transition-duration: 300ms ">
<div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl transition-all transition-duration: 350ms; ">

  <div className="  flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl sm:text-center">
<h2 className="text-base font-semibold leading-7 text-indigo-600 " >Your Interactive Document Companion</h2>
<p className="mt-2 font-bold text-3xl tracking-tight text-gray-900 sm:text-6xl transition-all transition-duration: 300ms">

  Transform your pdf into Interactive Conversations
</p>
<p>
  Introducing {" "}
  <span className="font-bold text-indigo-600">Chat with PDF.</span>
<br/>
<br/>
Upload your document, and our chatbot will answer your questions, summarize content, and answer all your Qs.Ideal for everyone,
<span className="text-indigo-600">Chat with PDF</span>{" "}
turns static document into {" "}
<span className="font-bold">dynamic converstions</span>
enhancing procuctivity 10x fold effiortlessly. 
</p>
</div>


<Button asChild className="mt-10">

  <Link href="/dashboard">Get Started</Link>
</Button>
  </div>
</div>

    </main>
        
  );
}
