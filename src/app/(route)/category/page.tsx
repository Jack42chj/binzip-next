import { Suspense } from "react";
import Header from "@/app/_components/header";
import Spinner from "@/app/_components/spinner";
import TabBar from "@/app/_components/tab-bar";
import CategoryList from "./_components/category-list";

const Category = () => {
    return (
        <div className="flex flex-col items-center mb-24 font-Pretendard">
            <Header />
            <div className="w-full lg:pt-2.5 lg:pl-36">
                <div className="text-crimson font-bold ml-5 mb-5 text-3xl">
                    카테고리
                </div>
                <Suspense fallback={<Spinner />}>
                    <CategoryList />
                </Suspense>
            </div>
            <TabBar />
        </div>
    );
};

export default Category;

//test
