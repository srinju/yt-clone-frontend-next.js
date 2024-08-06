import Image from "next/image";
import { Inter } from "next/font/google";
import {VideoCard} from "../components/VideoCard"
import { VideoGrid } from "@/components/VideoGrid";
import { AppBar } from "@/components/AppBar";
import { SideBar } from "@/components/SideBar";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return ( //we are hard coding the props here in real world things are not hard coded like this
    <main>
      <div>
        <AppBar/>
        <div className="flex">
        <SideBar/>
        <VideoGrid/>
      </div>
     </div> 
    </main> 
    
  );
}
