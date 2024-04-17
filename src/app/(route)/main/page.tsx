import Link from "next/link";
import { Fragment, Suspense } from "react";
import Header from "@/app/_components/header";
import TabBar from "@/app/_components/tab-bar";
import Mobile from "./_components/mobile-bg";
import Web from "./_components/web-bg";
import List from "./_components/list";
import ListSkeleton from "./_components/list-skeleton";

const list = [
    { desc: "가장 인기 있는 영상", link: "/top/like", name: "like" },
    { desc: "최신 업로드 영상", link: "/top/createdAt", name: "createdAt" },
    { desc: "조회 수가 높은 영상", link: "/top/view", name: "view" },
];

export const revalidate = 0;

const Main = () => {
    return (
        <div className="flex flex-col items-center mb-24 font-Pretendard text-white">
            <Header />
            <Mobile />
            <div className="w-full pt-[100vh] lg:pt-2.5 lg:pl-36">
                <Web />
                {list.map((item) => (
                    <Fragment key={item.name}>
                        <div className="flex justify-between items-baseline mt-4">
                            <div className="font-bold px-5 text-xl">
                                {item.desc}
                            </div>
                            <Link
                                href={item.link}
                                className="cursor-pointer font-bold px-5 text-sm"
                            >
                                더보기
                            </Link>
                        </div>
                        <div className="flex flex-nowrap gap-4 overflow-x-auto px-5">
                            <Suspense fallback={<ListSkeleton />}>
                                <List keyword={item.name} />
                            </Suspense>
                        </div>
                    </Fragment>
                ))}
            </div>
            <TabBar />
        </div>
    );
};

export default Main;
