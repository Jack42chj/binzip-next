"use client";

import { useQuery } from "@tanstack/react-query";
import { getVideoData } from "@/app/_apis/supabase-api";
import { KeywordProps } from "@/app/_interfaces/keyword-interface";
import Spinner from "@/app/_components/spinner";
import Video from "./video";
import Button from "./button";

const VideoPlayer = ({ keyword }: KeywordProps) => {
    const { data: list, isLoading } = useQuery({
        queryKey: ["play_data"],
        queryFn: async () => getVideoData(keyword),
    });
    if (isLoading) return <Spinner />;

    return (
        list && (
            <div className="w-full flex flex-col relative mb-24">
                <Video link={list.api} title={list.title} view={list.view} />
                <div className="w-full flex flex-col gap-5 p-5">
                    <div className="font-bold text-2xl">{list.title}</div>
                    <Button list={list} />
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

export default VideoPlayer;
