import Image from "next/image";
import Link from "next/link";
import { getResultData } from "@/app/_apis/supabase-api";
import { KeywordProps } from "@/app/_interfaces/keyword-interface";

const ResultList = async ({ keyword }: KeywordProps) => {
    const list = await getResultData(keyword);
    return (
        <>
            <div className="flex items-center m-5 gap-2">
                <div className="text-white font-Pretendard font-bold text-xl">
                    전체
                </div>
                <div className="text-crimson font-Pretendard font-bold text-xl">
                    {list.length}
                </div>
            </div>
            <div className="w-full grid grid-cols-custom gap-2.5 px-5">
                {list.map((item) => (
                    <Link
                        key={item.title}
                        href={`/play/${encodeURIComponent(item.title)}`}
                    >
                        <div className="cursor-pointer">
                            <Image
                                className="rounded-xl transition-transform duration-350 hover:scale-105"
                                alt={item.title}
                                src={item.img}
                                style={{ width: "162px", height: "231px" }}
                                width={162}
                                height={231}
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default ResultList;
