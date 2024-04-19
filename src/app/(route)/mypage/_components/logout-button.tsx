"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "@/app/_apis/supabase-api";
import useAuthInfo from "@/app/_stores/auth-store";

const LogoutButton = () => {
    const router = useRouter();
    const { deleteUser } = useAuthInfo();
    const Logout = async () => {
        await LogOut();
        deleteUser();
        router.push("/");
    };
    return (
        <div
            className="cursor-pointer h-12 flex justify-center items-center text-crimson rounded-lg border-2 border-solid hover:bg-secondary"
            onClick={Logout}
        >
            로그아웃
        </div>
    );
};

export default LogoutButton;

//test
