"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter();
    return (
        <div className="w-full h-16 z-50 sticky top-0 flex justify-start items-center pt-2 px-5 bg-primary">
            <div
                className="cursor-pointer flex items-center"
                onClick={() => router.back()}
            >
                <Image
                    alt="chevron-left-icon"
                    src="/svg/chevron-left.svg"
                    height={32}
                    width={32}
                />
            </div>
        </div>
    );
};

export default Header;
