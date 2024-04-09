import Image from "next/image";
import { getVideoData } from "@/app/_apis/supabase-api";
import { KeywordProps } from "@/app/_interfaces/keyword-interface";

const Player = async ({ keyword }: KeywordProps) => {
    const data = await getVideoData(keyword);
    const list = data[0];

    return (
        <div className="w-full flex flex-col relative mb-24">
            <div className="relative pb-[56.25%] lg:mr-2.5">
                <div className="w-full h-full absolute">
                    <iframe
                        className="w-full h-full"
                        title="YouTube video player"
                        src={list.api}
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>
            </div>
            <div className="w-full flex flex-col gap-5 p-5">
                <div className="text-white font-bold text-2xl font-Pretendard">
                    {list.title}
                </div>
                <div className="flex items-center gap-2.5">
                    <div className="cursor-pointer flex items-center text-white gap-2 font-Pretendard">
                        <Image
                            alt="like-icon"
                            src="/svg/like.svg"
                            height={24}
                            width={24}
                        />
                        {list.like}
                    </div>
                    <div className="text-white text-4xl">&#183;</div>
                    <div className="text-base text-white font-Pretendard">
                        {list.createdAt}
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="cursor-pointer flex flex-col items-center gap-2">
                        <div className="w-8 h-8 flex justify-center items-center border-solid border border-white rounded-full">
                            <Image
                                alt="link-icon"
                                src="/svg/link.svg"
                                height={16}
                                width={16}
                            />
                        </div>
                        <div className="text-white text-xs font-Pretendard">
                            바로가기
                        </div>
                    </div>
                    <div className="cursor-pointer flex flex-col items-center gap-2">
                        <div className="w-8 h-8 flex justify-center items-center border-solid border border-white rounded-full">
                            <Image
                                alt="share-icon"
                                src="/svg/share.svg"
                                height={16}
                                width={16}
                            />
                        </div>
                        <div className="text-white text-xs font-Pretendard">
                            공유
                        </div>
                    </div>
                </div>
                <div className="text-white text-base leading-6 font-Pretendard">
                    {list.description}
                </div>
                <div className="flex items-center gap-2.5">
                    <div className="text-base text-sub font-Pretendard">
                        감독
                    </div>
                    <div className="text-base text-sub font-Pretendard">
                        {list.director}
                    </div>
                </div>
                <div className="flex items-center gap-2.5">
                    <div className="text-base text-sub font-Pretendard">
                        출연
                    </div>
                    <div className="text-base text-sub font-Pretendard">
                        {list.actor}
                    </div>
                </div>
                <div className="flex items-center gap-2.5 ">
                    <div className="text-base text-sub font-Pretendard">
                        장르
                    </div>
                    <div className="text-base text-sub font-Pretendard">
                        {list.category}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;
