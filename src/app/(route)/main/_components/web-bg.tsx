import Image from "next/image";

const Web = () => {
    return (
        <div className="w-full flex justify-evenly mt-8 mb-16 max-[1023px]:hidden">
            <div className="flex flex-col justify-around">
                <div className="text-white font-Pretendard font-bold leading-normal text-5xl lg:text-3xl lg:leading-normal xl:text-5xl xl:leading-normal">
                    한 번에 모든 감정을 폭발시킬
                    <br /> 최종 결말까지 순삭!
                    <br /> 당신의 마음을 사로잡을 드라마
                    <br /> 지금 즉시 감상하세요!
                </div>
                <div className="text-white font-Pretendard leading-normal text-xl">
                    지금 여기서 국내 드라마 결말까지 정주행하자!
                </div>
            </div>
            <Image
                className="rounded-xl min-[1023px]:w-[530px] min-[1023px]:h-[298px] min-[1380px]:w-[580px] min-[1380px]:h-[326px] min-[1700px]:w-[638px] min-[1700px]:h-[360px]"
                alt="bg-img"
                src="/webp/webg.webp"
                style={{ width: "auto", height: "auto" }}
                width={851}
                height={480}
            />
        </div>
    );
};

export default Web;
