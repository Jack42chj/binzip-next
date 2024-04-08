import { Suspense } from "react";
import Header from "@/app/_components/header";
import Spinner from "@/app/_components/spinner";
import TabBar from "@/app/_components/tab-bar";
import LatestData from "./_components/latest-data";

const Latest = () => {
    return (
        <div className="flex flex-col items-center mb-24">
            <Header />
            <div className="w-full lg:pt-2 lg:pl-36">
                <div className="text-white font-bold ml-5 text-3xl">
                    최신 업로드 영상
                </div>
                <Suspense fallback={<Spinner />}>
                    <LatestData />
                </Suspense>
            </div>
            <TabBar />
        </div>
    );
};

export default Latest;
