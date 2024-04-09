import { Suspense } from "react";
import Spinner from "@/app/_components/spinner";
import TabBar from "@/app/_components/tab-bar";
import ResultList from "../_components/result-list";
import ResultHeader from "../_components/result-header";

const SearchResult = ({ params }: { params: { slug: string } }) => {
    const keyword = decodeURIComponent(params.slug);
    return (
        <div className="flex flex-col items-center mb-24">
            <ResultHeader keyword={keyword} />
            <div className="w-full lg:pt-2.5 lg:pl-36">
                <Suspense fallback={<Spinner />}>
                    <ResultList keyword={keyword} />
                </Suspense>
            </div>
            <TabBar />
        </div>
    );
};

export default SearchResult;
