import { Suspense } from "react";
import TabBar from "@/app/_components/tab-bar";
import Spinner from "@/app/_components/spinner";
import Header from "../_components/header";
import CategoryResult from "../_components/category-result";

const Genre = ({ params }: { params: { slug: string } }) => {
    const keyword = decodeURIComponent(params.slug);

    return (
        <div className="flex flex-col items-center mb-24 font-Pretendard text-white">
            <Header />
            <div className="w-full lg:pt-2 lg:pl-36">
                <Suspense fallback={<Spinner />}>
                    <CategoryResult keyword={keyword} />
                </Suspense>
            </div>
            <TabBar />
        </div>
    );
};

export default Genre;
