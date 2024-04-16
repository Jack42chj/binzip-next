import { getVideoData } from "@/app/_apis/supabase-api";
import { KeywordProps } from "@/app/_interfaces/keyword-interface";
import Video from "./video";
import IconButton from "./icon-button";

export const revalidate = 0;

const Player = async ({ keyword }: KeywordProps) => {
    const data = await getVideoData(keyword);
    const list = data[0];

    return (
        list && (
            <div className="w-full flex flex-col relative mb-24">
                <Video link={list.api} title={list.title} view={list.view} />
                <div className="w-full flex flex-col gap-5 p-5">
                    <div className="font-bold text-2xl">{list.title}</div>
                    <IconButton
                        link={list.link}
                        title={list.title}
                        like={list.like}
                        createdAt={list.createdAt}
                    />
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
