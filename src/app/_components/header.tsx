"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
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
            className={`w-full sticky top-0 z-999 flex justify-center ${
                scrolled ? "bg-gray-900 opacity-90" : "bg-transparent"
            }`}
        >
            <div className="w-full h-16 flex justify-between items-center px-4 my-2">
                <div
                    className="cursor-pointer text-2xl font-bold text-white"
                    onClick={() => router.push("/")}
                >
                    BinZip
                </div>
                <div
                    className="cursor-pointer"
                    onClick={() => router.push("/my-page")}
                >
                    <Image
                        alt="avatar-icon"
                        src="/svg/avatar.svg"
                        className="h-9 w-9"
                        height={36}
                        width={36}
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
