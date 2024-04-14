"use client";

import {
    AddLikeBucket,
    CheckLiked,
    DeleteLikeBucket,
    getUserInfo,
} from "@/app/_apis/supabase-api";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ButtonProps {
    link: string;
    title: string;
    like: number;
    createdAt: string;
}

const IconButton = ({ link, title, like, createdAt }: ButtonProps) => {
    const router = useRouter();
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(like);

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
                await DeleteLikeBucket(title, like);
                alert("좋아요 취소");
                setLikeCount((prev) => prev - 1);
            } else {
                await AddLikeBucket(title, like);
                alert("좋아요 성공");
                setLikeCount((prev) => prev + 1);
            }
            handleCheckLiked();
        }
    };

    const handleCheckLiked = async () => {
        const loginStatus = await getUserInfo();
        if (loginStatus === null) {
            setLiked(false);
        } else {
            const data = await CheckLiked(title);
            if (data === false) setLiked(false);
            else setLiked(true);
        }
    };

    useEffect(() => {
        handleCheckLiked();
    }, []);

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
                <div>{createdAt}</div>
            </div>
            <div className="flex items-center gap-6">
                <div
                    className="cursor-pointer flex flex-col items-center gap-2"
                    onClick={() => window.open(link)}
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
