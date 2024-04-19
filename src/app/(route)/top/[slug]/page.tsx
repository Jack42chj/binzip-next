import { Suspense } from "react";
import Header from "@/app/_components/header";
import TabBar from "@/app/_components/tab-bar";
import Spinner from "@/app/_components/spinner";
import TopData from "../_components/top-data";

export const revalidate = 0;

const Top = ({ params }: { params: { slug: string } }) => {
    const keyword = decodeURIComponent(params.slug);

    let title = "영상";

    if (keyword === "like") {
        title = "가장 인기 있는 영상";
    } else if (keyword === "createdAt") {
        title = "최신 업로드 영상";
    } else if (keyword === "view") {
        title = "조회 수가 높은 영상";
    }

    return (
        <div className="flex flex-col items-center mb-24 font-Pretendard">
            <Header />
            <div className="w-full lg:pt-2 lg:pl-36">
                <div className="text-crimson font-bold ml-5 mt-5 text-3xl">
                    {title}
                </div>
                <Suspense fallback={<Spinner />}>
                    <TopData keyword={keyword} />
                </Suspense>
            </div>
            <TabBar />
        </div>
    );
};

export default Top;

//test
