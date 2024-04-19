import { Suspense } from "react";
import Header from "@/app/_components/header";
import TabBar from "@/app/_components/tab-bar";
import FavoriteList from "./_components/favorite-list";
import Spinner from "@/app/_components/spinner";

const MyFavorite = () => {
    return (
        <div className="flex flex-col items-center font-Pretendard mb-24">
            <Header />
            <div className="max-w-[768px] w-full flex flex-col gap-5 px-5 ">
                <div className="text-white font-bold mt-5 text-4xl">
                    찜 관리
                </div>
                <Suspense fallback={<Spinner />}>
                    <FavoriteList />
                </Suspense>
            </div>
            <TabBar />
        </div>
    );
};

export default MyFavorite;
