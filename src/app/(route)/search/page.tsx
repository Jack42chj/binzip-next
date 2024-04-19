import TabBar from "@/app/_components/tab-bar";
import Header from "./_components/header";
import Tag from "./_components/tag";
import Input from "./_components/input";

const Search = () => {
    return (
        <div className="flex flex-col items-center font-Pretendard text-white">
            <Header />
            <div className="max-w-3xl w-full h-screen flex flex-col gap-y-5">
                <div className="font-bold text-2xl px-6 mt-5">
                    어떤 드라마를 찾아 볼까요?
                </div>
                <Input />
                <div className="font-bold text-xl px-6 mt-5">추천 키워드</div>
                <Tag />
            </div>
            <TabBar />
        </div>
    );
};

export default Search;

//test
