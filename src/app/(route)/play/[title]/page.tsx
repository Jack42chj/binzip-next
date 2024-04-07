import { Suspense } from "react";
import Header from "@/app/_components/header";
import Spinner from "@/app/_components/spinner";
import TabBar from "@/app/_components/tab-bar";
import Player from "../_components/player";

const Play = ({ params }: { params: { title: string } }) => {
    const title = decodeURIComponent(params.title);
    return (
        <div className="flex flex-col items-center">
            <Header />
            <div className="w-full min-h-screen lg:pt-2.5 lg:pl-36">
                <Suspense fallback={<Spinner />}>
                    <Player title={title} />
                </Suspense>
            </div>
            <TabBar />
        </div>
    );
};

export default Play;
