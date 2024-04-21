import Image from "next/image";
import Link from "next/link";

const UserItem = () => {
    return (
        <div className="w-full flex flex-col">
            <div className="flex flex-col justify-center gap-7 my-4">
                <div className="text-white font-bold">My 메뉴</div>
                <Link
                    className="cursor-pointer flex items-center gap-4 text-white"
                    href="/my-favorite"
                >
                    <Image
                        alt="like-icon"
                        src="/svg/plus.svg"
                        width={28}
                        height={28}
                    />
                    찜 관리
                </Link>
            </div>
            <div className="flex flex-col justify-center gap-7 mt-4">
                <div className="text-white font-bold">고객 문의</div>
                <div className="cursor-pointer flex items-center gap-4">
                    <Image
                        alt="mail-icon"
                        src="/svg/mail.svg"
                        width={28}
                        height={28}
                    />
                    <div className="flex flex-col gap-2 text-white">
                        <div>이메일</div>
                        <div>binzip@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserItem;
