import Header from "@/app/_components/header";
import Mobile from "./_components/mobile-bg";
import TabBar from "@/app/_components/tab-bar";
import { Suspense } from "react";
import Web from "./_components/web-bg";
import PopularList from "./_components/popular-list";
import LatestList from "./_components/latest-list";
import ViewList from "./_components/view-list";
import ListSkeleton from "./_components/list-skeleton";
import Link from "next/link";

const Main = () => {
    return (
        <div className="flex flex-col items-center mb-24">
            <Header />
            <Mobile />
            <div className="w-full pt-[100vh] lg:pt-2.5 lg:pl-36">
                <Web />
                <div className="flex justify-between items-baseline mt-4">
                    <div className="text-white font-bold font-Pretendard px-5 text-xl">
                        가장 인기있는 영상
                    </div>
                    <Link
                        href="/popular"
                        className="cursor-pointer text-white font-bold font-Pretendard px-5 text-sm"
                    >
                        더보기
                    </Link>
                </div>
                <div className="flex flex-nowrap gap-4 overflow-x-auto px-5">
                    <Suspense fallback={<ListSkeleton />}>
                        <PopularList />
                    </Suspense>
                </div>
                <div className="flex justify-between items-baseline mt-4">
                    <div className="text-white font-bold font-Pretendard px-5 text-xl">
                        최신 업로드 영상
                    </div>
                    <Link
                        href="/latest"
                        className="cursor-pointer text-white font-bold font-Pretendard px-5 text-sm"
                    >
                        더보기
                    </Link>
                </div>
                <div className="flex flex-nowrap gap-4 overflow-x-auto px-5">
                    <Suspense fallback={<ListSkeleton />}>
                        <LatestList />
                    </Suspense>
                </div>
                <div className="flex justify-between items-baseline mt-4">
                    <div className="text-white font-bold font-Pretendard px-5 text-xl">
                        조회수가 높은 영상
                    </div>
                    <Link
                        href="/view"
                        className="cursor-pointer text-white font-bold font-Pretendard px-5 text-sm"
                    >
                        더보기
                    </Link>
                </div>
                <div className="flex flex-nowrap gap-4 overflow-x-auto px-5">
                    <Suspense fallback={<ListSkeleton />}>
                        <ViewList />
                    </Suspense>
                </div>
            </div>
            <TabBar />
        </div>
    );
};

export default Main;
