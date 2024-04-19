"use client";

import Image from "next/image";
import Link from "next/link";
import TabBar from "@/app/_components/tab-bar";
import useAuthInfo from "@/app/_stores/auth-store";
import UserHeader from "./_components/user-header";
import UserItem from "./_components/user-item";
import LogoutButton from "./_components/logout-button";

const MyPage = () => {
    const { userInfo } = useAuthInfo();
    return (
        <div className="flex flex-col items-center font-Pretendard">
            <UserHeader />
            <div className="max-w-[768px] w-full flex flex-col gap-5 px-5">
                {userInfo.name !== "" ? (
                    <>
                        <div className="flex items-center gap-5 mt-5">
                            <Image
                                className="rounded-full"
                                alt="user-icon"
                                src={userInfo.avatar}
                                width={56}
                                height={56}
                            />
                            <div className="flex flex-col  gap-2.5  text-white">
                                <div className="font-bold text-xl">
                                    {userInfo.name}
                                </div>
                                <div>{userInfo.email}</div>
                            </div>
                        </div>
                        <LogoutButton />
                    </>
                ) : (
                    <>
                        <div className="flex items-center gap-5 mt-5">
                            <Image
                                alt="user-icon"
                                src="/svg/avatar.svg"
                                width={56}
                                height={56}
                            />
                            <div className="text-white text-xl">
                                아직 계정이 없으신가요?
                            </div>
                        </div>
                        <Link
                            href="/login"
                            className="cursor-pointer h-12 flex justify-center items-center text-crimson rounded-lg border-2 border-solid hover:bg-secondary"
                        >
                            로그인하고 시작하기
                        </Link>
                    </>
                )}
                <UserItem />
            </div>
            <TabBar />
        </div>
    );
};

export default MyPage;

//test
