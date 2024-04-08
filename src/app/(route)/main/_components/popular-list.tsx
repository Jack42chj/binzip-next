import { getPopularList } from "@/app/_apis/supabase-api";
import Image from "next/image";

const PopularList = async () => {
    const list = await getPopularList();
    return (
        <div className="w-full flex flex-col">
            <div className="my-4 flex gap-4">
                {list.map((item) => (
                    <div
                        key={item.title}
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularList;
