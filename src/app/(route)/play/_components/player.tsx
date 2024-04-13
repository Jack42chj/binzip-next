import Image from "next/image";
import { Suspense } from "react";
import Spinner from "@/app/_components/spinner";
import { getVideoData } from "@/app/_apis/supabase-api";
import { KeywordProps } from "@/app/_interfaces/keyword-interface";
import Video from "./video";

const Player = async ({ keyword }: KeywordProps) => {
    const data = await getVideoData(keyword);
    const list = data[0];

    return (
        list && (
            <div className="w-full flex flex-col relative mb-24">
                <Suspense fallback={<Spinner />}>
                    <Video
                        link={list.api}
                        title={list.title}
                        view={list.view}
                    />
                </Suspense>
                <div className="w-full flex flex-col gap-5 p-5">
                    <div className="font-bold text-2xl">{list.title}</div>
                    <div className="flex items-center gap-2.5">
                        <div className="cursor-pointer flex items-center gap-2">
                            <Image
                                alt="like-icon"
                                src="/svg/like.svg"
                                height={24}
                                width={24}
                            />
                            {list.like}
                        </div>
                        <div className="text-4xl">&#183;</div>
                        <div>{list.createdAt}</div>
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
                            <div className="text-xs">바로가기</div>
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
                            <div className="text-xs">공유</div>
                        </div>
                    </div>
                    <div className="leading-6">{list.description}</div>
                    <div className="flex items-center gap-2.5 text-sub">
                        <div>감독</div>
                        <div>{list.director}</div>
                    </div>
                    <div className="flex items-center gap-2.5 text-sub">
                        <div>출연</div>
                        <div>{list.actor}</div>
                    </div>
                    <div className="flex items-center gap-2.5 text-sub">
                        <div>장르</div>
                        <div>{list.category}</div>
                    </div>
                </div>
            </div>
        )
    );
};

export default Player;
