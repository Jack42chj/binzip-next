"use client";

import {
    addLikeBucket,
    CheckLiked,
    deleteLikeBucket,
    getUserInfo,
} from "@/app/_apis/supabase-api";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ButtonProps {
    list: {
        title: string;
        createdAt: string;
        api: string;
        link: string;
        like: number;
        view: number;
        category: string;
        actor: string;
        director: string;
        description: string;
    };
}

const IconButton = ({ list }: ButtonProps) => {
    const router = useRouter();
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    const onClickShare = () => {
        let currentUrl = window.document.location.href;
        navigator.clipboard.writeText(currentUrl).then(() => {
            alert("복사가 완료되었습니다");
        });
    };

    const onClickLike = async () => {
        const loginStatus = await getUserInfo();
        if (loginStatus === null) {
            const ok = confirm(
                "로그인이 필요한 서비스입니다. \n로그인 하시겠습니까?"
            );
            if (ok) {
                router.push("/login");
            }
        } else {
            if (liked) {
                deleteMutation.mutate();
            } else {
                addMutation.mutate();
            }
            setLiked((prevLiked) => !prevLiked);
        }
    };

    const addMutation = useMutation({
        mutationFn: async () => addLikeBucket(list.title, list.like),
        onSuccess: () => {
            setLikeCount((prev) => prev + 1);
            alert("좋아요 성공");
        },
    });

    const deleteMutation = useMutation({
        mutationFn: async () => deleteLikeBucket(list.title, list.like),
        onSuccess: () => {
            setLikeCount((prev) => prev - 1);
            alert("좋아요 취소");
        },
    });

    const handleCheckLiked = async () => {
        const loginStatus = await getUserInfo();
        if (loginStatus !== null) {
            const data = await CheckLiked(list.title);
            if (data === false) setLiked(false);
            else setLiked(true);
        }
    };

    useEffect(() => {
        if (list) {
            setLikeCount(list.like);
        }
        handleCheckLiked();
    }, [list]);

    return (
        <>
            <div className="flex items-center gap-2.5">
                <div className="cursor-pointer flex items-center gap-2">
                    <Image
                        alt="like-icon"
                        src="/svg/like.svg"
                        height={24}
                        width={24}
                    />
                    {likeCount}
                </div>
                <div className="text-4xl">&#183;</div>
                <div>{list.createdAt}</div>
            </div>
            <div className="flex items-center gap-6">
                <div
                    className="cursor-pointer flex flex-col items-center gap-2"
                    onClick={() => window.open(list.link)}
                >
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
                <div
                    className="cursor-pointer flex flex-col items-center gap-2"
                    onClick={onClickShare}
                >
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
                <div
                    className="cursor-pointer flex flex-col items-center gap-2"
                    onClick={onClickLike}
                >
                    {liked ? (
                        <div className="w-8 h-8 flex justify-center items-center bg-white rounded-full">
                            <Image
                                alt="dislike-icon"
                                src="/svg/dislike.svg"
                                height={16}
                                width={16}
                            />
                        </div>
                    ) : (
                        <div className="w-8 h-8 flex justify-center items-center border-solid border border-white rounded-full">
                            <Image
                                alt="plus-icon"
                                src="/svg/plus.svg"
                                height={16}
                                width={16}
                            />
                        </div>
                    )}
                    <div className="text-xs">찜</div>
                </div>
            </div>
        </>
    );
};

export default IconButton;
