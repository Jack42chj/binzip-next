"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const UserHeader = () => {
    const router = useRouter();

    return (
        <div className="w-full bg-primary flex justify-center">
            <div className="w-full h-16 bg-primary flex justify-start pt-2 px-5">
                <div
                    className="cursor-pointer font-bold flex items-center"
                    onClick={() => router.back()}
                >
                    <Image
                        alt="chevron-left-icon"
                        src="/svg/chevron-left.svg"
                        height={32}
                        width={32}
                    />
                    <div className="text-white text-xl absolute left-1/2 top-5.5 transform -translate-x-1/2">
                        마이페이지
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHeader;
