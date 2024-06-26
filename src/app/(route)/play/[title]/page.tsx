import Header from "@/app/_components/header";
import TabBar from "@/app/_components/tab-bar";
import VideoPlayer from "../_components/video-player";

const Play = ({ params }: { params: { title: string } }) => {
    const keyword = decodeURIComponent(params.title);

    return (
        <div className="flex flex-col items-center font-Pretendard text-white">
            <Header />
            <div className="w-full min-h-screen lg:pt-2.5 lg:pl-36">
                <VideoPlayer keyword={keyword} />
            </div>
            <TabBar />
        </div>
    );
};

export default Play;
