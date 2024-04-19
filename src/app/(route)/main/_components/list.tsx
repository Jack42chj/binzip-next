import Image from "next/image";
import Link from "next/link";
import { getList } from "@/app/_apis/supabase-api";
import { KeywordProps } from "@/app/_interfaces/keyword-interface";

export const revalidate = 0;

const List = async ({ keyword }: KeywordProps) => {
    const list = await getList(keyword);

    return (
        <div className="w-full flex flex-col">
            <div className="my-4 flex gap-4">
                {list.map((item) => (
                    <Link
                        key={item.title}
                        href={`/play/${encodeURIComponent(item.title)}`}
                        className="cursor-pointer rounded-xl flex-grow-0 flex-shrink-0 flex-basis-auto"
                    >
                        <Image
                            className="rounded-xl transition-transform duration-350 hover:scale-105"
                            alt={item.title}
                            src={item.img}
                            style={{ width: "173px", height: "247px" }}
                            width={173}
                            height={247}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default List;
