import Image from "next/image";
import Link from "next/link";
import { getTopData } from "@/app/_apis/supabase-api";
import { KeywordProps } from "@/app/_interfaces/keyword-interface";

const TopData = async ({ keyword }: KeywordProps) => {
    const list = await getTopData(keyword);

    return (
        <>
            <div className="flex items-center m-5 gap-2">
                <div className="text-white text-xl font-bold">전체</div>
                <div className="text-crimson text-xl font-bold">
                    {list.length}
                </div>
            </div>
            <div className="w-full grid grid-cols-custom gap-2.5 px-5">
                {list.map((item) => (
                    <Link
                        key={item.title}
                        href={`/play/${encodeURIComponent(item.title)}`}
                    >
                        <div className="cursor-pointer mt-0">
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

export default TopData;
