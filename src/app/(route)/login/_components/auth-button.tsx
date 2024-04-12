"use client";

import Image from "next/image";
import { googleLogin } from "@/app/_apis/supabase-api";

const AuthButton = () => {
    const SignInWithGoogle = async () => {
        await googleLogin();
    };
    return (
        <div
            className="cursor-pointer w-full h-14 flex justify-center items-center gap-2 text-skeleton bg-white rounded-lg"
            onClick={SignInWithGoogle}
        >
            <Image
                alt="google-icon"
                src="/svg/google.svg"
                width={24}
                height={24}
            />
            <div>구글 로그인으로 시작하기</div>
        </div>
    );
};

export default AuthButton;
