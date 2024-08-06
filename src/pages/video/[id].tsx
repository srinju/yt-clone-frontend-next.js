import { AppBar } from "@/components/AppBar";
import { VideoCardHorizontal } from "@/components/VideoCardHorizontal";
import { VIDEOS } from "@/videos";


export default function VideoPage(props:any) {
    return <div className="p4">
        <AppBar />
        <div className="grid gap-4 grid-cols-12 pt-5">
            <div className="col-span-12 md:col-span-9 sm:col-span-8">
                <img src={props.thumbImage} width={"100%"} height={"720px"} alt="playing video which you clicked dumbass"></img>
                <div className="text-2x1">
                  {props.title}
                </div>
            </div>
            <div className="col-span-12 md:col-span-3 sm:col-span-4">
                {VIDEOS.map(x => <VideoCardHorizontal video={x} />)}
            </div>
        </div>
    </div>
}