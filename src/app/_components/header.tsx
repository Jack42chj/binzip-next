"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getUserInfo } from "../_apis/supabase-api";
import useAuthInfo from "../_stores/auth-store";

const Header = () => {
    const { setUser, userInfo } = useAuthInfo();
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);

    const getUser = async () => {
        const user = await getUserInfo();
        if (user) setUser(user);
        else return;
    };

    useEffect(() => {
        getUser();
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`w-full sticky top-0 z-50 flex justify-center ${
                scrolled ? "bg-primary opacity-90" : "bg-transparent"
            }`}
        >
            <div className="w-full h-14 flex justify-between items-center px-5 my-2">
                <div
                    className="cursor-pointer text-2xl font-bold text-white text-Pretendard"
                    onClick={() => router.push("/main")}
                >
                    <Image
                        alt="logo-icon"
                        src="/svg/logo.svg"
                        width={114}
                        height={36}
                        priority
                    />
                </div>
                <div
                    className="cursor-pointer"
                    onClick={() => router.push("/mypage")}
                >
                    {userInfo.name !== "" ? (
                        <div className="flex items-center gap-4">
                            <Image
                                alt="avatar-icon"
                                src={userInfo.avatar}
                                className="h-9 w-9 rounded-full"
                                height={36}
                                width={36}
                            />
                            <div className="font-Pretendard font-bold text-white text-lg">
                                {userInfo.name}
                            </div>
                        </div>
                    ) : (
                        <Image
                            alt="avatar-icon"
                            src="/svg/avatar.svg"
                            className="h-9 w-9"
                            height={36}
                            width={36}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
