"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Input = () => {
    const router = useRouter();
    const [keyword, setKeyword] = useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (keyword === "") return;
        router.push(`/search/${keyword}`);
    };

    const onClickIcon = () => {
        if (keyword === "") return;
        router.push(`/search/${keyword}`);
    };

    const onClickCancle = () => {
        setKeyword("");
    };

    return (
        <form
            className="w-full flex relative items-center"
            onSubmit={handleSubmit}
        >
            <input
                className="cursor-pointer text-base font-Pretendard w-full m-5 px-6 py-4 bg-secondary border-solid border border-white rounded-full text-white outline-none focus:border-2"
                onChange={onChange}
                placeholder="드라마 제목이나 장르를 검색해보세요"
                type="text"
                value={keyword}
            />
            <Image
                className="cursor-pointer absolute right-12"
                alt="search-icon"
                src="/svg/search.svg"
                height={20}
                width={20}
                onClick={onClickIcon}
            />
            {keyword !== "" && (
                <Image
                    className="cursor-pointer absolute right-20"
                    alt="cancle-icon"
                    src="/svg/cancle.svg"
                    height={20}
                    width={20}
                    onClick={onClickCancle}
                />
            )}
        </form>
    );
};

export default Input;

//test
