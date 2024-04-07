import { Suspense } from "react";
import Header from "@/app/_components/header";
import Spinner from "@/app/_components/spinner";
import TabBar from "@/app/_components/tab-bar";
import MostViewList from "./_components/view-list";

const View = () => {
    return (
        <div className="flex flex-col items-center">
            <Header />
            <div className="w-full lg:pt-2 lg:pl-36">
                <div className="text-white font-bold ml-5 text-3xl">
                    조회수 높은 영상
                </div>
                <Suspense fallback={<Spinner />}>
                    <MostViewList />
                </Suspense>
            </div>
            <TabBar />
        </div>
    );
};

export default View;
