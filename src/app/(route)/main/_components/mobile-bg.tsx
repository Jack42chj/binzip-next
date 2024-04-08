import SearchBox from "./search-box";

const Mobile = () => {
    return (
        <div className="w-full h-screen absolute flex flex-col justify-center items-center gap-8 px-2.5 bg-cover bg-ceter bg-main lg:hidden">
            <div className="text-white text-center font-Pretendard font-bold text-2xl leading-normal sx:text-3xl sx:leading-normal md:text-4xl md:leading-normal">
                한 번에 모든 감정을 폭발시킬
                <br /> 최종 결말까지 순삭!
                <br /> 당신의 마음을 사로잡을 드라마
                <br /> 지금 즉시 감상하세요!
            </div>
            <div className="text-white text-center text-base font-Pretendard leading-normal md:text-xl">
                지금 여기서 국내 드라마 결말까지 정주행하자!
            </div>
            <SearchBox />
        </div>
    );
};

export default Mobile;
