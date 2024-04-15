"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { deleteLikeBucket, getFavoriteList } from "@/app/_apis/supabase-api";
import Link from "next/link";

interface FavoriteItem {
    title: string;
    img: string;
    actor: string;
    category: string;
    like: number;
}

const FavoriteList = () => {
    const [status, setStatus] = useState(0);
    const [list, setList] = useState<FavoriteItem[] | null>();
    const getList = async () => {
        const data = await getFavoriteList();
        if (data.status === 200) {
            setList(data.data);
        }
        setStatus(data.status);
    };

    const onClickLike = async (title: string, like: number) => {
        await deleteLikeBucket(title, like);
        getList();
        alert("삭제");
    };

    useEffect(() => {
        getList();
    }, []);

    return (
        <div className="w-full flex flex-col justify-center gap-4 mt-6">
            {status === 200 &&
                list &&
                (list.length > 0 ? (
                    list.map((item) => (
                        <div
                            key={item.title}
                            className="relative w-full flex items-center gap-8 pb-4 border-b border-default"
                        >
                            <Image
                                className="rounded-xl"
                                alt={item.title}
                                src={item.img}
                                style={{ width: "120px", height: "171px" }}
                                width={120}
                                height={171}
                                priority
                            />
                            <div className="flex flex-col gap-2">
                                <div className="text-white font-bold text-lg">
                                    {item.title}
                                </div>
                                <div className="text-crimson font-bold">
                                    {item.category}
                                </div>
                                <div className="text-default">
                                    출연: {item.actor}
                                </div>
                            </div>
                            <Image
                                onClick={() =>
                                    onClickLike(item.title, item.like)
                                }
                                className="cursor-pointer absolute right-0 top-0"
                                alt="like-icon"
                                src="/svg/like.svg"
                                height={28}
                                width={28}
                            />
                        </div>
                    ))
                ) : (
                    <div className="w-full absolute top-1/3 left-1/2 -translate-x-1/2 flex flex-col items-center text-crimson">
                        <Image
                            alt="rocket-icon"
                            src="/svg/rocket.svg"
                            height={100}
                            width={100}
                            priority
                        />
                        <div className="mt-4">즐겨찾는 영상이 없어요.</div>
                        <div>좋아하는 영상을 '찜' 해보세요.</div>
                    </div>
                ))}
            {status === 403 && (
                <div className="w-full absolute top-1/3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-crimson">
                    <Image
                        alt="rocket-icon"
                        src="/svg/rocket.svg"
                        height={100}
                        width={100}
                        priority
                    />
                    <div>즐겨찾는 영상을 등록해보세요.</div>
                    <Link href="/login" className="border px-4 py-2 rounded">
                        로그인
                    </Link>
                </div>
            )}
        </div>
    );
};

export default FavoriteList;
